import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const countriesTopic: VocabularyTopic = {
  id: 'countries',
  title: 'Countries & Nationalities',
  titleRu: 'Страны и национальности',
  description: 'Where are you from?',
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          ['Russia - Russian', 'Россия - Русский'],
          ['USA - American', 'США - Американец'],
          ['UK - British', 'Великобритания - Британец'],
          ['France - French', 'Франция - Француз'],
          ['Italy - Italian', 'Италия - Итальянец'],
          ['Spain - Spanish', 'Испания - Испанец'],
          ['Germany - German', 'Германия - Немец'],
          ['China - Chinese', 'Китай - Китаец'],
          ['Japan - Japanese', 'Япония - Яконец']
        ].map(([eng, ru], i) => (
          <VocabCard key={i} word={eng} translation={ru} />
        ))}
      </div>
    </div>
  ),
  questions: [
    {
      question: 'He is from the USA. He is ___.',
      questionRu: 'Он из США. Он ___.',
      options: ['USAish', 'American', 'English', 'United'],
      correctAnswer: 1,
      explanation: 'American.'
    },
    {
      question: 'She lives in Paris. She is ___.',
      questionRu: 'Она живёт в Париже. Она ___.',
      options: ['France', 'French', 'Francish', 'Francean'],
      correctAnswer: 1,
      explanation: 'French.'
    },
    {
      question: 'Sushi is from ___.',
      questionRu: 'Суши из ___.',
      options: ['China', 'Japan', 'Italy', 'Spain'],
      correctAnswer: 1,
      explanation: 'Japan.'
    },
    {
      question: 'Berlin is in ___.',
      questionRu: 'Берлин находится в ___.',
      options: ['Germany', 'German', 'France', 'Russia'],
      correctAnswer: 0,
      explanation: 'Germany (Country).'
    },
    {
      question: 'They speak ___ in Spain.',
      questionRu: 'Они говорят по-___ в Испании.',
      options: ['Spain', 'Spanish', 'Spainish', 'Spanian'],
      correctAnswer: 1,
      explanation: 'Spanish (Language/Nationality).'
    },
    {
      question: 'Moscow is the capital of ___.',
      questionRu: 'Москва - столица ___.',
      options: ['Russian', 'Russia', 'Rus', 'Russland'],
      correctAnswer: 1,
      explanation: 'Russia.'
    },
    {
      question: 'Pizza is ___ food.',
      questionRu: 'Пицца - это ___ еда.',
      options: ['Italy', 'Italian', 'Italish', 'Italic'],
      correctAnswer: 1,
      explanation: 'Italian.'
    },
    {
      question: 'London is in the ___.',
      questionRu: 'Лондон находится в ___.',
      options: ['USA', 'UK', 'UAE', 'UN'],
      correctAnswer: 1,
      explanation: 'UK (United Kingdom).'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'Someone from China is ___.',
      questionRu: 'Кто-то из Китая - ___.',
      options: ['Chine', 'Chinish', 'Chinese', 'Chinan'],
      correctAnswer: 2,
      explanation: 'Chinese.'
    },
    {
      question: 'Rome is in ___.',
      questionRu: 'Рим находится в ___.',
      options: ['France', 'Italy', 'Spain', 'Greece'],
      correctAnswer: 1,
      explanation: 'Italy.'
    }
  ]
};
