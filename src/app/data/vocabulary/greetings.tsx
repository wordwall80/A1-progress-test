import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const greetingsTopic: VocabularyTopic = {
  id: 'greetings',
  title: 'Greetings & Introductions',
  titleRu: 'Приветствия и знакомство',
  description: 'Hello, goodbye, and basic phrases',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Basic Greetings / Основные приветствия</h3>
        <div className="space-y-3">
          {[
            ['hello', 'Привет'],
            ['good morning', 'Доброе утро'],
            ['good afternoon', 'Добрый день'],
            ['good evening', 'Добрый вечер'],
            ['good night', 'Спокойной ночи'],
            ['goodbye', 'До свидания']
          ].map(([eng, ru], i) => (
            <VocabCard key={i} word={eng} translation={ru} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3">Introductions / Знакомство</h3>
        <div className="space-y-3">
          {[
            ['What is your name?', 'Как вас зовут?'],
            ['My name is', 'Меня зовут'],
            ['Nice to meet you', 'Приятно познакомиться'],
            ['How are you?', 'Как дела?'],
            ['I am fine', 'Хорошо'],
            ['Where are you from?', 'Откуда вы?']
          ].map(([eng, ru], i) => (
            <VocabCard key={i} word={eng} translation={ru} />
          ))}
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'How do you greet someone in the morning?',
      questionRu: 'Как приветствовать кого-то утром?',
      options: ['Good night', 'Good morning', 'Good evening', 'Goodbye'],
      correctAnswer: 1,
      explanation: 'Good morning.'
    },
    {
      question: 'What do you say when you leave?',
      questionRu: 'Что вы говорите, когда уходите?',
      options: ['Hello', 'Good morning', 'Goodbye', 'Thank you'],
      correctAnswer: 2,
      explanation: 'Goodbye.'
    },
    {
      question: 'How do you ask someone\'s name?',
      questionRu: 'Как спросить чьё-то имя?',
      options: ['How are you?', 'What\'s your name?', 'Where are you?', 'Who is it?'],
      correctAnswer: 1,
      explanation: 'What\'s your name?'
    },
    {
      question: 'What do you say when someone says "Thank you"?',
      questionRu: 'Что вы говорите, когда кто-то говорит "Спасибо"?',
      options: ['Please', 'You\'re welcome', 'Goodbye', 'Hello'],
      correctAnswer: 1,
      explanation: 'You\'re welcome.'
    },
    {
      question: 'When do you say "Good evening"?',
      questionRu: 'Когда вы говорите "Добрый вечер"?',
      options: ['Morning', 'Afternoon', 'Evening', 'Night'],
      correctAnswer: 2,
      explanation: 'Evening (after 6 PM).'
    },
    {
      question: 'How ___ you?',
      questionRu: 'Как дела?',
      options: ['is', 'are', 'am', 'be'],
      correctAnswer: 1,
      explanation: 'How are you?'
    },
    {
      question: 'Nice to ___ you.',
      questionRu: 'Приятно познакомиться.',
      options: ['meet', 'see', 'look', 'watch'],
      correctAnswer: 0,
      explanation: 'Nice to meet you.'
    },
    {
      question: 'Where are you ___?',
      questionRu: 'Откуда вы?',
      options: ['from', 'in', 'on', 'at'],
      correctAnswer: 0,
      explanation: 'Where are you from?'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'I ___ fine.',
      questionRu: 'Я в порядке (Хорошо).',
      options: ['is', 'am', 'are', 'be'],
      correctAnswer: 1,
      explanation: 'I am fine.'
    },
    {
      question: 'See you ___.',
      questionRu: 'Увидимся позже.',
      options: ['later', 'late', 'latter', 'latest'],
      correctAnswer: 0,
      explanation: 'See you later.'
    }
  ]
};
