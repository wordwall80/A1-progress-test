import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const simpleAdjectivesTopic: VocabularyTopic = {
  id: 'simple-adjectives',
  title: 'Simple Adjectives',
  titleRu: 'Простые прилагательные',
  description: 'Big, small, good, bad...',
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          ['big', 'большой'],
          ['small', 'маленький'],
          ['good', 'хороший'],
          ['bad', 'плохой'],
          ['hot', 'горячий / жаркий'],
          ['cold', 'холодный'],
          ['new', 'новый'],
          ['old', 'старый'],
          ['fast', 'быстрый'],
          ['slow', 'медленный'],
          ['expensive', 'дорогой'],
          ['cheap', 'дешёвый'],
          ['beautiful', 'красивый'],
          ['easy', 'лёгкий (простой)'],
          ['difficult / hard', 'трудный (сложный)']
        ].map(([eng, ru], i) => (
          <VocabCard key={i} word={eng} translation={ru} />
        ))}
      </div>
    </div>
  ),
  questions: [
    {
      question: 'The elephant is ___.',
      questionRu: 'Слон большой.',
      options: ['small', 'big', 'light', 'cheap'],
      correctAnswer: 1,
      explanation: 'Big.'
    },
    {
      question: 'Fire is ___.',
      questionRu: 'Огонь горячий.',
      options: ['cold', 'hot', 'old', 'new'],
      correctAnswer: 1,
      explanation: 'Hot.'
    },
    {
      question: 'A Ferrari is ___.',
      questionRu: 'Феррари дорогая.',
      options: ['cheap', 'slow', 'expensive', 'bad'],
      correctAnswer: 2,
      explanation: 'Expensive.'
    },
    {
      question: 'The opposite of "good" is ___.',
      questionRu: 'Противоположность "good" - это ___.',
      options: ['nice', 'bad', 'happy', 'fine'],
      correctAnswer: 1,
      explanation: 'Bad.'
    },
    {
      question: 'Ice cream is usually ___.',
      questionRu: 'Мороженое обычно холодное.',
      options: ['hot', 'cold', 'fast', 'difficult'],
      correctAnswer: 1,
      explanation: 'Cold.'
    },
    {
      question: 'English is not difficult, it is ___.',
      questionRu: 'Английский не сложный, он лёгкий.',
      options: ['hard', 'easy', 'heavy', 'expensive'],
      correctAnswer: 1,
      explanation: 'Easy.'
    },
    {
      question: 'The turtle is ___.',
      questionRu: 'Черепаха медленная.',
      options: ['fast', 'quick', 'slow', 'rapid'],
      correctAnswer: 2,
      explanation: 'Slow.'
    },
    {
      question: 'This phone is not new, it is ___.',
      questionRu: 'Этот телефон не новый, он старый.',
      options: ['old', 'young', 'fresh', 'modern'],
      correctAnswer: 0,
      explanation: 'Old.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'She is a ___ girl.',
      questionRu: 'Она красивая девушка.',
      options: ['handsome', 'beautiful', 'ugly', 'bad'],
      correctAnswer: 1,
      explanation: 'Beautiful.'
    },
    {
      question: 'This car costs $100. It is ___.',
      questionRu: 'Эта машина стоит 100 долларов. Она дешёвая.',
      options: ['expensive', 'rich', 'cheap', 'poor'],
      correctAnswer: 2,
      explanation: 'Cheap.'
    }
  ]
};
