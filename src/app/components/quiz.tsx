import { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

export interface QuizQuestion {
  question: string;
  questionRu: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  const handleAnswer = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(answerIndex);
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
      onComplete(score + (selectedAnswer === question.correctAnswer ? 1 : 0));
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="text-center py-8">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
          percentage >= 70 ? 'bg-green-100' : 'bg-yellow-100'
        }`}>
          {percentage >= 70 ? (
            <CheckCircle className="w-10 h-10 text-green-600" />
          ) : (
            <XCircle className="w-10 h-10 text-yellow-600" />
          )}
        </div>

        <h2 className="mb-2">Quiz Complete!</h2>
        <p className="text-xl mb-2">
          Your Score: {score} / {questions.length}
        </p>
        <p className="text-muted-foreground mb-8">
          {percentage}% {percentage >= 70 ? 'Great job!' : 'Keep practicing!'}
        </p>

        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-muted-foreground">
            Score: {score}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-2">{question.question}</h3>
        <p className="text-sm text-muted-foreground">{question.questionRu}</p>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isAnswered = answeredQuestions[currentQuestion];
          const isCorrectOption = index === question.correctAnswer;

          let className = 'w-full p-4 rounded-lg border-2 text-left transition-all ';
          
          if (!isAnswered) {
            className += 'border-border hover:border-primary cursor-pointer';
          } else if (isSelected && isCorrect) {
            className += 'border-green-500 bg-green-50';
          } else if (isSelected && !isCorrect) {
            className += 'border-red-500 bg-red-50';
          } else if (isCorrectOption) {
            className += 'border-green-500 bg-green-50';
          } else {
            className += 'border-border opacity-50';
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
              className={className}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  isAnswered && isCorrectOption ? 'border-green-500 bg-green-500' :
                  isAnswered && isSelected && !isCorrect ? 'border-red-500 bg-red-500' :
                  'border-muted-foreground'
                }`}>
                  {isAnswered && isCorrectOption && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <span>{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {answeredQuestions[currentQuestion] && question.explanation && (
        <div className="bg-accent p-4 rounded-lg mb-6">
          <p className="text-sm text-accent-foreground">
            <strong>Explanation:</strong> {question.explanation}
          </p>
        </div>
      )}

      {answeredQuestions[currentQuestion] && (
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  );
}
