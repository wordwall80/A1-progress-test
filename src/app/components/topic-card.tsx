import { ChevronRight } from 'lucide-react';

interface TopicCardProps {
  title: string;
  titleRu: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export function TopicCard({ title, titleRu, description, icon, onClick }: TopicCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all hover:shadow-lg text-left w-full group"
    >
      <div className="flex items-start gap-4">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-lg flex-shrink-0">
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{titleRu}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
      </div>
    </button>
  );
}
