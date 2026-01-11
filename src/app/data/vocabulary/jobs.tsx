import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const jobsTopic: VocabularyTopic = {
  id: 'jobs',
  title: 'Jobs & Work',
  titleRu: 'Работа и профессии',
  description: 'Professions and work status',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Professions / Профессии</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            ['Doctor', 'Врач'],
            ['Teacher', 'Учитель'],
            ['Administrator', 'Администратор'],
            ['Student', 'Студент'],
            ['Engineer', 'Инженер'],
            ['Driver', 'Водитель']
          ].map(([eng, ru], i) => (
            <VocabCard key={i} word={eng} translation={ru} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3">Status / Статус</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            ['Retired', 'На пенсии'],
            ['Unemployed', 'Безработный'],
            ['Full-time mom', 'Мама в декрете (домохозяйка)'],
            ['On maternity leave', 'В декретном отпуске']
          ].map(([eng, ru], i) => (
            <VocabCard key={i} word={eng} translation={ru} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3">Phrases / Фразы</h3>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p><strong>I work as a...</strong> (Я работаю кем-то)</p>
          <p><strong>I work for...</strong> (Я работаю на компанию)</p>
          <p><strong>I work in...</strong> (Я работаю в месте/отделе)</p>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'He is 65 and does not work. He is ___.',
      questionRu: 'Ему 65 и он не работает. Он на пенсии.',
      options: ['student', 'retired', 'unemployed', 'lazy'],
      correctAnswer: 1,
      explanation: 'Retired.'
    },
    {
      question: 'She has a baby and stays at home. She is on ___.',
      questionRu: 'У неё ребёнок и она дома. Она в декрете.',
      options: ['holiday', 'maternity leave', 'work', 'retirement'],
      correctAnswer: 1,
      explanation: 'Maternity leave.'
    },
    {
      question: 'I work ___ a doctor.',
      questionRu: 'Я работаю врачом.',
      options: ['as', 'like', 'for', 'in'],
      correctAnswer: 0,
      explanation: 'Work as a [job].'
    },
    {
      question: 'He works ___ Google.',
      questionRu: 'Он работает в Google (на компанию).',
      options: ['as', 'for', 'to', 'by'],
      correctAnswer: 1,
      explanation: 'Work for [company].'
    },
    {
      question: 'She works ___ a hospital.',
      questionRu: 'Она работает в больнице.',
      options: ['on', 'in', 'as', 'for'],
      correctAnswer: 1,
      explanation: 'Work in [place].'
    },
    {
      question: 'He has no job. He is ___.',
      questionRu: 'У него нет работы. Он безработный.',
      options: ['retired', 'student', 'unemployed', 'free'],
      correctAnswer: 2,
      explanation: 'Unemployed.'
    },
    {
      question: 'Someone who organizes things is an ___.',
      questionRu: 'Тот, кто организует вещи - администратор.',
      options: ['actor', 'administrator', 'artist', 'driver'],
      correctAnswer: 1,
      explanation: 'Administrator.'
    },
    {
      question: 'I study at university. I am a ___.',
      questionRu: 'Я учусь в университете. Я студент.',
      options: ['student', 'teacher', 'worker', 'child'],
      correctAnswer: 0,
      explanation: 'Student.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'A full-time ___ takes care of children.',
      questionRu: 'Мама на полную ставку заботится о детях.',
      options: ['job', 'mom', 'nurse', 'work'],
      correctAnswer: 1,
      explanation: 'Full-time mom.'
    },
    {
      question: 'Drivers work with ___.',
      questionRu: 'Водители работают с ___.',
      options: ['computers', 'cars', 'food', 'books'],
      correctAnswer: 1,
      explanation: 'Cars/Vehicles.'
    }
  ]
};
