
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Lesson } from '../types';

let ai: GoogleGenAI | null = null;

// Helper to ensure API key is available and initialize GoogleGenAI
const getGenAI = (): GoogleGenAI => {
  if (!process.env.API_KEY) {
    console.error('API_KEY is not set in environment variables.');
    throw new Error('Gemini API Key is not configured. Please ensure process.env.API_KEY is available.');
  }

  // Always create a new instance to ensure the latest API key is used
  // if it might change (e.g., via window.aistudio.openSelectKey in other contexts).
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

// Function to check and potentially open API key selection dialog
export const ensureApiKeySelected = async (): Promise<boolean> => {
  if (typeof window !== 'undefined' && (window as any).aistudio && (window as any).aistudio.hasSelectedApiKey) {
    const hasSelected = await (window as any).aistudio.hasSelectedApiKey();
    if (!hasSelected) {
      console.log("No API key selected, opening dialog.");
      await (window as any).aistudio.openSelectKey();
      // Assume selection was successful for the sake of proceeding
      return true;
    }
    return true;
  }
  // If not in AISTudio environment, assume API_KEY is set via environment variable
  return !!process.env.API_KEY;
};


export const getGeminiChatResponse = async (
  prompt: string,
  currentLesson: Lesson | null,
  chatHistory: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<GenerateContentResponse> => {
  try {
    const isApiKeyReady = await ensureApiKeySelected();
    if (!isApiKeyReady) {
      throw new Error('API Key not selected. Please select an API key to use the chatbot.');
    }

    ai = getGenAI();
    const model = 'gemini-3-pro-preview'; // Using a more capable model for Q&A

    let systemInstruction = `Bạn là một gia sư toán học cho học sinh lớp 6. Hãy giải thích các khái niệm, trả lời các câu hỏi về bài tập và cung cấp hướng dẫn một cách rõ ràng, dễ hiểu. Nếu câu hỏi không liên quan đến toán học, hãy lịch sự từ chối trả lời.`;

    let context = '';
    if (currentLesson) {
      context += `\n\n**Bối cảnh bài học hiện tại:**
      Bài học: ${currentLesson.title}
      Khái niệm chính: ${currentLesson.concepts.join(', ')}
      Kiến thức cần nắm: ${currentLesson.skills.join(', ')}
      `;

      // Add a summary of current lesson content to provide more context
      const relevantContent = currentLesson.content
        .filter(part => part.type === 'text' || part.type === 'exercise' || part.type === 'example')
        .map(part => part.value)
        .join('\n\n')
        .substring(0, 1500); // Limit context length

      if (relevantContent) {
        context += `\n\n**Nội dung bài học:**\n${relevantContent}`;
      }
    }

    const fullPrompt = `${context}\n\n**Câu hỏi của học sinh:** ${prompt}`;

    // Prepare chat history for the model
    const historyForModel = chatHistory.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model', // Map to Gemini's expected roles
      parts: msg.parts,
    }));

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 1024,
      },
      history: historyForModel,
    });

    const result = await chat.sendMessageStream({ message: fullPrompt });
    return result;

  } catch (error: any) {
    console.error('Error in getGeminiChatResponse:', error);
    if (error.message.includes("Requested entity was not found.")) {
      // Specific error for API key issues in AISTudio
      if (typeof window !== 'undefined' && (window as any).aistudio && (window as any).aistudio.openSelectKey) {
        (window as any).aistudio.openSelectKey();
        throw new Error("API Key might be invalid or not selected. Please re-select your API key (paid GCP project required).");
      }
    }
    throw new Error(`Failed to get response from Gemini: ${error.message}`);
  }
};
