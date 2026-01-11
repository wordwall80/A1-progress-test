import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const familyTopic: VocabularyTopic = {
  id: 'family',
  title: 'Family Members',
  titleRu: 'Члены семьи',
  description: 'Parents, siblings, and relatives',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Immediate Family / Ближайшие родственники</h3>
        <p className="text-sm text-muted-foreground mb-3">Click on any card to hear the pronunciation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ['mother', 'Мать / Мама'],
            ['father', 'Отец / Папа'],
            ['parents', 'Родители'],
            ['sister', 'Сестра'],
            ['brother', 'Брат'],
            ['daughter', 'Дочь'],
            ['son', 'Сын'],
            ['wife', 'Жена'],
            ['husband', 'Муж'],
            ['children', 'Дети']
          ].map(([eng, ru], i) => (
            <VocabCard key={i} word={eng} translation={ru} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3">Extended Family / Дальние родственники</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ['grandmother', 'Бабушка'],
            ['grandfather', 'Дедушка'],
            ['grandparents', 'Бабушка и дедушка'],
            ['aunt', 'Тётя'],
            ['uncle', 'Дядя'],
            ['cousin', 'Двоюродный брат/сестра'],
            ['nephew', 'Племянник'],
            ['niece', 'Племянница']
          ].map(([eng, ru], i) => (
            <VocabCard key={i} word={eng} translation={ru} />
          ))}
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'My mother\'s mother is my ___.',
      questionRu: 'Мать моей матери - это моя ___.',
      options: ['aunt', 'sister', 'grandmother', 'cousin'],
      correctAnswer: 2,
      explanation: 'Grandmother.'
    },
    {
      question: 'My father\'s brother is my ___.',
      questionRu: 'Брат моего отца - это мой ___.',
      options: ['uncle', 'cousin', 'nephew', 'grandfather'],
      correctAnswer: 0,
      explanation: 'Uncle.'
    },
    {
      question: 'My ___ and ___ are my parents.',
      questionRu: 'Мои ___ и ___ - это мои родители.',
      options: ['brother, sister', 'mother, father', 'aunt, uncle', 'son, daughter'],
      correctAnswer: 1,
      explanation: 'Mother and father.'
    },
    {
      question: 'My sister\'s son is my ___.',
      questionRu: 'Сын моей сестры - это мой ___.',
      options: ['nephew', 'niece', 'cousin', 'brother'],
      correctAnswer: 0,
      explanation: 'Nephew.'
    },
    {
      question: 'I am married. My husband\'s mother is my ___.',
      questionRu: 'Я замужем. Мать моего мужа - это моя ___.',
      options: ['mother', 'aunt', 'mother-in-law', 'grandmother'],
      correctAnswer: 2,
      explanation: 'Mother-in-law.'
    },
    {
      question: 'My brother\'s daughter is my ___.',
      questionRu: 'Дочь моего брата - это моя ___.',
      options: ['nephew', 'niece', 'cousin', 'sister'],
      correctAnswer: 1,
      explanation: 'Niece.'
    },
    {
      question: 'My aunt\'s child is my ___.',
      questionRu: 'Ребёнок моей тёти - это мой ___.',
      options: ['brother', 'sister', 'cousin', 'nephew'],
      correctAnswer: 2,
      explanation: 'Cousin.'
    },
    {
      question: 'My father\'s father is my ___.',
      questionRu: 'Отец моего отца - это мой ___.',
      options: ['uncle', 'grandfather', 'brother', 'son'],
      correctAnswer: 1,
      explanation: 'Grandfather.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'I am a man. She is my ___.',
      questionRu: 'Я мужчина. Она моя жена.',
      options: ['husband', 'wife', 'brother', 'father'],
      correctAnswer: 1,
      explanation: 'Wife.'
    },
    {
      question: 'Son and daughter are ___.',
      questionRu: 'Сын и дочь - это дети.',
      options: ['parents', 'children', 'grandparents', 'cousins'],
      correctAnswer: 1,
      explanation: 'Children.'
    }
  ]
};
