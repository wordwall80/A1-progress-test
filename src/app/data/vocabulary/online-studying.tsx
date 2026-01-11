import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const onlineStudyingTopic: VocabularyTopic = {
  id: 'online-studying',
  title: 'Online Studying',
  titleRu: 'Онлайн обучение',
  description: 'Computer and study vocabulary',
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          ['laptop', 'ноутбук'],
          ['computer', 'компьютер'],
          ['mouse', 'мышь'],
          ['keyboard', 'клавиатура'],
          ['monitor / screen', 'монитор / экран'],
          ['speakers', 'колонки'],
          ['headphones', 'наушники (большие)'],
          ['earphones', 'наушники (вкладыши)'],
          ['lamp', 'лампа'],
          ['desk', 'письменный стол'],
          ['touchpad', 'тачпад'],
          ['remote learning', 'удалённое обучение'],
          ['save time', 'экономить время']
        ].map(([eng, ru], i) => (
          <VocabCard key={i} word={eng} translation={ru} />
        ))}
      </div>
    </div>
  ),
  questions: [
    {
      question: 'You type on this.',
      questionRu: 'Вы печатаете на этом.',
      options: ['mouse', 'screen', 'keyboard', 'speaker'],
      correctAnswer: 2,
      explanation: 'Keyboard.'
    },
    {
      question: 'You use this to click.',
      questionRu: 'Вы используете это, чтобы кликать.',
      options: ['keyboard', 'mouse', 'monitor', 'lamp'],
      correctAnswer: 1,
      explanation: 'Mouse.'
    },
    {
      question: 'You watch the video on the ___.',
      questionRu: 'Вы смотрите видео на ___.',
      options: ['keyboard', 'mouse', 'monitor', 'desk'],
      correctAnswer: 2,
      explanation: 'Monitor / Screen.'
    },
    {
      question: 'You listen to music with ___.',
      questionRu: 'Вы слушаете музыку через ___.',
      options: ['headphones', 'mouse', 'keyboard', 'lamp'],
      correctAnswer: 0,
      explanation: 'Headphones.'
    },
    {
      question: 'A portable computer is a ___.',
      questionRu: 'Переносной компьютер - это ___.',
      options: ['desk', 'laptop', 'mouse', 'screen'],
      correctAnswer: 1,
      explanation: 'Laptop.'
    },
    {
      question: 'Studying from home is ___ learning.',
      questionRu: 'Учёба из дома - это ___ обучение.',
      options: ['remote', 'close', 'far', 'bad'],
      correctAnswer: 0,
      explanation: 'Remote learning.'
    },
    {
      question: 'Online learning helps to ___ time.',
      questionRu: 'Онлайн обучение помогает ___ время.',
      options: ['spend', 'lose', 'save', 'kill'],
      correctAnswer: 2,
      explanation: 'Save time.'
    },
    {
      question: 'You put your computer on a ___.',
      questionRu: 'Вы ставите компьютер на ___.',
      options: ['wall', 'desk', 'lamp', 'mouse'],
      correctAnswer: 1,
      explanation: 'Desk.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'You need ___ to hear sound loudly.',
      questionRu: 'Вам нужны ___, чтобы слышать звук громко.',
      options: ['speakers', 'mouse', 'keyboard', 'screen'],
      correctAnswer: 0,
      explanation: 'Speakers.'
    },
    {
      question: 'On a laptop, you can use a mouse or a ___.',
      questionRu: 'На ноутбуке можно использовать мышь или ___.',
      options: ['touchpad', 'screen', 'key', 'board'],
      correctAnswer: 0,
      explanation: 'Touchpad.'
    }
  ]
};
