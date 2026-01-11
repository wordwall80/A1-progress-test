import { ArrowLeft, BookOpen, ClipboardList } from 'lucide-react';
import { useState } from 'react';
import { Quiz, QuizQuestion } from './quiz';

interface TopicDetailProps {
  title: string;
  titleRu: string;
  content: React.ReactNode;
  questions: QuizQuestion[];
  onBack: () => void;
}

export function TopicDetail({ title, titleRu, content, questions, onBack }: TopicDetailProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Topics
      </button>

      <div className="bg-card rounded-xl border border-border p-6 md:p-8 mb-6">
        <h1 className="mb-2">{title}</h1>
        <p className="text-muted-foreground mb-6">{titleRu}</p>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setShowQuiz(false)}
            className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${
              !showQuiz
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Learn
          </button>
          <button
            onClick={() => setShowQuiz(true)}
            className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${
              showQuiz
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            Quiz
            {quizScore !== null && (
              <span className="bg-white/20 px-2 py-0.5 rounded text-sm">
                {Math.round((quizScore / questions.length) * 100)}%
              </span>
            )}
          </button>
        </div>

        {!showQuiz ? (
          <div className="prose prose-slate max-w-none">
            {content}
          </div>
        ) : (
          <Quiz questions={questions} onComplete={handleQuizComplete} />
        )}
      </div>
    </div>
  );
}
