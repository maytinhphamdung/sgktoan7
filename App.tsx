
import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import ChapterContent from './components/ChapterContent';
import Chatbot from './components/Chatbot';
import { TEXTBOOK_DATA } from './constants';
import { Chapter, Lesson } from './types';
import Button from './components/Button';
import Loader from './components/Loader';

function App() {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [appLoading, setAppLoading] = useState(true);

  // Initialize selected lesson to the first lesson of the first chapter
  useEffect(() => {
    if (TEXTBOOK_DATA.length > 0 && TEXTBOOK_DATA[0].lessons.length > 0) {
      const firstChapter = TEXTBOOK_DATA[0];
      const firstLesson = firstChapter.lessons[0];
      setSelectedChapterId(firstChapter.id);
      setSelectedLessonId(firstLesson.id);
      setCurrentLesson(firstLesson);
    }
    setAppLoading(false); // Done initializing
  }, []);

  const handleSelectLesson = useCallback((chapterId: string, lessonId: string) => {
    setSelectedChapterId(chapterId);
    setSelectedLessonId(lessonId);
    const chapter = TEXTBOOK_DATA.find((chap) => chap.id === chapterId);
    if (chapter) {
      const lesson = chapter.lessons.find((less) => less.id === lessonId);
      if (lesson) {
        setCurrentLesson(lesson);
      }
    }
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  if (appLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-teal-50">
        <Loader message="Đang tải ứng dụng..." size="lg" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-teal-50">
      {/* Sidebar */}
      <Sidebar
        chapters={TEXTBOOK_DATA}
        onSelectLesson={handleSelectLesson}
        selectedChapterId={selectedChapterId}
        selectedLessonId={selectedLessonId}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:ml-64 p-4 lg:p-6 overflow-hidden">
        {/* Mobile menu button */}
        <div className="sticky top-0 z-30 lg:hidden bg-teal-50 py-3 mb-4">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="flex items-center gap-2 p-2 rounded-lg shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <span className="text-gray-800">Menu bài học</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          <div className="lg:col-span-2 overflow-y-auto">
            {currentLesson ? (
              <ChapterContent lesson={currentLesson} />
            ) : (
              <div className="p-6 bg-white rounded-lg shadow-md min-h-full flex items-center justify-center">
                <p className="text-xl text-gray-600">Vui lòng chọn một bài học từ menu.</p>
              </div>
            )}
          </div>
          <div className="lg:col-span-1 min-h-[400px] flex">
            <Chatbot currentLesson={currentLesson} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
