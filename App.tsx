
import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import ChapterContent from './components/ChapterContent';
import Chatbot from './components/Chatbot';
import { TEXTBOOK_DATA } from './constants';
import { Chapter, Lesson, ContentPartType } from './types';
import Button from './components/Button';
import Loader from './components/Loader';

interface ProgressState {
  [lessonId: string]: {
    completed: boolean;
    score?: number;
    viewed?: boolean;
  };
}

function App() {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [appLoading, setAppLoading] = useState(true);
  const [userProgress, setUserProgress] = useState<ProgressState>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  // Handle lesson completion (quiz score or just viewing for lessons without quiz)
  const handleLessonCompletion = useCallback((lessonId: string, scorePercentage?: number) => {
    setUserProgress((prevProgress) => {
      const updatedProgress = { ...prevProgress };
      const lesson = TEXTBOOK_DATA.flatMap(c => c.lessons).find(l => l.id === lessonId);
      const hasQuiz = lesson?.content.some(p => p.type === ContentPartType.QUIZ) || false;

      if (hasQuiz && scorePercentage !== undefined) {
        // If there's a quiz and score is provided, update based on score
        const isPassed = scorePercentage >= 80; // 80% pass threshold
        updatedProgress[lessonId] = {
          ...updatedProgress[lessonId],
          completed: isPassed,
          score: scorePercentage,
          viewed: true,
        };
      } else if (!hasQuiz) {
        // If no quiz, mark as completed just by viewing
        updatedProgress[lessonId] = {
          ...updatedProgress[lessonId],
          completed: true,
          viewed: true,
        };
      }
      return updatedProgress;
    });
  }, []);

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

  const isLessonUnlocked = useCallback((chapterId: string, lessonId: string) => {
    const chapterIndex = TEXTBOOK_DATA.findIndex(c => c.id === chapterId);
    const lessonIndex = TEXTBOOK_DATA[chapterIndex]?.lessons.findIndex(l => l.id === lessonId);

    // If for some reason chapter or lesson is not found
    if (chapterIndex === -1 || lessonIndex === -1) {
      return false;
    }

    // The very first lesson is always unlocked
    if (chapterIndex === 0 && lessonIndex === 0) {
      return true;
    }

    // Check if previous lesson in the same chapter is completed
    if (lessonIndex > 0) {
      const prevLessonId = TEXTBOOK_DATA[chapterIndex].lessons[lessonIndex - 1].id;
      return userProgress[prevLessonId]?.completed || false;
    }

    // Check if the last lesson of the previous chapter is completed
    if (chapterIndex > 0) {
      const prevChapter = TEXTBOOK_DATA[chapterIndex - 1];
      const lastLessonOfPrevChapter = prevChapter.lessons[prevChapter.lessons.length - 1];
      return userProgress[lastLessonOfPrevChapter.id]?.completed || false;
    }

    return false;
  }, [userProgress]);

  const handleSelectLesson = useCallback((chapterId: string, lessonId: string) => {
    // Only allow selection if the lesson is unlocked
    if (!isLessonUnlocked(chapterId, lessonId)) {
      return; // Prevent selecting locked lessons
    }

    setSelectedChapterId(chapterId);
    setSelectedLessonId(lessonId);
    const chapter = TEXTBOOK_DATA.find((chap) => chap.id === chapterId);
    if (chapter) {
      const lesson = chapter.lessons.find((less) => less.id === lessonId);
      if (lesson) {
        setCurrentLesson(lesson);
        // ChapterContent will handle marking non-quiz lessons as viewed/completed
      }
    }
  }, [isLessonUnlocked]); // Dependency on isLessonUnlocked

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

  // Determine if the currently selected lesson's content should be displayed or a locked message
  const isCurrentLessonLocked = selectedChapterId && selectedLessonId
    ? !isLessonUnlocked(selectedChapterId, selectedLessonId)
    : false;

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
        userProgress={userProgress}
        isLessonUnlocked={isLessonUnlocked}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:ml-72 p-4 lg:p-6 overflow-hidden">
        {/* Mobile menu button */}
        <div className="sticky top-0 z-30 lg:hidden bg-teal-50 py-3 mb-4 -mx-4 px-4 shadow-md">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="w-full flex items-center justify-center gap-2 p-3 text-lg"
            aria-label="Open lesson menu"
          >
            <i className="fas fa-bars"></i>
            <span className="text-gray-800">Menu bài học</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          <div className="lg:col-span-2 overflow-y-auto max-h-[calc(100vh-theme(spacing.16))] lg:max-h-full scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-100">
            {currentLesson ? (
              isCurrentLessonLocked ? (
                <div className="p-6 bg-white rounded-lg shadow-md min-h-full flex flex-col items-center justify-center text-center">
                  <i className="fas fa-lock text-6xl text-gray-400 mb-4"></i>
                  <p className="text-2xl font-bold text-gray-700 mb-2">Bài học bị khóa</p>
                  <p className="text-lg text-gray-600">Bạn cần hoàn thành bài học trước để mở khóa nội dung này.</p>
                </div>
              ) : (
                <ChapterContent
                  lesson={currentLesson}
                  userProgress={userProgress}
                  onLessonCompletion={handleLessonCompletion}
                />
              )
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