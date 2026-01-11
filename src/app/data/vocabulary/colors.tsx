import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const colorsTopic: VocabularyTopic = {
  id: 'colors',
  title: 'Colors',
  titleRu: 'Цвета',
  description: 'Basic colors and shades',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Basic Colors / Основные цвета</h3>
        <p className="text-sm text-muted-foreground mb-3">Click on any card to hear the pronunciation</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            ['red', 'Красный', '#ef4444'],
            ['blue', 'Синий', '#3b82f6'],
            ['yellow', 'Жёлтый', '#eab308'],
            ['green', 'Зелёный', '#22c55e'],
            ['orange', 'Оранжевый', '#f97316'],
            ['purple', 'Фиолетовый', '#a855f7'],
            ['pink', 'Розовый', '#ec4899'],
            ['brown', 'Коричневый', '#a16207'],
            ['black', 'Чёрный', '#000000'],
            ['white', 'Белый', '#ffffff'],
            ['gray', 'Серый', '#6b7280']
          ].map(([color, ru, hex], i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div 
                className="w-full h-12 border-b border-border"
                style={{ backgroundColor: hex }}
              />
              <VocabCard word={color} translation={ru} bgColor="bg-card" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'The sky is ___.',
      questionRu: 'Небо синее.',
      options: ['red', 'blue', 'green', 'yellow'],
      correctAnswer: 1,
      explanation: 'Blue.'
    },
    {
      question: 'Grass is usually ___.',
      questionRu: 'Трава обычно зелёная.',
      options: ['blue', 'red', 'green', 'purple'],
      correctAnswer: 2,
      explanation: 'Green.'
    },
    {
      question: 'What color is snow?',
      questionRu: 'Какого цвета снег?',
      options: ['black', 'white', 'gray', 'blue'],
      correctAnswer: 1,
      explanation: 'White.'
    },
    {
      question: 'An orange is ___.',
      questionRu: 'Апельсин оранжевый.',
      options: ['orange', 'yellow', 'red', 'green'],
      correctAnswer: 0,
      explanation: 'Orange.'
    },
    {
      question: 'The sun is ___.',
      questionRu: 'Солнце жёлтое.',
      options: ['blue', 'red', 'yellow', 'green'],
      correctAnswer: 2,
      explanation: 'Yellow.'
    },
    {
      question: 'Blood is ___.',
      questionRu: 'Кровь красная.',
      options: ['blue', 'green', 'red', 'black'],
      correctAnswer: 2,
      explanation: 'Red.'
    },
    {
      question: 'Chocolate is ___.',
      questionRu: 'Шоколад коричневый.',
      options: ['brown', 'white', 'pink', 'yellow'],
      correctAnswer: 0,
      explanation: 'Brown.'
    },
    {
      question: 'The night sky is ___.',
      questionRu: 'Ночное небо чёрное.',
      options: ['white', 'black', 'yellow', 'green'],
      correctAnswer: 1,
      explanation: 'Black.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'Elephants are ___.',
      questionRu: 'Слоны серые.',
      options: ['pink', 'gray', 'purple', 'orange'],
      correctAnswer: 1,
      explanation: 'Gray.'
    },
    {
      question: 'Grapes can be ___.',
      questionRu: 'Виноград может быть фиолетовым.',
      options: ['purple', 'white', 'orange', 'gray'],
      correctAnswer: 0,
      explanation: 'Purple.'
    }
  ]
};
