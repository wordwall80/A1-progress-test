import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const inTheBagTopic: VocabularyTopic = {
  id: 'in-the-bag',
  title: 'Things in the Bag',
  titleRu: 'Вещи в сумке',
  description: 'Common items and bag types',
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          ['bag', 'сумка'],
          ['handbag', 'дамская сумочка'],
          ['backpack', 'рюкзак'],
          ['suitcase', 'чемодан'],
          ['tote bag', 'сумка-шоппер'],
          ['carry', 'носить'],
          ['glasses', 'очки'],
          ['sunglasses', 'солнечные очки'],
          ['journal / diary', 'дневник / ежедневник'],
          ['perfume', 'духи'],
          ['wallet', 'кошелёк'],
          ['keys', 'ключи']
        ].map(([eng, ru], i) => (
          <VocabCard key={i} word={eng} translation={ru} />
        ))}
      </div>
    </div>
  ),
  questions: [
    {
      question: 'You put clothes in this when you travel.',
      questionRu: 'Вы кладёте в это одежду, когда путешествуете.',
      options: ['wallet', 'suitcase', 'glasses', 'diary'],
      correctAnswer: 1,
      explanation: 'Suitcase.'
    },
    {
      question: 'Students usually wear a ___.',
      questionRu: 'Студенты обычно носят ___.',
      options: ['suitcase', 'handbag', 'backpack', 'box'],
      correctAnswer: 2,
      explanation: 'Backpack.'
    },
    {
      question: 'You write your thoughts in a ___.',
      questionRu: 'Вы записываете свои мысли в ___.',
      options: ['book', 'journal', 'wallet', 'glasses'],
      correctAnswer: 1,
      explanation: 'Journal / Diary.'
    },
    {
      question: 'You wear these when it is sunny.',
      questionRu: 'Вы носите их, когда солнечно.',
      options: ['glasses', 'sunglasses', 'keys', 'bags'],
      correctAnswer: 1,
      explanation: 'Sunglasses.'
    },
    {
      question: 'You keep your money in a ___.',
      questionRu: 'Вы держите деньги в ___.',
      options: ['wallet', 'diary', 'perfume', 'glasses'],
      correctAnswer: 0,
      explanation: 'Wallet.'
    },
    {
      question: 'To open the door, you need ___.',
      questionRu: 'Чтобы открыть дверь, нужны ___.',
      options: ['keys', 'glasses', 'bags', 'books'],
      correctAnswer: 0,
      explanation: 'Keys.'
    },
    {
      question: 'It smells nice.',
      questionRu: 'Это приятно пахнет.',
      options: ['perfume', 'keys', 'glasses', 'laptop'],
      correctAnswer: 0,
      explanation: 'Perfume.'
    },
    {
      question: 'She ___ a heavy bag.',
      questionRu: 'Она несёт тяжёлую сумку.',
      options: ['wears', 'carries', 'does', 'goes'],
      correctAnswer: 1,
      explanation: 'Carries (to carry).'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'A large bag for shopping is a ___.',
      questionRu: 'Большая сумка для покупок - это ___.',
      options: ['handbag', 'tote bag', 'suitcase', 'purse'],
      correctAnswer: 1,
      explanation: 'Tote bag.'
    },
    {
      question: 'I need my ___ to read.',
      questionRu: 'Мне нужны ___, чтобы читать.',
      options: ['sunglasses', 'glasses', 'keys', 'perfume'],
      correctAnswer: 1,
      explanation: 'Glasses.'
    }
  ]
};
