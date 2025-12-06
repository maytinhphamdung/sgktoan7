
import React from 'react';
import { Chapter, Lesson } from '../types';
import Button from './Button';

interface SidebarProps {
  chapters: Chapter[];
  onSelectLesson: (chapterId: string, lessonId: string) => void;
  selectedChapterId: string | null;
  selectedLessonId: string | null;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  chapters,
  onSelectLesson,
  selectedChapterId,
  selectedLessonId,
  isSidebarOpen,
  toggleSidebar,
}) => {
  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-teal-800 text-white transform transition-transform duration-300 ease-in-out z-50
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:h-auto lg:w-64 lg:flex-shrink-0`}
      >
        <div className="p-4 flex items-center justify-between border-b border-teal-700">
          <h2 className="text-xl font-bold text-white">Toán 6</h2>
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden p-1 text-white border-white hover:bg-teal-700"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>
        <nav className="p-4 overflow-y-auto h-[calc(100%-65px)]">
          <ul>
            {chapters.map((chapter) => (
              <li key={chapter.id} className="mb-4">
                <h3 className="font-semibold text-teal-200 mb-2 px-2 py-1 rounded">
                  {chapter.title}
                </h3>
                <ul className="ml-2 border-l border-teal-700">
                  {chapter.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <button
                        onClick={() => {
                          onSelectLesson(chapter.id, lesson.id);
                          if (isSidebarOpen) toggleSidebar(); // Close sidebar on mobile after selection
                        }}
                        className={`block w-full text-left p-2 rounded-md text-sm transition-colors duration-200
                          ${selectedChapterId === chapter.id && selectedLessonId === lesson.id
                            ? 'bg-teal-600 text-white font-medium'
                            : 'text-teal-100 hover:bg-teal-700'}
                        `}
                      >
                        {lesson.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
