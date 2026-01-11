import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const dailyVerbsTopic: VocabularyTopic = {
  id: 'daily-verbs',
  title: 'Daily Life Verbs',
  titleRu: 'Глаголы повседневной жизни',
  description: 'Common actions and phrases',
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          ['drink water', 'пить воду'],
          ['eat vegetables', 'есть овощи'],
          ['cook dinner', 'готовить ужин'],
          ['work in an office', 'работать в офисе'],
          ['study history', 'изучать историю'],
          ['do homework', 'делать домашнее задание'],
          ['speak English', 'говорить по-английски'],
          ['read a book', 'читать книгу'],
          ['watch TV', 'смотреть телевизор'],
          ['listen to music', 'слушать музыку'],
          ['play tennis', 'играть в теннис'],
          ['drive a car', 'водить машину'],
          ['live in an apartment', 'жить в квартире'],
          ['wear glasses', 'носить очки'],
          ['do housework', 'делать работу по дому'],
          ['take an umbrella', 'брать зонт'],
          ['say sorry', 'извиняться'],
          ['go to the movies', 'ходить в кино']
        ].map(([eng, ru], i) => (
          <VocabCard key={i} word={eng} translation={ru} />
        ))}
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I ___ dinner every evening.',
      questionRu: 'Я готовлю ужин каждый вечер.',
      options: ['cook', 'drink', 'wear', 'drive'],
      correctAnswer: 0,
      explanation: 'Cook dinner.'
    },
    {
      question: 'She ___ English very well.',
      questionRu: 'Она говорит по-английски очень хорошо.',
      options: ['says', 'speaks', 'tells', 'talks'],
      correctAnswer: 1,
      explanation: 'Speak a language.'
    },
    {
      question: 'He ___ a car.',
      questionRu: 'Он водит машину.',
      options: ['goes', 'rides', 'drives', 'plays'],
      correctAnswer: 2,
      explanation: 'Drive a car.'
    },
    {
      question: 'We ___ TV on Sundays.',
      questionRu: 'Мы смотрим телевизор по воскресеньям.',
      options: ['see', 'look', 'watch', 'listen'],
      correctAnswer: 2,
      explanation: 'Watch TV.'
    },
    {
      question: 'They ___ in an apartment.',
      questionRu: 'Они живут в квартире.',
      options: ['live', 'life', 'love', 'leave'],
      correctAnswer: 0,
      explanation: 'Live in.'
    },
    {
      question: 'I ___ to music.',
      questionRu: 'Я слушаю музыку.',
      options: ['hear', 'listen', 'watch', 'sound'],
      correctAnswer: 1,
      explanation: 'Listen to.'
    },
    {
      question: 'She ___ glasses.',
      questionRu: 'Она носит очки.',
      options: ['has', 'wears', 'puts', 'takes'],
      correctAnswer: 1,
      explanation: 'Wear clothes/glasses.'
    },
    {
      question: 'I ___ my homework after school.',
      questionRu: 'Я делаю домашнюю работу после школы.',
      options: ['make', 'do', 'create', 'work'],
      correctAnswer: 1,
      explanation: 'Do homework.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'It is raining. ___ an umbrella.',
      questionRu: 'Идёт дождь. Возьми зонт.',
      options: ['Take', 'Put', 'Do', 'Make'],
      correctAnswer: 0,
      explanation: 'Take an umbrella.'
    },
    {
      question: 'He ___ tennis.',
      questionRu: 'Он игра��т в теннис.',
      options: ['plays', 'does', 'goes', 'makes'],
      correctAnswer: 0,
      explanation: 'Play sports.'
    }
  ]
};
