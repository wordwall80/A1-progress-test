import { GrammarTopic } from '../types';
import React from 'react';

export const verbToBeTopic: GrammarTopic = {
  id: 'verb-to-be',
  title: 'Verb "To Be" (Present)',
  titleRu: 'Глагол "быть" (Настоящее)',
  description: 'Present Simple: am, is, are',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Forms / Формы</h3>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p><strong>I am</strong> (I'm) - Я есть</p>
          <p><strong>You are</strong> (You're) - Ты/Вы есть</p>
          <p><strong>He/She/It is</strong> (He's/She's/It's) - Он/Она/Оно есть</p>
          <p><strong>We are</strong> (We're) - Мы есть</p>
          <p><strong>They are</strong> (They're) - Они есть</p>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Negative / Отрицание</h3>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p>I <strong>am not</strong> (I'm not)</p>
          <p>You/We/They <strong>are not</strong> (aren't)</p>
          <p>He/She/It <strong>is not</strong> (isn't)</p>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Questions / Вопросы</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Are</strong> you a teacher?</li>
          <li><strong>Is</strong> he American?</li>
          <li><strong>Am</strong> I late?</li>
        </ul>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I ___ a student.',
      questionRu: 'Я студент.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 0,
      explanation: 'Use "am" with "I".'
    },
    {
      question: 'She ___ very happy today.',
      questionRu: 'Она очень счастлива сегодня.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 1,
      explanation: 'Use "is" with "she", "he", and "it".'
    },
    {
      question: 'They ___ from Russia.',
      questionRu: 'Они из России.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 2,
      explanation: 'Use "are" with "they", "we", and "you".'
    },
    {
      question: '___ you a doctor?',
      questionRu: 'Вы доктор?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 2,
      explanation: 'In questions, use "Are" before "you".'
    },
    {
      question: 'He ___ not at home.',
      questionRu: 'Он не дома.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 1,
      explanation: 'Use "is not" (isn\'t) with "he".'
    },
    {
      question: 'We ___ students.',
      questionRu: 'Мы студенты.',
      options: ['is', 'am', 'are', 'be'],
      correctAnswer: 2,
      explanation: 'Use "are" with "we".'
    },
    {
      question: 'It ___ cold today.',
      questionRu: 'Сегодня холодно.',
      options: ['are', 'is', 'am', 'be'],
      correctAnswer: 1,
      explanation: 'Use "is" with "it".'
    },
    {
      question: '___ they from Spain?',
      questionRu: 'Они из Испании?',
      options: ['Is', 'Am', 'Are', 'Be'],
      correctAnswer: 2,
      explanation: 'Use "Are" with "they".'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'You ___ my best friend.',
      questionRu: 'Ты мой лучший друг.',
      options: ['is', 'am', 'are', 'be'],
      correctAnswer: 2,
      explanation: 'Use "are" with "you".'
    },
    {
      question: 'She ___ not a doctor.',
      questionRu: 'Она не врач.',
      options: ['is', 'are', 'am', 'be'],
      correctAnswer: 0,
      explanation: 'Use "is" with "she".'
    }
  ]
};
