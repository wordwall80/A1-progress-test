import { GrammarTopic } from '../types';
import React from 'react';

export const canCantTopic: GrammarTopic = {
  id: 'can-cant',
  title: 'Can / Can\'t',
  titleRu: 'Могу / Не могу',
  description: 'Ability, possibility, permission',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Forms / Формы</h3>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>Positive:</strong> Subject + can + verb</p>
          <ul className="list-disc list-inside ml-4">
            <li>I <strong>can</strong> swim. (Я умею плавать.)</li>
            <li>She <strong>can</strong> speak English. (Она может говорить по-английски.)</li>
            <li>(No "s" for he/she: He can, NOT He cans)</li>
          </ul>
          
          <p className="mt-3"><strong>Negative:</strong> Subject + can't (cannot) + verb</p>
          <ul className="list-disc list-inside ml-4">
            <li>I <strong>can't</strong> drive. (Я не умею водить.)</li>
            <li>He <strong>can't</strong> come. (Он не может прийти.)</li>
          </ul>

          <p className="mt-3"><strong>Questions:</strong> Can + Subject + verb?</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Can</strong> you help me? (Ты можешь мне помочь?)</li>
            <li><strong>Can</strong> I open the window? (Можно мне открыть окно?)</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I ___ speak Spanish.',
      questionRu: 'Я умею говорить по-испански.',
      options: ['can', 'cans', 'can to', 'to can'],
      correctAnswer: 0,
      explanation: 'Use "can" + base verb.'
    },
    {
      question: 'She ___ swim very well.',
      questionRu: 'Она не умеет плавать очень хорошо.',
      options: ['no can', 'can\'t', 'doesn\'t can', 'don\'t can'],
      correctAnswer: 1,
      explanation: 'Use "can\'t" for negative.'
    },
    {
      question: '___ you help me?',
      questionRu: 'Ты можешь мне помочь?',
      options: ['Do', 'Are', 'Can', 'Is'],
      correctAnswer: 2,
      explanation: 'Use "Can" for requests/ability.'
    },
    {
      question: 'He ___ run fast.',
      questionRu: 'Он умеет быстро бегать.',
      options: ['can', 'cans', 'can runs', 'can to run'],
      correctAnswer: 0,
      explanation: 'No "s" after can. Base verb.'
    },
    {
      question: 'Can they ___ today?',
      questionRu: 'Они могут прийти сегодня?',
      options: ['coming', 'to come', 'come', 'comes'],
      correctAnswer: 2,
      explanation: 'Can + base verb.'
    },
    {
      question: 'We ___ see the screen.',
      questionRu: 'Мы не видим экран.',
      options: ['can\'t', 'no can', 'aren\'t can', 'don\'t can'],
      correctAnswer: 0,
      explanation: 'Negative form is can\'t.'
    },
    {
      question: 'Can I ___ in?',
      questionRu: 'Можно мне войти?',
      options: ['to come', 'come', 'coming', 'comes'],
      correctAnswer: 1,
      explanation: 'Can + base verb.'
    },
    {
      question: '___ birds fly?',
      questionRu: 'Умеют ли птицы летать?',
      options: ['Do', 'Are', 'Can', 'Have'],
      correctAnswer: 2,
      explanation: 'Ability check -> Can.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'She ___ play the piano.',
      questionRu: 'Она умеет играть на пианино.',
      options: ['can', 'cans', 'can to', 'is can'],
      correctAnswer: 0,
      explanation: 'Modals don\'t change form.'
    },
    {
      question: '___ I have a coffee, please?',
      questionRu: 'Можно мне кофе, пожалуйста?',
      options: ['Can', 'Do', 'Am', 'Have'],
      correctAnswer: 0,
      explanation: 'Request -> Can.'
    }
  ]
};
