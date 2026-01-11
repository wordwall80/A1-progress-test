import { GrammarTopic } from '../types';
import React from 'react';

export const presentContinuousTopic: GrammarTopic = {
  id: 'present-continuous',
  title: 'Present Continuous',
  titleRu: 'Настоящее длительное время',
  description: 'Actions happening now',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Formation / Образование</h3>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>Subject + am/is/are + verb-ing</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>I <strong>am working</strong>.</li>
            <li>He <strong>is playing</strong>.</li>
            <li>They <strong>are studying</strong>.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Spelling Rules / Правила написания</h3>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>drop -e</strong>: make → making</p>
          <p><strong>double consonant</strong>: run → running, sit → sitting</p>
        </div>
      </div>

      <div>
        <h3 className="mb-3">When to Use / Когда использовать</h3>
        <ul className="list-disc list-inside ml-4">
          <li>For actions happening <strong>now</strong> / <strong>at the moment</strong>.</li>
        </ul>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I ___ TV right now.',
      questionRu: 'Я смотрю телевизор сейчас.',
      options: ['watch', 'watching', 'am watching', 'watches'],
      correctAnswer: 2,
      explanation: 'Use "am" + verb-ing with "I".'
    },
    {
      question: 'She ___ a book at the moment.',
      questionRu: 'Она читает книгу в данный момент.',
      options: ['read', 'reads', 'is reading', 'are reading'],
      correctAnswer: 2,
      explanation: 'Use "is" + verb-ing with "she".'
    },
    {
      question: 'They ___ football now.',
      questionRu: 'Они играют в футбол сейчас.',
      options: ['play', 'plays', 'playing', 'are playing'],
      correctAnswer: 3,
      explanation: 'Use "are" + verb-ing with "they".'
    },
    {
      question: 'What is the -ing form of "run"?',
      questionRu: 'Какая форма -ing от "run"?',
      options: ['runing', 'running', 'runn', 'runs'],
      correctAnswer: 1,
      explanation: 'Double consonant: running.'
    },
    {
      question: '___ you listening to me?',
      questionRu: 'Ты меня слушаешь?',
      options: ['Do', 'Does', 'Is', 'Are'],
      correctAnswer: 3,
      explanation: 'Use "Are" with "you".'
    },
    {
      question: 'We ___ having lunch.',
      questionRu: 'Мы обедаем.',
      options: ['is', 'am', 'are', 'be'],
      correctAnswer: 2,
      explanation: 'Use "are" with "we".'
    },
    {
      question: 'He ___ sleeping.',
      questionRu: 'Он спит.',
      options: ['is', 'are', 'am', 'be'],
      correctAnswer: 0,
      explanation: 'Use "is" with "he".'
    },
    {
      question: '___ she working?',
      questionRu: 'Она работает?',
      options: ['Do', 'Does', 'Is', 'Are'],
      correctAnswer: 2,
      explanation: 'Use "Is" with "she".'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'Stop! The bus is ___!',
      questionRu: 'Стой! Автобус останавливается!',
      options: ['stoping', 'stopping', 'stoped', 'stops'],
      correctAnswer: 1,
      explanation: 'Double consonant: stopping.'
    },
    {
      question: 'I ___ not going.',
      questionRu: 'Я не иду.',
      options: ['is', 'are', 'am', 'be'],
      correctAnswer: 2,
      explanation: 'I am not going.'
    }
  ]
};
