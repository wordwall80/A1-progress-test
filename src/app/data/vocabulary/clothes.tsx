import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const clothesTopic: VocabularyTopic = {
  id: 'clothes',
  title: 'Clothes',
  titleRu: 'Одежда',
  description: 'Basic clothing items',
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          ['T-shirt', 'Футболка'],
          ['shirt', 'Рубашка'],
          ['jeans', 'Джинсы'],
          ['pants / trousers', 'Брюки'],
          ['dress', 'Платье'],
          ['skirt', 'Юбка'],
          ['shoes', 'Обувь / Туфли'],
          ['sneakers / trainers', 'Кроссовки'],
          ['socks', 'Носки'],
          ['jacket', 'Куртка / Пиджак'],
          ['coat', 'Пальто'],
          ['hat', 'Шапка / Шляпа'],
          ['scarf', 'Шарф']
        ].map(([eng, ru], i) => (
          <VocabCard key={i} word={eng} translation={ru} />
        ))}
      </div>
    </div>
  ),
  questions: [
    {
      question: 'You wear these on your feet inside shoes.',
      questionRu: 'Вы носите их на ногах внутри обуви.',
      options: ['gloves', 'socks', 'pants', 'hats'],
      correctAnswer: 1,
      explanation: 'Socks.'
    },
    {
      question: 'Women often wear this in summer.',
      questionRu: 'Женщины часто носят это летом.',
      options: ['coat', 'dress', 'scarf', 'jacket'],
      correctAnswer: 1,
      explanation: 'Dress.'
    },
    {
      question: 'You wear this on your head.',
      questionRu: 'Вы носите это на голове.',
      options: ['hat', 'shoe', 'skirt', 'shirt'],
      correctAnswer: 0,
      explanation: 'Hat.'
    },
    {
      question: 'Formal wear for men usually includes a ___.',
      questionRu: 'Формальная одежда для мужчин обычно включает ___.',
      options: ['t-shirt', 'shirt', 'dress', 'skirt'],
      correctAnswer: 1,
      explanation: 'Shirt.'
    },
    {
      question: 'Denim pants are called ___.',
      questionRu: 'Джинсовые брюки называются ___.',
      options: ['shorts', 'jeans', 'skirts', 'socks'],
      correctAnswer: 1,
      explanation: 'Jeans.'
    },
    {
      question: 'You wear this when it is cold.',
      questionRu: 'Вы носите это, когда холодно.',
      options: ['t-shirt', 'coat', 'shorts', 'sandals'],
      correctAnswer: 1,
      explanation: 'Coat.'
    },
    {
      question: 'Sport shoes are called ___.',
      questionRu: 'Спортивная обувь называется ___.',
      options: ['boots', 'sneakers', 'sandals', 'heels'],
      correctAnswer: 1,
      explanation: 'Sneakers (US) or Trainers (UK).'
    },
    {
      question: 'This goes around your neck.',
      questionRu: 'Это носится вокруг шеи.',
      options: ['belt', 'scarf', 'hat', 'sock'],
      correctAnswer: 1,
      explanation: 'Scarf.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'Shorts are for ___ weather.',
      questionRu: 'Шорты для ___ погоды.',
      options: ['cold', 'hot', 'rainy', 'snowy'],
      correctAnswer: 1,
      explanation: 'Hot weather.'
    },
    {
      question: 'A skirt is worn on the ___ body.',
      questionRu: 'Юбка носится на ___ части тела.',
      options: ['upper', 'lower', 'head', 'feet'],
      correctAnswer: 1,
      explanation: 'Lower body.'
    }
  ]
};
