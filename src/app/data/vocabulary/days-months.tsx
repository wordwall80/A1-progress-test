import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const daysMonthsTopic: VocabularyTopic = {
  id: 'days-months',
  title: 'Days, Months & Seasons',
  titleRu: 'Дни, месяцы и времена года',
  description: 'Calendar vocabulary',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Days of the Week / Дни недели</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, i) => (
            <div key={i} className="bg-card border p-3 rounded text-center font-medium">{day}</div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3">Seasons / Времена года</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ['Spring', 'Весна'],
            ['Summer', 'Лето'],
            ['Autumn / Fall', 'Осень'],
            ['Winter', 'Зима']
          ].map(([eng, ru], i) => (
            <VocabCard key={i} word={eng} translation={ru} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3">Months / Месяцы</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-sm">
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m, i) => (
            <div key={i} className="bg-muted p-2 rounded text-center">{m}</div>
          ))}
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'What comes after Monday?',
      questionRu: 'Что идёт после понедельника?',
      options: ['Sunday', 'Tuesday', 'Wednesday', 'Friday'],
      correctAnswer: 1,
      explanation: 'Monday -> Tuesday.'
    },
    {
      question: 'The coldest season is ___.',
      questionRu: 'Самое холодное время года - ___.',
      options: ['Summer', 'Winter', 'Spring', 'Autumn'],
      correctAnswer: 1,
      explanation: 'Winter.'
    },
    {
      question: 'The first month of the year is ___.',
      questionRu: 'Первый месяц года - ___.',
      options: ['December', 'January', 'June', 'May'],
      correctAnswer: 1,
      explanation: 'January.'
    },
    {
      question: 'Saturday and Sunday are the ___.',
      questionRu: 'Суббота и воскресенье - это ___.',
      options: ['weekdays', 'weekend', 'month', 'year'],
      correctAnswer: 1,
      explanation: 'Weekend.'
    },
    {
      question: 'Which month is in summer?',
      questionRu: 'Какой месяц летом?',
      options: ['January', 'April', 'July', 'October'],
      correctAnswer: 2,
      explanation: 'July is a summer month.'
    },
    {
      question: 'What comes before Friday?',
      questionRu: 'Что идёт перед пятницей?',
      options: ['Thursday', 'Wednesday', 'Saturday', 'Monday'],
      correctAnswer: 0,
      explanation: 'Thursday -> Friday.'
    },
    {
      question: 'Flowers usually grow in ___.',
      questionRu: 'Цветы обычно растут ___.',
      options: ['Winter', 'Spring', 'Autumn', 'Night'],
      correctAnswer: 1,
      explanation: 'Spring.'
    },
    {
      question: 'How many days are in a week?',
      questionRu: 'Сколько дней в неделе?',
      options: ['5', '6', '7', '12'],
      correctAnswer: 2,
      explanation: '7 days.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'September is in ___.',
      questionRu: 'Сентябрь в ___.',
      options: ['Summer', 'Spring', 'Autumn', 'Winter'],
      correctAnswer: 2,
      explanation: 'Autumn (Fall).'
    },
    {
      question: 'The shortest month is ___.',
      questionRu: 'Самый короткий месяц - ___.',
      options: ['May', 'February', 'June', 'July'],
      correctAnswer: 1,
      explanation: 'February (28 or 29 days).'
    }
  ]
};
