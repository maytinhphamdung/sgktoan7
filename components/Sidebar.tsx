
import React from 'react';
import { Chapter, Lesson } from '../types';
import Button from './Button';

interface ProgressState {
  [lessonId: string]: {
    completed: boolean;
    score?: number;
    viewed?: boolean;
  };
}

interface SidebarProps {
  chapters: Chapter[];
  onSelectLesson: (chapterId: string, lessonId: string) => void;
  selectedChapterId: string | null;
  selectedLessonId: string | null;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  userProgress: ProgressState; // New prop for user progress
  isLessonUnlocked: (chapterId: string, lessonId: string) => boolean; // New prop for unlock logic
}

const Sidebar: React.FC<SidebarProps> = ({
  chapters,
  onSelectLesson,
  selectedChapterId,
  selectedLessonId,
  isSidebarOpen,
  toggleSidebar,
  userProgress,
  isLessonUnlocked,
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
          lg:translate-x-0 lg:static lg:h-auto lg:w-72 lg:flex-shrink-0 lg:shadow-xl`}
      >
        <div className="p-4 flex items-center justify-between border-b border-teal-700">
          <h2 className="text-2xl font-extrabold text-white">
            <i className="fas fa-book-open mr-2"></i>Toán 6
          </h2>
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden p-1 text-white border-white hover:bg-teal-700"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
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
        <nav className="p-4 overflow-y-auto h-[calc(100%-73px)]">
          <ul>
            {chapters.map((chapter) => (
              <li key={chapter.id} className="mb-5">
                <h3 className="text-lg font-bold text-teal-200 mb-2 px-2 py-1 flex items-center">
                  <i className="fas fa-bookmark mr-2 text-teal-300"></i>
                  {chapter.title}
                </h3>
                <ul className="ml-2 border-l border-teal-700">
                  {chapter.lessons.map((lesson) => {
                    const unlocked = isLessonUnlocked(chapter.id, lesson.id);
                    const lessonCompleted = userProgress[lesson.id]?.completed || false;

                    return (
                      <li key={lesson.id}>
                        <button
                          onClick={() => {
                            if (unlocked) { // Only allow click if unlocked
                              onSelectLesson(chapter.id, lesson.id);
                              if (isSidebarOpen) toggleSidebar(); // Close sidebar on mobile after selection
                            }
                          }}
                          className={`block w-full text-left py-2 px-3 rounded-md text-base transition-colors duration-200 flex items-center gap-2
                            ${selectedChapterId === chapter.id && selectedLessonId === lesson.id
                              ? 'bg-teal-600 text-white font-semibold shadow-md'
                              : unlocked
                                ? 'text-teal-100 hover:bg-teal-700'
                                : 'text-gray-400 cursor-not-allowed bg-teal-900 opacity-60' // Locked style
                            }
                          `}
                          disabled={!unlocked} // Disable button if locked
                          aria-disabled={!unlocked} // ARIA attribute for accessibility
                          aria-current={selectedChapterId === chapter.id && selectedLessonId === lesson.id ? 'page' : undefined}
                        >
                          {unlocked ? (
                            lessonCompleted ? (
                              <i className="fas fa-check-circle text-green-300"></i> // Completed icon
                            ) : (
                              <i className="fas fa-book text-sm"></i> // Unlocked but not completed
                            )
                          ) : (
                            <i className="fas fa-lock text-gray-500"></i> // Locked icon
                          )}
                          {lesson.title}
                        </button>
                      </li>
                    );
                  })}
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