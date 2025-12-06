
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw'; // For rendering raw HTML if needed

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  return (
    <div className={`prose max-w-none prose-sm sm:prose-base lg:prose-lg xl:prose-xl ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]} // rehypeRaw allows rendering of HTML inside markdown if needed
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
