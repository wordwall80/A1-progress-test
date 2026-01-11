import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const musicTopic: VocabularyTopic = {
  id: 'music',
  title: 'Music',
  titleRu: 'Музыка',
  description: 'Genres and Instruments',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Genres / Жанры</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            ['Rock', 'Рок'],
            ['Pop', 'Поп-музыка'],
            ['Jazz', 'Джаз'],
            ['Classical', 'Классическая музыка'],
            ['Hip Hop / Rap', 'Хип-хоп / Рэп']
          ].map(([eng, ru], i) => (
            <VocabCard key={i} word={eng} translation={ru} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3">Instruments / Инструменты</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            ['Guitar', 'Гитара'],
            ['Piano', 'Пианино / Фортепиано'],
            ['Drums', 'Барабаны'],
            ['Violin', 'Скрипка']
          ].map(([eng, ru], i) => (
            <VocabCard key={i} word={eng} translation={ru} />
          ))}
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'Mozart wrote ___ music.',
      questionRu: 'Моцарт писал классическую музыку.',
      options: ['rock', 'pop', 'classical', 'jazz'],
      correctAnswer: 2,
      explanation: 'Classical.'
    },
    {
      question: 'You play this with sticks.',
      questionRu: 'На этом играют палочками.',
      options: ['guitar', 'drums', 'piano', 'violin'],
      correctAnswer: 1,
      explanation: 'Drums.'
    },
    {
      question: 'This instrument has black and white keys.',
      questionRu: 'У этого инструмента чёрные и белые клавиши.',
      options: ['guitar', 'violin', 'piano', 'drums'],
      correctAnswer: 2,
      explanation: 'Piano.'
    },
    {
      question: 'The Beatles played ___ music.',
      questionRu: 'Битлз играли рок-музыку.',
      options: ['classical', 'rock', 'hip hop', 'jazz'],
      correctAnswer: 1,
      explanation: 'Rock.'
    },
    {
      question: 'This instrument has 6 strings.',
      questionRu: 'У этого инструмента 6 струн.',
      options: ['piano', 'drums', 'guitar', 'flute'],
      correctAnswer: 2,
      explanation: 'Guitar.'
    },
    {
      question: 'Louis Armstrong played ___.',
      questionRu: 'Луи Армстронг играл джаз.',
      options: ['jazz', 'pop', 'rap', 'rock'],
      correctAnswer: 0,
      explanation: 'Jazz.'
    },
    {
      question: 'Eminem performs ___ music.',
      questionRu: 'Эминем исполняет рэп.',
      options: ['classical', 'country', 'rap', 'opera'],
      correctAnswer: 2,
      explanation: 'Rap / Hip Hop.'
    },
    {
      question: 'You put this under your chin to play.',
      questionRu: 'Вы кладёте это под подбородок, чтобы играть.',
      options: ['guitar', 'violin', 'drums', 'piano'],
      correctAnswer: 1,
      explanation: 'Violin.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'A person who plays music is a ___.',
      questionRu: 'Тот, кто играет музыку, это ___.',
      options: ['musicer', 'musician', 'artist', 'player'],
      correctAnswer: 1,
      explanation: 'Musician.'
    },
    {
      question: 'Michael Jackson is the King of ___.',
      questionRu: 'Майкл Джексон - король поп-музыки.',
      options: ['Rock', 'Jazz', 'Pop', 'Metal'],
      correctAnswer: 2,
      explanation: 'Pop.'
    }
  ]
};
