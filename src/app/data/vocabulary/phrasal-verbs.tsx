import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const phrasalVerbsTopic: VocabularyTopic = {
  id: 'phrasal-verbs',
  title: 'Phrasal Verbs',
  titleRu: 'Фразовые глаголы',
  description: 'Wake up, go out, put on...',
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          ['wake up', 'просыпаться'],
          ['get up', 'вставать (с кровати)'],
          ['go out', 'выходить (в свет, гулять)'],
          ['come in', 'входить'],
          ['put on', 'надевать'],
          ['take off', 'снимать (одежду)'],
          ['sit down', 'садиться'],
          ['stand up', 'вставать (со стула)'],
          ['turn on', 'включать'],
          ['turn off', 'выключать']
        ].map(([eng, ru], i) => (
          <VocabCard key={i} word={eng} translation={ru} />
        ))}
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I ___ at 7 am.',
      questionRu: 'Я просыпаюсь в 7 утра.',
      options: ['wake up', 'go out', 'put on', 'turn off'],
      correctAnswer: 0,
      explanation: 'Wake up = stop sleeping.'
    },
    {
      question: 'Please ___ your coat.',
      questionRu: 'Пожалуйста, надень пальто.',
      options: ['take off', 'put on', 'get up', 'go out'],
      correctAnswer: 1,
      explanation: 'Put on = dress.'
    },
    {
      question: '___ the light, please.',
      questionRu: 'Включи свет, пожалуйста.',
      options: ['Turn on', 'Turn off', 'Go out', 'Wake up'],
      correctAnswer: 0,
      explanation: 'Turn on = activate.'
    },
    {
      question: 'Don\'t ___!',
      questionRu: 'Не вставай!',
      options: ['sit down', 'stand up', 'wake up', 'put on'],
      correctAnswer: 1,
      explanation: 'Stand up = rise to feet.'
    },
    {
      question: 'Let\'s ___ tonight.',
      questionRu: 'Давай сходим куда-нибудь сегодня вечером.',
      options: ['go out', 'come in', 'get up', 'wake up'],
      correctAnswer: 0,
      explanation: 'Go out = leave home for fun.'
    },
    {
      question: '___! The door is open.',
      questionRu: 'Входите! Дверь открыта.',
      options: ['Go out', 'Come in', 'Stand up', 'Take off'],
      correctAnswer: 1,
      explanation: 'Come in = enter.'
    },
    {
      question: 'It\'s hot. ___ your jacket.',
      questionRu: 'Жарко. Сними куртку.',
      options: ['Put on', 'Take off', 'Turn on', 'Wake up'],
      correctAnswer: 1,
      explanation: 'Take off = remove clothes.'
    },
    {
      question: 'Please ___ on the chair.',
      questionRu: 'Пожалуйста, садитесь на стул.',
      options: ['stand up', 'sit down', 'get up', 'go out'],
      correctAnswer: 1,
      explanation: 'Sit down.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'Don\'t forget to ___ the TV.',
      questionRu: 'Не забудь выключить телевизор.',
      options: ['turn on', 'turn off', 'take off', 'put on'],
      correctAnswer: 1,
      explanation: 'Turn off = deactivate.'
    },
    {
      question: 'I usually ___ early.',
      questionRu: 'Я обычно встаю рано.',
      options: ['get up', 'go out', 'put on', 'sit down'],
      correctAnswer: 0,
      explanation: 'Get up = get out of bed.'
    }
  ]
};
