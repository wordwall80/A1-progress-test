import { GrammarTopic } from '../types';
import React from 'react';

export const articlesTopic: GrammarTopic = {
  id: 'articles',
  title: 'Articles: A, An, The',
  titleRu: 'Артикли: A, An, The',
  description: 'Indefinite and definite articles',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Indefinite Articles / Неопределённые артикли</h3>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>A</strong> - before consonant sounds (перед согласными звуками)</p>
          <ul className="list-disc list-inside ml-4">
            <li>a book</li>
            <li>a cat</li>
            <li>a university (sounds like "you")</li>
          </ul>
          <p className="mt-3"><strong>An</strong> - before vowel sounds (перед гласными звуками)</p>
          <ul className="list-disc list-inside ml-4">
            <li>an apple</li>
            <li>an egg</li>
            <li>an hour (h is silent)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Definite Article / Определённый артикль</h3>
        <div className="bg-muted p-4 rounded-lg">
          <p><strong>The</strong> - for specific things (для конкретных предметов)</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>the sun (unique)</li>
            <li>the book on the table (specific)</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I have ___ cat.',
      questionRu: 'У меня есть кошка.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 0,
      explanation: 'Use "a" before consonant sounds.'
    },
    {
      question: 'She is ___ artist.',
      questionRu: 'Она художник.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 1,
      explanation: 'Use "an" before vowel sounds.'
    },
    {
      question: '___ sun is bright today.',
      questionRu: 'Солнце яркое сегодня.',
      options: ['A', 'An', 'The', '-'],
      correctAnswer: 2,
      explanation: 'Use "the" for unique things.'
    },
    {
      question: 'This is ___ apple.',
      questionRu: 'Это яблоко.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 1,
      explanation: 'Use "an" before "apple".'
    },
    {
      question: 'I need ___ umbrella.',
      questionRu: 'Мне нужен зонт.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 1,
      explanation: 'Use "an" before "umbrella".'
    },
    {
      question: 'I have ___ car.',
      questionRu: 'У меня есть машина.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 0,
      explanation: 'General singular noun.'
    },
    {
      question: 'She is ___ teacher.',
      questionRu: 'Она учитель.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 0,
      explanation: 'Profession.'
    },
    {
      question: '___ moon is beautiful.',
      questionRu: 'Луна красива.',
      options: ['A', 'An', 'The', '-'],
      correctAnswer: 2,
      explanation: 'Unique object.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'This is ___ orange.',
      questionRu: 'Это апельсин.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 1,
      explanation: 'Vowel sound "o".'
    },
    {
      question: 'Open ___ door, please.',
      questionRu: 'Открой дверь, пожалуйста.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 2,
      explanation: 'Specific door in the room.'
    }
  ]
};
