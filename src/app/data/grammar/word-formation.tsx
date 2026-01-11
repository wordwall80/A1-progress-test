import { GrammarTopic } from '../types';
import React from 'react';

export const wordFormationTopic: GrammarTopic = {
  id: 'word-formation-professions',
  title: 'Word Formation: Professions',
  titleRu: 'Словообразование: Профессии',
  description: 'Verb + -er/-or, Noun + -ist/-ian',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Verb to Profession / Из глагола в профессию</h3>
        <p className="mb-2">Usually add <strong>-er</strong> or <strong>-or</strong>.</p>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p>teach (учить) → teach<strong>er</strong> (учитель)</p>
          <p>work (работать) → work<strong>er</strong> (рабочий)</p>
          <p>sing (петь) → sing<strong>er</strong> (певец)</p>
          <p>dance (танцевать) → danc<strong>er</strong> (танцор)</p>
          <p>drive (водить) → driv<strong>er</strong> (водитель)</p>
          <p>act (играть роль) → act<strong>or</strong> (актёр)</p>
          <p>visit (посещать) → visit<strong>or</strong> (посетитель)</p>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Noun to Profession / Из существительного в профессию</h3>
        <p className="mb-2">Usually add <strong>-ist</strong> or <strong>-ian</strong>.</p>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p>art (искусство) → art<strong>ist</strong> (художник)</p>
          <p>piano (пианино) → pian<strong>ist</strong> (пианист)</p>
          <p>journal (журнал) → journal<strong>ist</strong> (журналист)</p>
          <p>music (музыка) → music<strong>ian</strong> (музыкант)</p>
          <p>politics (политика) → politic<strong>ian</strong> (политик)</p>
          <p>electric (электричество) → electric<strong>ian</strong> (электрик)</p>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'A person who teaches is a ___.',
      questionRu: 'Тот, кто учит, это ___.',
      options: ['teachist', 'teachian', 'teacher', 'teachor'],
      correctAnswer: 2,
      explanation: 'Verb + er: teach -> teacher.'
    },
    {
      question: 'A person who acts is an ___.',
      questionRu: 'Тот, кто играет роли, это ___.',
      options: ['acter', 'actor', 'actist', 'actian'],
      correctAnswer: 1,
      explanation: 'Verb + or: act -> actor.'
    },
    {
      question: 'Someone who plays music is a ___.',
      questionRu: 'Тот, кто играет музыку, это ___.',
      options: ['musicer', 'musicor', 'musician', 'musicist'],
      correctAnswer: 2,
      explanation: 'Noun + ian: music -> musician.'
    },
    {
      question: 'A person who paints art is an ___.',
      questionRu: 'Тот, кто занимается искусством, это ___.',
      options: ['arter', 'artor', 'artist', 'artian'],
      correctAnswer: 2,
      explanation: 'Noun + ist: art -> artist.'
    },
    {
      question: 'A person who drives is a ___.',
      questionRu: 'Тот, кто водит, это ___.',
      options: ['drive', 'driver', 'drivist', 'drivor'],
      correctAnswer: 1,
      explanation: 'Verb + er: drive -> driver.'
    },
    {
      question: 'He plays the piano. He is a ___.',
      questionRu: 'Он играет на пианино. Он ___.',
      options: ['pianoer', 'pianoist', 'pianist', 'pianor'],
      correctAnswer: 2,
      explanation: 'Noun + ist: piano -> pianist.'
    },
    {
      question: 'She writes for a journal. She is a ___.',
      questionRu: 'Она пишет для журнала. Она ___.',
      options: ['journaler', 'journalor', 'journalist', 'journalian'],
      correctAnswer: 2,
      explanation: 'Noun + ist: journal -> journalist.'
    },
    {
      question: 'A person who sings is a ___.',
      questionRu: 'Тот, кто поёт, это ___.',
      options: ['singist', 'singor', 'singer', 'singian'],
      correctAnswer: 2,
      explanation: 'Verb + er: sing -> singer.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'A visitor is someone who ___.',
      questionRu: 'Посетитель - это тот, кто ___.',
      options: ['visits', 'visits', 'visited', 'visiting'],
      correctAnswer: 0,
      explanation: 'Visit -> Visitor.'
    },
    {
      question: 'An electrician works with ___.',
      questionRu: 'Электрик работает с ___.',
      options: ['art', 'music', 'electricity', 'cars'],
      correctAnswer: 2,
      explanation: 'Electric -> Electrician.'
    }
  ]
};
