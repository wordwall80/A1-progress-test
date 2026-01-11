import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const tellingTimeTopic: VocabularyTopic = {
  id: 'telling-time',
  title: 'Telling the Time',
  titleRu: 'Время',
  description: 'AM, PM, Quarter, Half',
  content: (
    <div className="space-y-6">
      <div className="bg-muted p-4 rounded-lg space-y-4">
        <div>
          <h3 className="font-bold mb-2">AM vs PM</h3>
          <p><strong>AM</strong>: 00:00 - 11:59 (Morning / Night) - До полудня</p>
          <p><strong>PM</strong>: 12:00 - 23:59 (Afternoon / Evening) - После полудня</p>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Phrases</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>o'clock</strong> - ровно (5:00 - five o'clock)</li>
            <li><strong>half past</strong> - половина после (5:30 - half past five)</li>
            <li><strong>quarter past</strong> - четверть после (5:15 - quarter past five)</li>
            <li><strong>quarter to</strong> - без четверти (5:45 - quarter to six)</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: '8:00 am is in the ___.',
      questionRu: '8:00 am - это ___.',
      options: ['morning', 'evening', 'night', 'afternoon'],
      correctAnswer: 0,
      explanation: 'AM = Morning.'
    },
    {
      question: '6:00 pm is in the ___.',
      questionRu: '6:00 pm - это ___.',
      options: ['morning', 'evening', 'night', 'noon'],
      correctAnswer: 1,
      explanation: 'PM = Evening.'
    },
    {
      question: 'What time is 3:30?',
      questionRu: 'Сколько времени 3:30?',
      options: ['half past three', 'half to three', 'three thirty o\'clock', 'quarter past three'],
      correctAnswer: 0,
      explanation: 'Half past three.'
    },
    {
      question: 'What time is 4:15?',
      questionRu: 'Сколько времени 4:15?',
      options: ['quarter past four', 'quarter to four', 'half past four', 'four quarter'],
      correctAnswer: 0,
      explanation: 'Quarter past four.'
    },
    {
      question: 'What time is 4:45?',
      questionRu: 'Сколько времени 4:45?',
      options: ['quarter past four', 'quarter to five', 'quarter to four', 'half past five'],
      correctAnswer: 1,
      explanation: 'Quarter to five (15 minutes to 5).'
    },
    {
      question: '12:00 pm is ___.',
      questionRu: '12:00 pm - это ___.',
      options: ['midnight', 'noon', 'morning', 'night'],
      correctAnswer: 1,
      explanation: 'Noon.'
    },
    {
      question: '12:00 am is ___.',
      questionRu: '12:00 am - это ___.',
      options: ['midnight', 'noon', 'afternoon', 'lunch'],
      correctAnswer: 0,
      explanation: 'Midnight.'
    },
    {
      question: 'It is five ___. (5:00)',
      questionRu: 'Сейчас 5:00.',
      options: ['clock', 'hours', 'o\'clock', 'time'],
      correctAnswer: 2,
      explanation: 'Five o\'clock.'
    }
  ],
  finalQuizQuestions: [
    {
      question: '2:30 is ___.',
      questionRu: '2:30 - это ___.',
      options: ['half past two', 'half past three', 'quarter past two', 'half to two'],
      correctAnswer: 0,
      explanation: 'Half past two.'
    },
    {
      question: 'Quarter to ten is ___.',
      questionRu: 'Без четверти десять - это ___.',
      options: ['9:45', '10:15', '10:45', '9:15'],
      correctAnswer: 0,
      explanation: '9:45.'
    }
  ]
};
