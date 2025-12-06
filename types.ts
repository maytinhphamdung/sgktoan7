
export enum ContentPartType {
  TEXT = 'text',
  IMAGE = 'image',
  EXAMPLE = 'example',
  EXERCISE = 'exercise',
  NOTE = 'note',
  DID_YOU_KNOW = 'didYouKnow',
  SOLUTION = 'solution',
  HEADING_PRIMARY = 'headingPrimary', // H1/H2 for lesson sections
  HEADING_SECONDARY = 'headingSecondary', // H3/H4 for sub-sections
  QUIZ = 'quiz', // New content type for quizzes
}

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number; // 0-indexed
}

export interface Quiz {
  id: string;
  label?: string; // e.g., "Kiểm tra kiến thức"
  questions: Question[];
}

export interface ContentPart {
  type: ContentPartType;
  value?: string; // Markdown for text, URL for image, etc. (now optional)
  label?: string; // e.g., "Ví dụ 1", "Luyện tập 1"
  imageUrl?: string; // For images (if type is IMAGE)
  alt?: string; // For image alt text
  quiz?: Quiz; // For quiz content type
}

export interface Lesson {
  id: string;
  title: string;
  concepts: string[]; // Key concepts/terms (Markdown allowed)
  skills: string[]; // Key knowledge/skills (Markdown allowed)
  content: ContentPart[];
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'gemini';
  isStreaming?: boolean;
}