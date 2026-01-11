import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full border border-border">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-center mb-2">
          School of English by Hati K.
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Грамматика и словарь для начинающих
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="studentName" className="block mb-2">
              Ваше имя / Your name
            </label>
            <input
              id="studentName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя..."
              className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Learning
          </button>
        </form>
      </div>
    </div>
  );
}