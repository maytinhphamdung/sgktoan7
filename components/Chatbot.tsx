
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { getGeminiChatResponse, ensureApiKeySelected } from '../services/geminiService';
import { Lesson, ChatMessage } from '../types';
import Button from './Button';
import Loader from './Loader';
import MarkdownRenderer from './MarkdownRenderer';
import { GenerateContentResponse } from "@google/genai";

interface ChatbotProps {
  currentLesson: Lesson | null;
}

const Chatbot: React.FC<ChatbotProps> = ({ currentLesson }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isApiKeyPromptVisible, setIsApiKeyPromptVisible] = useState(false);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Check API key status on mount
  useEffect(() => {
    const checkApiKey = async () => {
      if (typeof window !== 'undefined' && (window as any).aistudio && (window as any).aistudio.hasSelectedApiKey) {
        const hasSelected = await (window as any).aistudio.hasSelectedApiKey();
        setIsApiKeyPromptVisible(!hasSelected);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkApiKey();
  }, []); // Run only once on mount

  const handleSelectApiKey = useCallback(async () => {
    try {
      if (typeof window !== 'undefined' && (window as any).aistudio && (window as any).aistudio.openSelectKey) {
        await (window as any).aistudio.openSelectKey();
        setIsApiKeyPromptVisible(false); // Assume success for UX
      }
    } catch (err) {
      console.error('Error opening API key selection:', err);
      setError('Could not open API key selection. Please try again or check console for details.');
    }
  }, []);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    setError(null);
    const userMessage: ChatMessage = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const geminiChatHistory = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    // Add current user message to history for the API call
    geminiChatHistory.push({ role: 'user', parts: [{ text: input }] });

    try {
      const streamResponse = await getGeminiChatResponse(input, currentLesson, geminiChatHistory);

      let accumulatedContent = '';
      const botMessageId = Date.now().toString() + '-bot';
      setMessages((prev) => [
        ...prev,
        { id: botMessageId, text: '', sender: 'gemini', isStreaming: true },
      ]);

      for await (const chunk of streamResponse) {
        const c = chunk as GenerateContentResponse; // Type assertion
        if (c.text) {
          accumulatedContent += c.text;
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId ? { ...msg, text: accumulatedContent } : msg
            )
          );
        }
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId ? { ...msg, isStreaming: false } : msg
        )
      );

    } catch (err: any) {
      console.error('Gemini API Error:', err);
      setError(err.message || 'Có lỗi xảy ra khi gọi Gemini API. Vui lòng thử lại.');
      if (err.message.includes("API Key might be invalid or not selected.")) {
        setIsApiKeyPromptVisible(true);
      }
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  }, [input, isLoading, messages, currentLesson, scrollToBottom]);

  if (isApiKeyPromptVisible) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-yellow-100 rounded-lg shadow-md border border-yellow-300">
        <p className="text-lg text-yellow-800 mb-4 text-center">
          Để sử dụng chatbot, bạn cần chọn khóa API từ dự án Google Cloud có bật thanh toán.
        </p>
        <p className="text-sm text-yellow-700 mb-4 text-center">
          Tham khảo hướng dẫn tại:{' '}
          <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            ai.google.dev/gemini-api/docs/billing
          </a>
        </p>
        <Button onClick={handleSelectApiKey} variant="primary" size="md">
          Chọn khóa API
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold text-teal-800 mb-4 border-b pb-2">Gia sư AI</h2>

      <div className="flex-1 overflow-y-auto pr-2 mb-4 space-y-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#E0F2F7 #F8F8F8' }}>
        {messages.length === 0 && (
          <p className="text-center text-gray-500 italic mt-10">
            Xin chào! Bạn có câu hỏi gì về bài học không?
          </p>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] p-3 rounded-lg shadow-sm ${
                message.sender === 'user'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <MarkdownRenderer content={message.text} />
              {message.isStreaming && <Loader size="sm" className="inline-block ml-2 !p-0" />}
            </div>
          </div>
        ))}
        {error && (
          <div className="text-red-600 text-sm p-2 bg-red-50 rounded-md">
            <p className="font-medium">Lỗi:</p>
            <p>{error}</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 sticky bottom-0 bg-white pt-2 border-t border-gray-200 -mx-4 px-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Hỏi về bài học..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !input.trim()}>
          {isLoading ? <Loader size="sm" className="!p-0" /> : 'Gửi'}
        </Button>
      </form>
    </div>
  );
};

export default Chatbot;
