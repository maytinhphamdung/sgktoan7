
import React, { useEffect } from 'react';
import { Lesson, ContentPart, ContentPartType } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import QuizComponent from './QuizComponent'; // Import the new QuizComponent

interface ProgressState {
  [lessonId: string]: {
    completed: boolean;
    score?: number;
    viewed?: boolean;
  };
}

interface ChapterContentProps {
  lesson: Lesson;
  userProgress: ProgressState; // Add userProgress prop
  onLessonCompletion: (lessonId: string, scorePercentage?: number) => void; // Add callback
}

const renderContentPart = (
  part: ContentPart,
  index: number,
  lessonId: string,
  userProgress: ProgressState,
  onLessonCompletion: (lessonId: string, scorePercentage?: number) => void
) => {
  switch (part.type) {
    case ContentPartType.HEADING_PRIMARY:
      return (
        <h2 key={index} className="text-3xl font-extrabold text-teal-800 mb-5 mt-8 border-b-2 border-teal-200 pb-2">
          <MarkdownRenderer content={part.value || ''} />
        </h2>
      );
    case ContentPartType.HEADING_SECONDARY:
      return (
        <h3 key={index} className="text-2xl font-bold text-teal-700 mb-4 mt-7">
          <MarkdownRenderer content={part.value || ''} />
        </h3>
      );
    case ContentPartType.TEXT:
      return (
        <div key={index} className="mb-5 text-gray-700 leading-relaxed text-base">
          <MarkdownRenderer content={part.value || ''} />
        </div>
      );
    case ContentPartType.IMAGE:
      return (
        <div key={index} className="my-8 text-center bg-gray-50 p-4 rounded-lg shadow-inner">
          <img
            src={part.imageUrl}
            alt={part.alt || 'Illustration'}
            className="max-w-full h-auto mx-auto rounded-lg shadow-md border border-gray-200"
          />
          {part.value && ( // Use part.value as the caption, as it contains Markdown
            <p className="mt-3 text-sm text-gray-600 italic">
              <MarkdownRenderer content={part.value} />
            </p>
          )}
        </div>
      );
    case ContentPartType.EXAMPLE:
      return (
        <div key={index} className="my-6 p-5 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg shadow-sm">
          <p className="font-bold text-teal-800 mb-2 text-lg flex items-center">
            <i className="fas fa-lightbulb mr-3 text-teal-600"></i>
            {part.label || 'Ví dụ'}:
          </p>
          <div className="text-teal-700 text-base leading-relaxed">
            <MarkdownRenderer content={part.value || ''} />
          </div>
        </div>
      );
    case ContentPartType.EXERCISE:
      return (
        <div key={index} className="my-6 p-5 bg-gray-100 border-l-4 border-gray-400 rounded-r-lg shadow-sm">
          <p className="font-bold text-gray-800 mb-2 text-lg flex items-center">
            <i className="fas fa-pencil-alt mr-3 text-gray-600"></i>
            {part.label || 'Bài tập'}:
          </p>
          <div className="text-gray-700 text-base leading-relaxed">
            <MarkdownRenderer content={part.value || ''} />
          </div>
        </div>
      );
    case ContentPartType.NOTE:
      return (
        <div key={index} className="my-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg shadow-sm">
          <p className="font-bold text-blue-800 mb-2 text-lg flex items-center">
            <i className="fas fa-info-circle mr-3 text-blue-600"></i>
            {part.label || 'Lưu ý'}:
          </p>
          <div className="text-blue-700 text-base leading-relaxed">
            <MarkdownRenderer content={part.value || ''} />
          </div>
        </div>
      );
    case ContentPartType.DID_YOU_KNOW:
      return (
        <div key={index} className="my-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg shadow-sm">
          <p className="font-bold text-yellow-800 mb-2 text-lg flex items-center">
            <i className="fas fa-question-circle mr-3 text-yellow-600"></i>
            {part.label || 'Em có biết?'}:
          </p>
          <div className="text-yellow-700 text-base leading-relaxed">
            <MarkdownRenderer content={part.value || ''} />
          </div>
        </div>
      );
    case ContentPartType.SOLUTION: // Placeholder if solutions were directly embedded
      return (
        <div key={index} className="my-6 p-5 bg-green-50 border-l-4 border-green-500 rounded-r-lg shadow-sm">
          <p className="font-bold text-green-800 mb-2 text-lg flex items-center">
            <i className="fas fa-check-circle mr-3 text-green-600"></i>
            {part.label || 'Giải'}:
          </p>
          <div className="text-green-700 text-base leading-relaxed">
            <MarkdownRenderer content={part.value || ''} />
          </div>
        </div>
      );
    case ContentPartType.QUIZ: // New case for Quiz content
      if (!part.quiz) return null;
      const isLessonCompleted = userProgress[lessonId]?.completed || false;
      return (
        <div key={index} className="quiz-container">
          <QuizComponent
            quiz={part.quiz}
            onQuizComplete={(scorePercentage) => onLessonCompletion(lessonId, scorePercentage)}
            isLessonCompleted={isLessonCompleted}
          />
        </div>
      );
    default:
      return (
        <div key={index} className="my-4 text-gray-700 text-base">
          <MarkdownRenderer content={part.value || ''} />
        </div>
      );
  }
};

const ChapterContent: React.FC<ChapterContentProps> = ({ lesson, userProgress, onLessonCompletion }) => {

  // Mark lesson as viewed/completed if it has no quiz and isn't already marked
  useEffect(() => {
    const hasQuiz = lesson.content.some(part => part.type === ContentPartType.QUIZ);
    if (!hasQuiz && !userProgress[lesson.id]?.completed && !userProgress[lesson.id]?.viewed) {
      onLessonCompletion(lesson.id);
    }
  }, [lesson.id, lesson.content, userProgress, onLessonCompletion]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md min-h-full">
      <h1 className="text-4xl font-extrabold text-teal-800 mb-7">
        {lesson.title}
      </h1>

      <section className="mb-8 p-5 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-extrabold text-teal-800 mb-3 border-b border-teal-300 pb-2 flex items-center">
          <i className="fas fa-tag mr-3 text-teal-600"></i>
          Khái niệm, thuật ngữ
        </h2>
        <ul className="list-none text-gray-700 text-lg space-y-2">
          {lesson.concepts.map((concept, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check-circle text-teal-500 mt-1 mr-2 flex-shrink-0"></i>
              <MarkdownRenderer content={concept} className="inline" />
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 p-5 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-extrabold text-teal-800 mb-3 border-b border-teal-300 pb-2 flex items-center">
          <i className="fas fa-star mr-3 text-teal-600"></i>
          Kiến thức, kĩ năng
        </h2>
        <ul className="list-none text-gray-700 text-lg space-y-2">
          {lesson.skills.map((skill, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check-square text-teal-500 mt-1 mr-2 flex-shrink-0"></i>
              <MarkdownRenderer content={skill} className="inline" />
            </li>
          ))}
        </ul>
      </section>

      <div className="content-body mt-8">
        {lesson.content.map((part, index) => renderContentPart(part, index, lesson.id, userProgress, onLessonCompletion))}
      </div>
    </div>
  );
};

export default ChapterContent;