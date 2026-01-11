import { GrammarTopic } from '../types';
import React from 'react';

export const prepositionsPlaceTopic: GrammarTopic = {
  id: 'prepositions-place',
  title: 'Prepositions of Place',
  titleRu: 'Предлоги места',
  description: 'At, In, On, Under',
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-bold mb-2">IN (Inside / Внутри)</h3>
          <ul className="list-disc list-inside text-sm">
            <li>in the box</li>
            <li>in the room</li>
            <li>in the car</li>
            <li>in London (cities/countries)</li>
          </ul>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-bold mb-2">ON (Surface / На поверхности)</h3>
          <ul className="list-disc list-inside text-sm">
            <li>on the table</li>
            <li>on the wall</li>
            <li>on the floor</li>
            <li>on the bus/train (public transport)</li>
          </ul>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-bold mb-2">AT (Specific point / В точке)</h3>
          <ul className="list-disc list-inside text-sm">
            <li>at the door</li>
            <li>at the bus stop</li>
            <li>at home / at work / at school</li>
            <li>at the table (sitting/eating)</li>
          </ul>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-bold mb-2">UNDER (Below / Под)</h3>
          <ul className="list-disc list-inside text-sm">
            <li>under the bed</li>
            <li>under the chair</li>
            <li>under the tree</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'The cat is ___ the box.',
      questionRu: 'Кошка в коробке.',
      options: ['on', 'at', 'in', 'under'],
      correctAnswer: 2,
      explanation: 'Inside the box -> in.'
    },
    {
      question: 'The book is ___ the table.',
      questionRu: 'Книга на столе.',
      options: ['in', 'on', 'at', 'under'],
      correctAnswer: 1,
      explanation: 'On the surface -> on.'
    },
    {
      question: 'He is waiting ___ the bus stop.',
      questionRu: 'Он ждёт на автобусной остановке.',
      options: ['in', 'on', 'at', 'under'],
      correctAnswer: 2,
      explanation: 'At a specific point -> at.'
    },
    {
      question: 'Your shoes are ___ the bed.',
      questionRu: 'Твои туфли под кроватью.',
      options: ['in', 'on', 'at', 'under'],
      correctAnswer: 3,
      explanation: 'Below -> under.'
    },
    {
      question: 'I live ___ Paris.',
      questionRu: 'Я живу в Париже.',
      options: ['on', 'at', 'in', 'under'],
      correctAnswer: 2,
      explanation: 'In a city -> in.'
    },
    {
      question: 'She is ___ work.',
      questionRu: 'Она на работе.',
      options: ['in', 'on', 'at', 'under'],
      correctAnswer: 2,
      explanation: 'Fixed phrase -> at work.'
    },
    {
      question: 'The picture is ___ the wall.',
      questionRu: 'Картина на стене.',
      options: ['in', 'on', 'at', 'under'],
      correctAnswer: 1,
      explanation: 'On a surface -> on.'
    },
    {
      question: 'We are ___ the bus.',
      questionRu: 'Мы в автобусе.',
      options: ['in', 'on', 'at', 'under'],
      correctAnswer: 1,
      explanation: 'Public transport (except taxi/car) usually uses "on".'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'Put the bag ___ the floor.',
      questionRu: 'Поставь сумку на пол.',
      options: ['in', 'on', 'at', 'under'],
      correctAnswer: 1,
      explanation: 'Surface -> on.'
    },
    {
      question: 'Is Tom ___ school?',
      questionRu: 'Том в школе?',
      options: ['in', 'on', 'at', 'under'],
      correctAnswer: 2,
      explanation: 'Fixed phrase -> at school.'
    }
  ]
};
