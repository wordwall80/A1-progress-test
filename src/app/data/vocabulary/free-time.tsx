import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const freeTimeTopic: VocabularyTopic = {
  id: 'free-time',
  title: 'Free Time',
  titleRu: 'Свободное время',
  description: 'Hobbies and activities',
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          ['relax', 'отдыхать'],
          ['stay at home', 'оставаться дома'],
          ['meet friends', 'встречаться с друзьями'],
          ['go out', 'гулять / выходить в свет'],
          ['go to the movies', 'ходить в кино'],
          ['go to the beach', 'ходить на пляж'],
          ['travel', 'путешествовать'],
          ['hike in the mountains', 'ходить в поход в горы'],
          ['exercise', 'заниматься спортом'],
          ['swim', 'плавать'],
          ['play computer games', 'играть в компьютерные игры'],
          ['book tickets', 'бронировать билеты']
        ].map(([eng, ru], i) => (
          <VocabCard key={i} word={eng} translation={ru} />
        ))}
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I like to ___ in the sea.',
      questionRu: 'Я люблю плавать в море.',
      options: ['swim', 'run', 'hike', 'fly'],
      correctAnswer: 0,
      explanation: 'Swim.'
    },
    {
      question: 'We usually ___ on Fridays.',
      questionRu: 'Мы обычно встречаемся с друзьями по пятницам.',
      options: ['meet friends', 'stay home', 'sleep', 'work'],
      correctAnswer: 0,
      explanation: 'Meet friends.'
    },
    {
      question: 'I don\'t want to go out. I will ___.',
      questionRu: 'Я не хочу никуда идти. Я останусь дома.',
      options: ['travel', 'stay at home', 'hike', 'swim'],
      correctAnswer: 1,
      explanation: 'Stay at home.'
    },
    {
      question: 'We need to ___ for the concert.',
      questionRu: 'Нам нужно забронировать билеты на концерт.',
      options: ['buy books', 'book tickets', 'make paper', 'do tickets'],
      correctAnswer: 1,
      explanation: 'Book tickets.'
    },
    {
      question: 'He plays ___ all day.',
      questionRu: 'Он играет в компьютерные игры весь день.',
      options: ['computer games', 'piano', 'tennis', 'football'],
      correctAnswer: 0,
      explanation: 'Computer games.'
    },
    {
      question: 'I want to ___ to Spain.',
      questionRu: 'Я хочу поехать (путешествовать) в Испанию.',
      options: ['travel', 'hike', 'swim', 'stay'],
      correctAnswer: 0,
      explanation: 'Travel.'
    },
    {
      question: 'Let\'s go to the ___ to watch a film.',
      questionRu: 'Давай пойдём в кино, чтобы посмотреть фильм.',
      options: ['movies', 'beach', 'mountains', 'park'],
      correctAnswer: 0,
      explanation: 'Movies / Cinema.'
    },
    {
      question: 'She likes to ___ in the gym.',
      questionRu: 'Она любит заниматься в зале.',
      options: ['exercise', 'relax', 'sleep', 'eat'],
      correctAnswer: 0,
      explanation: 'Exercise.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'We walked up high. We ___ in the mountains.',
      questionRu: 'Мы ходили высоко. Мы ходили в поход в горы.',
      options: ['swam', 'hiked', 'played', 'stayed'],
      correctAnswer: 1,
      explanation: 'Hiked.'
    },
    {
      question: 'I am tired. I need to ___.',
      questionRu: 'Я устал. Мне нужно отдохнуть.',
      options: ['relax', 'exercise', 'work', 'run'],
      correctAnswer: 0,
      explanation: 'Relax.'
    }
  ]
};
