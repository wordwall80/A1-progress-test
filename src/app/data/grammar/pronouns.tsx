import { GrammarTopic } from '../types';
import React from 'react';

export const pronounsTopic: GrammarTopic = {
  id: 'pronouns',
  title: 'Personal Pronouns',
  titleRu: 'Личные местоимения',
  description: 'I, you, he, she, it, we, they',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Subject Pronouns / Подлежащие местоимения</h3>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p><strong>I</strong> - Я</p>
          <p><strong>You</strong> - Ты, Вы</p>
          <p><strong>He</strong> - Он</p>
          <p><strong>She</strong> - Она</p>
          <p><strong>It</strong> - Оно, это</p>
          <p><strong>We</strong> - Мы</p>
          <p><strong>They</strong> - Они</p>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Object Pronouns / Дополнительные местоимения</h3>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p><strong>me</strong> - меня, мне</p>
          <p><strong>you</strong> - тебя, тебе, вас, вам</p>
          <p><strong>him</strong> - его, ему</p>
          <p><strong>her</strong> - её, ей</p>
          <p><strong>it</strong> - его, ему, её, ей</p>
          <p><strong>us</strong> - нас, нам</p>
          <p><strong>them</strong> - их, им</p>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: '___ am from Moscow.',
      questionRu: 'Я из Москвы.',
      options: ['I', 'You', 'He', 'She'],
      correctAnswer: 0,
      explanation: '"I" means "Я".'
    },
    {
      question: 'This is my sister. ___ is a teacher.',
      questionRu: 'Это моя сестра. Она учительница.',
      options: ['He', 'She', 'It', 'They'],
      correctAnswer: 1,
      explanation: 'Use "she" for females.'
    },
    {
      question: 'My parents are here. ___ are happy.',
      questionRu: 'Мои родители здесь. Они счастливы.',
      options: ['He', 'She', 'We', 'They'],
      correctAnswer: 3,
      explanation: 'Use "they" for plural.'
    },
    {
      question: 'Please help ___.',
      questionRu: 'Пожалуйста, помоги мне.',
      options: ['I', 'me', 'my', 'mine'],
      correctAnswer: 1,
      explanation: 'Use "me" after verbs (object pronoun).'
    },
    {
      question: 'I like ___.',
      questionRu: 'Мне нравится она.',
      options: ['she', 'her', 'hers', 'she\'s'],
      correctAnswer: 1,
      explanation: 'Use "her" after verbs.'
    },
    {
      question: 'Where is John? I can\'t see ___.',
      questionRu: 'Где Джон? Я его не вижу.',
      options: ['he', 'him', 'his', 'it'],
      correctAnswer: 1,
      explanation: 'Use "him" for males (object).'
    },
    {
      question: '___ are hungry.',
      questionRu: 'Мы голодны.',
      options: ['We', 'Us', 'Our', 'They'],
      correctAnswer: 0,
      explanation: 'Subject "We".'
    },
    {
      question: 'Give it to ___.',
      questionRu: 'Дай это нам.',
      options: ['we', 'us', 'our', 'they'],
      correctAnswer: 1,
      explanation: 'Object "us".'
    }
  ],
  finalQuizQuestions: [
    {
      question: '___ is a good day.',
      questionRu: 'Это хороший день.',
      options: ['He', 'She', 'It', 'They'],
      correctAnswer: 2,
      explanation: 'Use "It" for days/weather/things.'
    },
    {
      question: 'Look at ___.',
      questionRu: 'Посмотри на них.',
      options: ['they', 'them', 'their', 'we'],
      correctAnswer: 1,
      explanation: 'Object "them".'
    }
  ]
};
