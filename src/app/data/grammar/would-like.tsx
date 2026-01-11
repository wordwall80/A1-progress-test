import { GrammarTopic } from '../types';
import React from 'react';

export const wouldLikeTopic: GrammarTopic = {
  id: 'would-like',
  title: 'Would Like',
  titleRu: 'Хотел бы',
  description: 'Polite requests and offers',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Polite Requests / Вежливые просьбы</h3>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>I would like... (I'd like...)</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>I'd like a coffee, please. (Я бы хотел кофе.)</li>
            <li>I'd like to book a table. (Я бы хотел забронировать столик.)</li>
            <li>(Not "I want" - "I want" is less polite)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Offers / Предложения</h3>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>Would you like...?</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Would you like some tea? (Хотите чаю?)</li>
            <li>Would you like to come with us? (Хотите пойти с нами?)</li>
          </ul>
          <p className="mt-2 text-sm"><strong>Short answers:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Yes, please.</li>
            <li>No, thank you.</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I ___ like a sandwich.',
      questionRu: 'Я бы хотел сэндвич.',
      options: ['would', 'do', 'can', 'will'],
      correctAnswer: 0,
      explanation: 'I would like = Я бы хотел.'
    },
    {
      question: '___ you like some water?',
      questionRu: 'Хотите воды?',
      options: ['Do', 'Are', 'Would', 'Can'],
      correctAnswer: 2,
      explanation: 'Would you like...?'
    },
    {
      question: 'I\'d like ___ to the cinema.',
      questionRu: 'Я бы хотел пойти в кино.',
      options: ['go', 'to go', 'going', 'went'],
      correctAnswer: 1,
      explanation: 'would like + to + verb.'
    },
    {
      question: 'What ___ you like to drink?',
      questionRu: 'Что бы вы хотели выпить?',
      options: ['would', 'do', 'are', 'can'],
      correctAnswer: 0,
      explanation: 'What would you like...?'
    },
    {
      question: 'I ___ like to order.',
      questionRu: 'Я бы хотел сделать заказ.',
      options: ['would', 'am', 'do', 'have'],
      correctAnswer: 0,
      explanation: 'I would like.'
    },
    {
      question: 'Would you like ___ apple?',
      questionRu: 'Хотите яблоко?',
      options: ['a', 'an', 'some', 'any'],
      correctAnswer: 1,
      explanation: 'an apple (singular, vowel sound).'
    },
    {
      question: 'No, ___ you.',
      questionRu: 'Нет, спасибо.',
      options: ['please', 'thanks', 'thank', 'welcome'],
      correctAnswer: 2,
      explanation: 'No, thank you.'
    },
    {
      question: '___ like a salad, please.',
      questionRu: 'Я бы хотел салат.',
      options: ['I', 'I\'d', 'I\'m', 'I\'ll'],
      correctAnswer: 1,
      explanation: 'I\'d = I would.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'I would like ___ pay by card.',
      questionRu: 'Я бы хотел заплатить картой.',
      options: ['pay', 'to pay', 'paying', 'paid'],
      correctAnswer: 1,
      explanation: 'would like + to + verb.'
    },
    {
      question: '___ you like to dance?',
      questionRu: 'Хотите потанцевать?',
      options: ['Do', 'Would', 'Are', 'Can'],
      correctAnswer: 1,
      explanation: 'Would you like...?'
    }
  ]
};
