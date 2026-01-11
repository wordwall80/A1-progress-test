import { GrammarTopic } from '../types';
import React from 'react';

export const verbsIngTopic: GrammarTopic = {
  id: 'verbs-ing',
  title: 'Verbs + -ing',
  titleRu: 'Глаголы с -ing',
  description: 'Like, love, hate, enjoy...',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Verbs followed by -ing / Глаголы, требующие -ing</h3>
        <p className="mb-2">After these verbs, use the <strong>-ing form</strong> (Gerund).</p>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <div className="flex justify-between"><span><strong>love</strong></span> <span>любить / обожать</span></div>
          <div className="flex justify-between"><span><strong>like</strong></span> <span>нравиться</span></div>
          <div className="flex justify-between"><span><strong>enjoy</strong></span> <span>наслаждаться</span></div>
          <div className="flex justify-between"><span><strong>don't mind</strong></span> <span>не возражать / быть не против</span></div>
          <div className="flex justify-between"><span><strong>hate</strong></span> <span>ненавидеть</span></div>
          <div className="flex justify-between"><span><strong>can't stand</strong></span> <span>терпеть не могу</span></div>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Examples / Примеры</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>I <strong>love reading</strong> books. (Я обожаю читать книги.)</li>
          <li>She <strong>enjoys dancing</strong>. (Ей нравится танцевать.)</li>
          <li>He <strong>hates getting</strong> up early. (Он ненавидит вставать рано.)</li>
          <li>We <strong>don't mind walking</strong>. (Мы не против прогуляться.)</li>
        </ul>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I like ___ tennis.',
      questionRu: 'Мне нравится играть в теннис.',
      options: ['play', 'playing', 'to play', 'plays'],
      correctAnswer: 1,
      explanation: 'like + -ing.'
    },
    {
      question: 'She hates ___ the dishes.',
      questionRu: 'Она ненавидит мыть посуду.',
      options: ['wash', 'washing', 'to washing', 'washed'],
      correctAnswer: 1,
      explanation: 'hate + -ing.'
    },
    {
      question: 'Do you enjoy ___?',
      questionRu: 'Тебе нравится готовить?',
      options: ['cook', 'cooking', 'to cook', 'cooked'],
      correctAnswer: 1,
      explanation: 'enjoy + -ing.'
    },
    {
      question: 'I can\'t stand ___ in line.',
      questionRu: 'Я терпеть не могу стоять в очереди.',
      options: ['wait', 'waits', 'waiting', 'to wait'],
      correctAnswer: 2,
      explanation: 'can\'t stand + -ing.'
    },
    {
      question: 'He doesn\'t mind ___ late.',
      questionRu: 'Он не против работать поздно.',
      options: ['work', 'to work', 'working', 'works'],
      correctAnswer: 2,
      explanation: 'doesn\'t mind + -ing.'
    },
    {
      question: 'We love ___ to music.',
      questionRu: 'Мы обожаем слушать музыку.',
      options: ['listen', 'listening', 'listened', 'to listening'],
      correctAnswer: 1,
      explanation: 'love + -ing.'
    },
    {
      question: 'Stop ___!',
      questionRu: 'Перестань разговаривать!',
      options: ['talk', 'talking', 'to talk', 'talked'],
      correctAnswer: 1,
      explanation: 'stop + -ing (when ceasing an action).'
    },
    {
      question: 'I prefer ___ tea.',
      questionRu: 'Я предпочитаю пить чай.',
      options: ['drink', 'drinking', 'to drinking', 'drank'],
      correctAnswer: 1,
      explanation: 'prefer + -ing (mostly).'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'She likes ___ TV.',
      questionRu: 'Она любит смотреть телевизор.',
      options: ['watch', 'watching', 'watches', 'watched'],
      correctAnswer: 1,
      explanation: 'like + -ing.'
    },
    {
      question: 'They enjoy ___ football.',
      questionRu: 'Им нравится играть в футбол.',
      options: ['play', 'to play', 'playing', 'played'],
      correctAnswer: 2,
      explanation: 'enjoy + -ing.'
    }
  ]
};
