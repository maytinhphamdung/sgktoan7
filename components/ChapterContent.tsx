
import React from 'react';
import { Lesson, ContentPart, ContentPartType } from '../types';
import MarkdownRenderer from './MarkdownRenderer';

interface ChapterContentProps {
  lesson: Lesson;
}

const renderContentPart = (part: ContentPart, index: number) => {
  switch (part.type) {
    case ContentPartType.HEADING_PRIMARY:
      return (
        <h2 key={index} className="text-2xl font-semibold text-teal-700 mb-4 mt-6">
          <MarkdownRenderer content={part.value} />
        </h2>
      );
    case ContentPartType.HEADING_SECONDARY:
      return (
        <h3 key={index} className="text-xl font-medium text-teal-600 mb-3 mt-5">
          <MarkdownRenderer content={part.value} />
        </h3>
      );
    case ContentPartType.TEXT:
      return (
        <div key={index} className="mb-4 text-gray-700 leading-relaxed">
          <MarkdownRenderer content={part.value} />
        </div>
      );
    case ContentPartType.IMAGE:
      return (
        <div key={index} className="my-6 text-center">
          <img
            src={part.imageUrl}
            alt={part.alt || 'Illustration'}
            className="max-w-full h-auto mx-auto rounded-lg shadow-md"
          />
          {part.value && (
            <p className="mt-2 text-sm text-gray-500">
              <MarkdownRenderer content={part.value} />
            </p>
          )}
        </div>
      );
    case ContentPartType.EXAMPLE:
      return (
        <div key={index} className="my-4 p-4 bg-teal-50 border-l-4 border-teal-500 rounded-r-md shadow-sm">
          <p className="font-semibold text-teal-800 mb-2">
            {part.label || 'Ví dụ'}:
          </p>
          <div className="text-teal-700 text-sm leading-relaxed">
            <MarkdownRenderer content={part.value} />
          </div>
        </div>
      );
    case ContentPartType.EXERCISE:
      return (
        <div key={index} className="my-4 p-4 bg-gray-100 border-l-4 border-gray-400 rounded-r-md shadow-sm">
          <p className="font-semibold text-gray-800 mb-2">
            {part.label || 'Bài tập'}:
          </p>
          <div className="text-gray-700 text-sm leading-relaxed">
            <MarkdownRenderer content={part.value} />
          </div>
        </div>
      );
    case ContentPartType.NOTE:
      return (
        <div key={index} className="my-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-md shadow-sm">
          <p className="font-semibold text-blue-800 mb-1">
            {part.label || 'Lưu ý'}:
          </p>
          <div className="text-blue-700 text-sm leading-relaxed">
            <MarkdownRenderer content={part.value} />
          </div>
        </div>
      );
    case ContentPartType.DID_YOU_KNOW:
      return (
        <div key={index} className="my-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-md shadow-sm">
          <p className="font-semibold text-yellow-800 mb-2">
            {part.label || 'Em có biết?'}:
          </p>
          <div className="text-yellow-700 text-sm leading-relaxed">
            <MarkdownRenderer content={part.value} />
          </div>
        </div>
      );
    case ContentPartType.SOLUTION: // Placeholder if solutions were directly embedded
      return (
        <div key={index} className="my-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-md shadow-sm">
          <p className="font-semibold text-green-800 mb-2">
            {part.label || 'Giải'}:
          </p>
          <div className="text-green-700 text-sm leading-relaxed">
            <MarkdownRenderer content={part.value} />
          </div>
        </div>
      );
    default:
      return (
        <div key={index} className="my-4 text-gray-700">
          <MarkdownRenderer content={part.value} />
        </div>
      );
  }
};

const ChapterContent: React.FC<ChapterContentProps> = ({ lesson }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md min-h-full">
      <h1 className="text-3xl font-extrabold text-teal-800 mb-6">
        {lesson.title}
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-teal-700 mb-3 border-b-2 border-teal-200 pb-2">
          Khái niệm, thuật ngữ
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          {lesson.concepts.map((concept, index) => (
            <li key={index} className="mb-1">
              <MarkdownRenderer content={concept} className="inline" />
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-teal-700 mb-3 border-b-2 border-teal-200 pb-2">
          Kiến thức, kĩ năng
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          {lesson.skills.map((skill, index) => (
            <li key={index} className="mb-1">
              <MarkdownRenderer content={skill} className="inline" />
            </li>
          ))}
        </ul>
      </section>

      <div className="content-body mt-8">
        {lesson.content.map((part, index) => renderContentPart(part, index))}
      </div>
    </div>
  );
};

export default ChapterContent;
