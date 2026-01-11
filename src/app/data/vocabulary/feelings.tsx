import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const feelingsTopic: VocabularyTopic = {
  id: 'feelings',
  title: 'Feelings & Emotions',
  titleRu: 'Чувства и эмоции',
  description: 'Happy, sad, tired, hungry...',
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          ['happy / glad / joyful', 'счастливый / радостный'],
          ['sad', 'грустный'],
          ['angry / furious', 'злой / яростный'],
          ['tired', 'уставший'],
          ['hungry', 'голодный'],
          ['thirsty', 'хочет пить (жаждущий)'],
          ['worried', 'взволнованный (беспокоящийся)'],
          ['bored', 'скучающий'],
          ['scared / frightened', 'испуганный'],
          ['stressed', 'в стрессе'],
          ['relaxed', 'расслабленный'],
          ['cold', 'замёрзший (мне холодно)'],
          ['hot', 'распаренный (мне жарко)']
        ].map(([eng, ru], i) => (
          <VocabCard key={i} word={eng} translation={ru} />
        ))}
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I want to eat. I am ___.',
      questionRu: 'Я хочу есть. Я голоден.',
      options: ['thirsty', 'hungry', 'angry', 'tired'],
      correctAnswer: 1,
      explanation: 'Hungry.'
    },
    {
      question: 'I need water. I am ___.',
      questionRu: 'Мне нужна вода. Я хочу пить.',
      options: ['hungry', 'thirsty', 'sad', 'happy'],
      correctAnswer: 1,
      explanation: 'Thirsty.'
    },
    {
      question: 'She worked for 12 hours. She is ___.',
      questionRu: 'Она работала 12 часов. Она устала.',
      options: ['bored', 'tired', 'happy', 'fresh'],
      correctAnswer: 1,
      explanation: 'Tired.'
    },
    {
      question: 'He smiles a lot. He is ___.',
      questionRu: 'Он много улыбается. Он счастлив.',
      options: ['sad', 'angry', 'happy', 'worried'],
      correctAnswer: 2,
      explanation: 'Happy.'
    },
    {
      question: 'I have nothing to do. I am ___.',
      questionRu: 'Мне нечего делать. Мне скучно.',
      options: ['stressed', 'bored', 'scared', 'hungry'],
      correctAnswer: 1,
      explanation: 'Bored.'
    },
    {
      question: 'She saw a ghost. She is ___.',
      questionRu: 'Она увидела призрака. Она испугана.',
      options: ['frightened', 'bored', 'happy', 'tired'],
      correctAnswer: 0,
      explanation: 'Frightened / Scared.'
    },
    {
      question: 'Someone stole my wallet. I am ___.',
      questionRu: 'Кто-то украл мой кошелёк. Я зол.',
      options: ['happy', 'angry', 'relaxed', 'thirsty'],
      correctAnswer: 1,
      explanation: 'Angry.'
    },
    {
      question: 'I am on vacation. I feel ___.',
      questionRu: 'Я в отпуске. Я чувствую себя расслабленным.',
      options: ['stressed', 'relaxed', 'angry', 'sad'],
      correctAnswer: 1,
      explanation: 'Relaxed.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'I have an exam tomorrow. I am ___.',
      questionRu: 'Завтра экзамен. Я волнуюсь.',
      options: ['happy', 'worried', 'hungry', 'bored'],
      correctAnswer: 1,
      explanation: 'Worried / Nervous.'
    },
    {
      question: 'It is snowing. I am ___.',
      questionRu: 'Идёт снег. Мне холодно.',
      options: ['hot', 'cold', 'warm', 'thirsty'],
      correctAnswer: 1,
      explanation: 'Cold.'
    }
  ]
};
