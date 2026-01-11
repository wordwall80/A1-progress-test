import { GrammarTopic } from '../types';
import React from 'react';

export const pluralNounsTopic: GrammarTopic = {
  id: 'plural-singular',
  title: 'Plural & Singular Nouns',
  titleRu: 'Множественное и единственное число',
  description: 'Regular and irregular plurals',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Regular Plurals / Правильное множественное число</h3>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>Add -s</strong> (most nouns)</p>
          <ul className="list-disc list-inside ml-4">
            <li>book → books</li>
            <li>cat → cats</li>
          </ul>
          <p className="mt-3"><strong>Add -es</strong> (after -s, -ss, -sh, -ch, -x, -o)</p>
          <ul className="list-disc list-inside ml-4">
            <li>bus → buses</li>
            <li>box → boxes</li>
            <li>tomato → tomatoes</li>
          </ul>
          <p className="mt-3"><strong>Change -y to -ies</strong> (consonant + y)</p>
          <ul className="list-disc list-inside ml-4">
            <li>city → cities</li>
            <li>baby → babies</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Irregular Plurals / Неправильное множественное число</h3>
        <div className="bg-muted p-4 rounded-lg">
          <ul className="list-disc list-inside space-y-1">
            <li>man → men</li>
            <li>woman → women</li>
            <li>child → children</li>
            <li>tooth → teeth</li>
            <li>foot → feet</li>
            <li>mouse → mice</li>
            <li>person → people</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'What is the plural of "book"?',
      questionRu: 'Множественное число от "book"?',
      options: ['book', 'books', 'bookes', 'bookies'],
      correctAnswer: 1,
      explanation: 'Add -s.'
    },
    {
      question: 'What is the plural of "child"?',
      questionRu: 'Множественное число от "child"?',
      options: ['childs', 'childes', 'children', 'childrens'],
      correctAnswer: 2,
      explanation: 'Irregular: child → children.'
    },
    {
      question: 'What is the plural of "box"?',
      questionRu: 'Множественное число от "box"?',
      options: ['boxs', 'boxes', 'boxies', 'boxen'],
      correctAnswer: 1,
      explanation: 'Add -es after x.'
    },
    {
      question: 'What is the plural of "city"?',
      questionRu: 'Множественное число от "city"?',
      options: ['citys', 'cities', 'cityes', 'city'],
      correctAnswer: 1,
      explanation: 'y → ies.'
    },
    {
      question: 'What is the plural of "man"?',
      questionRu: 'Множественное число от "man"?',
      options: ['mans', 'men', 'mens', 'manes'],
      correctAnswer: 1,
      explanation: 'Irregular: man → men.'
    },
    {
      question: 'I have two ___.',
      questionRu: 'У меня двое часов.',
      options: ['watch', 'watches', 'watchs', 'watchies'],
      correctAnswer: 1,
      explanation: 'Add -es (ch).'
    },
    {
      question: 'Three ___.',
      questionRu: 'Три женщины.',
      options: ['woman', 'womans', 'women', 'womens'],
      correctAnswer: 2,
      explanation: 'Irregular: woman → women.'
    },
    {
      question: 'Many ___.',
      questionRu: 'Много людей.',
      options: ['persons', 'peoples', 'people', 'person'],
      correctAnswer: 2,
      explanation: 'Irregular: person → people.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'One foot, two ___.',
      questionRu: 'Одна ступня, две ступни.',
      options: ['foots', 'feet', 'feets', 'footes'],
      correctAnswer: 1,
      explanation: 'Irregular: foot → feet.'
    },
    {
      question: 'Five ___.',
      questionRu: 'Пять мышей.',
      options: ['mouses', 'mouse', 'mices', 'mice'],
      correctAnswer: 3,
      explanation: 'Irregular: mouse → mice.'
    }
  ]
};
