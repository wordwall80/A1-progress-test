import { QuizQuestion } from '../components/quiz';
import React from 'react';

export interface Topic {
  id: string;
  title: string;
  titleRu: string;
  description: string;
  content: React.ReactNode;
  questions: QuizQuestion[];
  finalQuizQuestions: QuizQuestion[];
}

// Aliases for clarity, though they share the same structure now
export type GrammarTopic = Topic;
export type VocabularyTopic = Topic;
