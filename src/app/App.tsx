import { useState } from 'react';
import { WelcomeScreen } from './components/welcome-screen';
import { TopicCard } from './components/topic-card';
import { TopicDetail } from './components/topic-detail';
import { FinalQuiz } from './components/final-quiz';
import { grammarTopics } from './data/grammar-topics';
import { vocabularyTopics } from './data/vocabulary-topics';
import { BookOpen, Languages, User, Trophy } from 'lucide-react';

type ViewMode = 'welcome' | 'menu' | 'topic' | 'final-quiz';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('welcome');
  const [studentName, setStudentName] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<{
    type: 'grammar' | 'vocabulary';
    id: string;
  } | null>(null);

  const handleStart = (name: string) => {
    setStudentName(name);
    setViewMode('menu');
  };

  const handleTopicSelect = (type: 'grammar' | 'vocabulary', id: string) => {
    setSelectedTopic({ type, id });
    setViewMode('topic');
  };

  const handleBack = () => {
    setSelectedTopic(null);
    setViewMode('menu');
  };

  const handleFinalQuiz = () => {
    setViewMode('final-quiz');
  };

  const handleBackFromFinalQuiz = () => {
    setViewMode('menu');
  };

  if (viewMode === 'welcome') {
    return <WelcomeScreen onStart={handleStart} />;
  }

  const currentTopic = selectedTopic
    ? selectedTopic.type === 'grammar'
      ? grammarTopics.find((t) => t.id === selectedTopic.id)
      : vocabularyTopics.find((t) => t.id === selectedTopic.id)
    : null;

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            English Progress Test A1 level
          </h1>
        </div>
        <div className="bg-card shadow-sm border border-border px-4 py-2 rounded-lg text-sm md:text-base">
          <p className="font-medium text-foreground">
            <span className="text-muted-foreground">Instructor:</span> Hati K.
          </p>
          <p className="font-medium text-foreground">
            <span className="text-muted-foreground">Student:</span> {studentName}
          </p>
        </div>
      </div>

      {viewMode === 'menu' && (
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Start Learning</h2>
            </div>
            <p className="opacity-90">
              Select a topic below to study and take the quiz. Complete all topics to unlock the Final Quiz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Grammar Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2>Grammar Topics</h2>
                  <p className="text-sm text-muted-foreground">Грамматика</p>
                </div>
              </div>

              <div className="space-y-4">
                {grammarTopics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    title={topic.title}
                    titleRu={topic.titleRu}
                    description={topic.description}
                    icon={<BookOpen className="w-6 h-6 text-primary" />}
                    onClick={() => handleTopicSelect('grammar', topic.id)}
                  />
                ))}
              </div>
            </div>

            {/* Vocabulary Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Languages className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h2>Vocabulary Topics</h2>
                  <p className="text-sm text-muted-foreground">Словарь</p>
                </div>
              </div>

              <div className="space-y-4">
                {vocabularyTopics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    title={topic.title}
                    titleRu={topic.titleRu}
                    description={topic.description}
                    icon={<Languages className="w-6 h-6 text-secondary" />}
                    onClick={() => handleTopicSelect('vocabulary', topic.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Final Quiz Button */}
          <div className="mt-8">
            <button
              onClick={handleFinalQuiz}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
            >
              <Trophy className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Take the Final Quiz</div>
                <div className="text-sm opacity-90">Test all your knowledge - Grammar & Vocabulary</div>
              </div>
            </button>
          </div>
        </div>
      )}

      {viewMode === 'final-quiz' && (
        <FinalQuiz onBack={handleBackFromFinalQuiz} studentName={studentName} />
      )}

      {viewMode === 'topic' && currentTopic && (
        <TopicDetail
          title={currentTopic.title}
          titleRu={currentTopic.titleRu}
          content={currentTopic.content}
          questions={currentTopic.questions}
          onBack={handleBack}
        />
      )}
    </div>
  );
}