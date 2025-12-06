
import React, { useState, useEffect, useCallback } from 'react';
import { Quiz } from '../types';
import Button from './Button';
import MarkdownRenderer from './MarkdownRenderer';
import Loader from './Loader';

interface QuizComponentProps {
  quiz: Quiz;
  onQuizComplete: (scorePercentage: number) => void;
  isLessonCompleted: boolean; // Prop to know if the lesson associated with this quiz is already completed
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quiz, onQuizComplete, isLessonCompleted }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [feedback, setFeedback] = useState<boolean | null>(null); // true for correct, false for incorrect
  const [showResult, setShowResult] = useState(false);
  const [isProcessingAnswer, setIsProcessingAnswer] = useState(false); // To prevent multiple submissions/clicks during feedback

  // Reset quiz state if lesson/quiz changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setScore(0);
    setQuizStarted(false);
    setFeedback(null);
    setShowResult(false);
    setIsProcessingAnswer(false);
  }, [quiz.id]);

  const startQuiz = useCallback(() => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOptionIndex(null);
    setFeedback(null);
    setShowResult(false);
    setIsProcessingAnswer(false);
  }, []);

  const handleOptionSelect = useCallback((index: number) => {
    if (isProcessingAnswer) return;
    setSelectedOptionIndex(index);
    setFeedback(null); // Clear feedback when new option is selected
  }, [isProcessingAnswer]);

  const handleSubmitAnswer = useCallback(() => {
    if (selectedOptionIndex === null || isProcessingAnswer) return;

    setIsProcessingAnswer(true); // Disable further input
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isCorrect = selectedOptionIndex === currentQuestion.correctAnswerIndex;
    setFeedback(isCorrect);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Move to next question after a short delay to show feedback
    setTimeout(() => {
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedOptionIndex(null);
        setFeedback(null);
        setIsProcessingAnswer(false);
      } else {
        // Quiz finished
        const finalScorePercentage = (score + (isCorrect ? 1 : 0)) / quiz.questions.length * 100; // Include current question's score
        onQuizComplete(finalScorePercentage); // Notify parent component
        setShowResult(true);
        setIsProcessingAnswer(false);
      }
    }, 1500); // Show feedback for 1.5 seconds
  }, [selectedOptionIndex, isProcessingAnswer, quiz.questions, currentQuestionIndex, score, onQuizComplete]);

  const calculateFinalScorePercentage = useCallback(() => {
    // This function will only be called when `showResult` is true, after score has been finalized.
    // So `score` here already includes the last question.
    return (score / quiz.questions.length) * 100;
  }, [score, quiz.questions.length]);

  if (!quizStarted) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-teal-50 border border-teal-200 rounded-lg shadow-md my-6">
        <h3 className="text-xl font-bold text-teal-800 mb-4">{quiz.label || 'Kiểm tra kiến thức'}</h3>
        <p className="text-gray-700 mb-6 text-center">
          Hoàn thành bài kiểm tra này để củng cố kiến thức và mở khóa bài học tiếp theo!
        </p>
        {isLessonCompleted && (
          <p className="text-green-600 text-sm italic mb-4">
            <i className="fas fa-check-circle mr-2"></i>Bạn đã hoàn thành bài học này!
          </p>
        )}
        <Button onClick={startQuiz} variant="primary" size="lg">
          <i className="fas fa-play mr-2"></i>Bắt đầu kiểm tra
        </Button>
      </div>
    );
  }

  if (showResult) {
    const finalScore = calculateFinalScorePercentage();
    const passed = finalScore >= 80; // Define pass threshold
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md my-6">
        <h3 className="text-2xl font-bold text-teal-800 mb-4">Kết quả kiểm tra</h3>
        <p className="text-xl text-gray-700 mb-2">
          Bạn đạt được {score} trên {quiz.questions.length} câu đúng.
        </p>
        <p className={`text-3xl font-extrabold ${passed ? 'text-green-600' : 'text-red-600'} mb-6`}>
          {finalScore.toFixed(0)}%
        </p>
        {passed ? (
          <p className="text-green-700 text-center mb-6">
            <i className="fas fa-medal mr-2"></i>Chúc mừng! Bạn đã hoàn thành bài kiểm tra và mở khóa nội dung tiếp theo.
          </p>
        ) : (
          <p className="text-red-700 text-center mb-6">
            <i className="fas fa-times-circle mr-2"></i>Bạn chưa đạt yêu cầu. Hãy xem lại bài học và thử lại nhé!
          </p>
        )}
        <Button onClick={startQuiz} variant="secondary">
          <i className="fas fa-redo mr-2"></i>Làm lại
        </Button>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="my-6 p-6 bg-white border-l-4 border-teal-600 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-teal-800 mb-4">
        {quiz.label || 'Kiểm tra kiến thức'} - Câu {currentQuestionIndex + 1} / {quiz.questions.length}
      </h3>
      <div className="mb-6 text-lg font-medium text-gray-800">
        <MarkdownRenderer content={currentQuestion.questionText} />
      </div>

      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={`block w-full text-left p-3 rounded-lg border-2 transition-all duration-200
              ${selectedOptionIndex === index
                ? 'bg-teal-100 border-teal-500 shadow-md'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}
              ${feedback !== null && selectedOptionIndex === index
                ? (feedback ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500')
                : ''
              }
            `}
            disabled={isProcessingAnswer} // Disable options during feedback
          >
            <MarkdownRenderer content={option} className="text-base text-gray-800" />
          </button>
        ))}
      </div>

      {isProcessingAnswer && (
        <div className="flex justify-center my-4">
            <Loader size="md" message="Đang xử lý..." />
        </div>
      )}

      {feedback !== null && !isProcessingAnswer && (
        <div className={`mt-4 p-3 rounded-lg text-white font-semibold ${feedback ? 'bg-green-500' : 'bg-red-500'}`}>
          {feedback ? 'Chính xác!' : 'Chưa đúng.'}
        </div>
      )}

      <div className="mt-6">
        <Button
          onClick={handleSubmitAnswer}
          disabled={selectedOptionIndex === null || isProcessingAnswer}
          fullWidth
        >
          {currentQuestionIndex < quiz.questions.length - 1 ? 'Tiếp tục' : 'Hoàn thành'}
        </Button>
      </div>
    </div>
  );
};

export default QuizComponent;