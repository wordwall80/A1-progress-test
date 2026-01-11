import { GrammarTopic } from '../types';
import React from 'react';

export const prepositionsTimeTopic: GrammarTopic = {
  id: 'prepositions-time',
  title: 'Prepositions of Time',
  titleRu: 'Предлоги времени',
  description: 'At, In, On',
  content: (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold text-blue-700 mb-2">AT</h3>
          <p className="text-sm mb-2">Specific times & exceptions</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>at 5 o'clock</li>
            <li>at 10:30 am</li>
            <li>at noon / at midnight</li>
            <li>at night</li>
            <li>at the weekend</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold text-green-700 mb-2">ON</h3>
          <p className="text-sm mb-2">Days & Dates</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>on Monday</li>
            <li>on Tuesday morning</li>
            <li>on my birthday</li>
            <li>on 15th May</li>
            <li>on Christmas Day</li>
          </ul>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-bold text-orange-700 mb-2">IN</h3>
          <p className="text-sm mb-2">Longer periods</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>in the morning/afternoon</li>
            <li>in May (months)</li>
            <li>in 2025 (years)</li>
            <li>in summer (seasons)</li>
            <li>in the 21st century</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'The meeting is ___ 2 PM.',
      questionRu: 'Встреча в 2 часа дня.',
      options: ['in', 'on', 'at', 'to'],
      correctAnswer: 2,
      explanation: 'Use "at" for specific clock times.'
    },
    {
      question: 'My birthday is ___ July.',
      questionRu: 'Мой день рождения в июле.',
      options: ['on', 'in', 'at', 'of'],
      correctAnswer: 1,
      explanation: 'Use "in" for months.'
    },
    {
      question: 'I don\'t work ___ Sundays.',
      questionRu: 'Я не работаю по воскресеньям.',
      options: ['in', 'at', 'on', 'by'],
      correctAnswer: 2,
      explanation: 'Use "on" for days of the week.'
    },
    {
      question: 'See you ___ Monday morning.',
      questionRu: 'Увидимся в понедельник утром.',
      options: ['in', 'on', 'at', 'the'],
      correctAnswer: 1,
      explanation: 'Use "on" because the specific day (Monday) is mentioned.'
    },
    {
      question: 'He was born ___ 1990.',
      questionRu: 'Он родился в 1990 году.',
      options: ['at', 'on', 'in', 'of'],
      correctAnswer: 2,
      explanation: 'Use "in" for years.'
    },
    {
      question: 'We sleep ___ night.',
      questionRu: 'Мы спим ночью.',
      options: ['in', 'on', 'at', 'to'],
      correctAnswer: 2,
      explanation: 'Use "at" with "night".'
    },
    {
      question: 'I usually relax ___ the evening.',
      questionRu: 'Я обычно отдыхаю вечером.',
      options: ['on', 'at', 'in', 'by'],
      correctAnswer: 2,
      explanation: 'Use "in" for "the evening".'
    },
    {
      question: 'The party is ___ 1st January.',
      questionRu: 'Вечеринка 1-го января.',
      options: ['in', 'on', 'at', 'of'],
      correctAnswer: 1,
      explanation: 'Use "on" for specific dates.'
    }
  ],
  finalQuizQuestions: [
    {
      question: '___ the weekend.',
      questionRu: 'На выходных.',
      options: ['In', 'On', 'At', 'To'],
      correctAnswer: 2,
      explanation: 'At the weekend (British English standard).'
    },
    {
      question: '___ winter.',
      questionRu: 'Зимой.',
      options: ['On', 'At', 'In', 'By'],
      correctAnswer: 2,
      explanation: 'In + season.'
    }
  ]
};
