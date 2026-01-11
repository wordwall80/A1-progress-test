import { Volume2 } from 'lucide-react';

interface VocabCardProps {
  word: string;
  translation: string;
  bgColor?: string;
  textColor?: string;
}

export function VocabCard({ word, translation, bgColor = 'bg-muted', textColor = 'text-foreground' }: VocabCardProps) {
  const speak = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8; // Slightly slower for learning
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button
      onClick={speak}
      className={`${bgColor} p-3 rounded-lg hover:shadow-lg transition-all group cursor-pointer border-2 border-transparent hover:border-primary`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 text-left">
          <p className={`font-medium ${textColor}`}>{word}</p>
          <p className="text-sm text-muted-foreground">{translation}</p>
        </div>
        <Volume2 className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
      </div>
    </button>
  );
}
