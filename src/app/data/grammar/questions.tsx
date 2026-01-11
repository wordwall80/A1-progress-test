import { GrammarTopic } from '../types';
import React from 'react';

export const questionsTopic: GrammarTopic = {
  id: 'questions-word-order',
  title: 'Questions & Word Order',
  titleRu: 'Вопросы и порядок слов',
  description: 'What, Where, When, Who...',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Question Words / Вопросительные слова</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm bg-muted p-4 rounded-lg">
          <div><strong>What</strong> - Что / Какой</div>
          <div><strong>Where</strong> - Где / Куда</div>
          <div><strong>When</strong> - Когда</div>
          <div><strong>Who</strong> - Кто</div>
          <div><strong>Why</strong> - Почему</div>
          <div><strong>How</strong> - Как</div>
          <div><strong>How many</strong> - Сколько</div>
          <div><strong>Which</strong> - Который</div>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Word Order / Порядок слов</h3>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>Question Word + Auxiliary + Subject + Verb?</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Where</strong> do you live?</li>
            <li><strong>What</strong> is your name?</li>
            <li><strong>When</strong> does the movie start?</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 className="mb-3">Basic Sentence Order / Порядок слов в предложении</h3>
        <p>Subject + Verb + Object (SVO)</p>
        <div className="bg-muted p-4 rounded-lg">
          <p>I (Subject) love (Verb) pizza (Object).</p>
          <p>She (Subject) plays (Verb) tennis (Object).</p>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: '___ do you live?',
      questionRu: 'Где ты живёшь?',
      options: ['What', 'Where', 'Who', 'When'],
      correctAnswer: 1,
      explanation: 'Where = Где.'
    },
    {
      question: '___ time is it?',
      questionRu: 'Сколько времени?',
      options: ['When', 'Where', 'What', 'Who'],
      correctAnswer: 2,
      explanation: 'What time = Который час.'
    },
    {
      question: '___ is that man?',
      questionRu: 'Кто этот мужчина?',
      options: ['What', 'Who', 'Where', 'Why'],
      correctAnswer: 1,
      explanation: 'Who = Кто (for people).'
    },
    {
      question: 'Choose the correct order:',
      questionRu: 'Выберите правильный порядок:',
      options: ['You live where?', 'Where you live?', 'Where do you live?', 'Where live you?'],
      correctAnswer: 2,
      explanation: 'Question Word + Auxiliary (do) + Subject + Verb.'
    },
    {
      question: '___ old are you?',
      questionRu: 'Сколько тебе лет?',
      options: ['How', 'What', 'Who', 'When'],
      correctAnswer: 0,
      explanation: 'How old = Сколько лет.'
    },
    {
      question: '___ are you sad?',
      questionRu: 'Почему ты грустный?',
      options: ['Who', 'What', 'Why', 'Where'],
      correctAnswer: 2,
      explanation: 'Why = Почему.'
    },
    {
      question: 'Choose the correct sentence:',
      questionRu: 'Выберите правильное предложение:',
      options: ['I football play.', 'Play I football.', 'I play football.', 'Football I play.'],
      correctAnswer: 2,
      explanation: 'Subject + Verb + Object.'
    },
    {
      question: '___ much does it cost?',
      questionRu: 'Сколько это стоит?',
      options: ['How', 'What', 'Who', 'Where'],
      correctAnswer: 0,
      explanation: 'How much = Сколько (цена).'
    }
  ],
  finalQuizQuestions: [
    {
      question: '___ color is your car?',
      questionRu: 'Какого цвета твоя машина?',
      options: ['Which', 'How', 'What', 'Where'],
      correctAnswer: 2,
      explanation: 'What color = Какой цвет.'
    },
    {
      question: '___ does the lesson start?',
      questionRu: 'Когда начинается урок?',
      options: ['Who', 'When', 'What', 'How'],
      correctAnswer: 1,
      explanation: 'When = Когда.'
    }
  ]
};
