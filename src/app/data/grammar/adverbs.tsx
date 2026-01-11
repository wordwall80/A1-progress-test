import { GrammarTopic } from '../types';
import React from 'react';

export const adverbsTopic: GrammarTopic = {
  id: 'adverbs-frequency',
  title: 'Adverbs of Frequency',
  titleRu: 'Наречия частоты',
  description: 'Always, usually, often, sometimes, never',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Frequency Adverbs / Наречия частоты</h3>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <div className="flex justify-between"><span><strong>Always</strong></span> <span>Всегда (100%)</span></div>
          <div className="flex justify-between"><span><strong>Usually</strong></span> <span>Обычно (80%)</span></div>
          <div className="flex justify-between"><span><strong>Often</strong></span> <span>Часто (60%)</span></div>
          <div className="flex justify-between"><span><strong>Sometimes</strong></span> <span>Иногда (50%)</span></div>
          <div className="flex justify-between"><span><strong>Rarely</strong></span> <span>Редко (10%)</span></div>
          <div className="flex justify-between"><span><strong>Hardly ever</strong></span> <span>Почти никогда (5%)</span></div>
          <div className="flex justify-between"><span><strong>Never</strong></span> <span>Никогда (0%)</span></div>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Word Order / Порядок слов</h3>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>1. Before the main verb / Перед основным глаголом:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>I <strong>always</strong> get up at 7. (Я всегда встаю в 7.)</li>
            <li>She <strong>never</strong> eats meat. (Она никогда не ест мясо.)</li>
          </ul>
          
          <p className="mt-3"><strong>2. After the verb "to be" / После глагола "be" (am, is, are):</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>He is <strong>always</strong> happy. (Он всегда счастлив.)</li>
            <li>They are <strong>never</strong> late. (Они никогда не опаздывают.)</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I ___ drink coffee in the morning.',
      questionRu: 'Я обычно пью кофе по утрам.',
      options: ['usual', 'usually', 'am usually', 'use to'],
      correctAnswer: 1,
      explanation: 'Adverbs of frequency go before the main verb.'
    },
    {
      question: 'She ___ late for class.',
      questionRu: 'Она никогда не опаздывает на урок.',
      options: ['never is', 'is never', 'never', 'not never'],
      correctAnswer: 1,
      explanation: 'Adverbs go AFTER the verb "to be" (is never).'
    },
    {
      question: 'We ___ go to the park on Sundays.',
      questionRu: 'Мы часто ходим в парк по воскресеньям.',
      options: ['often', 'are often', 'often are', 'do often'],
      correctAnswer: 0,
      explanation: 'Goes before the main verb "go".'
    },
    {
      question: 'He ___ listens to rock music.',
      questionRu: 'Он иногда слушает рок-музыку.',
      options: ['sometime', 'sometimes', 'is sometimes', 'does sometimes'],
      correctAnswer: 1,
      explanation: '"Sometimes" goes before "listens".'
    },
    {
      question: '___ eat breakfast?',
      questionRu: 'Ты всегда завтракаешь?',
      options: ['Do you always', 'Always do you', 'You always', 'Are you always'],
      correctAnswer: 0,
      explanation: 'Question order: Do/Does + Subject + Adverb + Verb.'
    },
    {
      question: 'I ___ see him.',
      questionRu: 'Я почти никогда его не вижу.',
      options: ['hardly', 'ever hardly', 'hardly ever', 'hardly never'],
      correctAnswer: 2,
      explanation: '"Hardly ever" means almost never.'
    },
    {
      question: 'They ___ at home in the evening.',
      questionRu: 'Они редко бывают дома вечером.',
      options: ['rarely are', 'are rarely', 'rarely', 'do rarely'],
      correctAnswer: 1,
      explanation: 'After "are" (verb to be).'
    },
    {
      question: 'My brother ___ plays video games.',
      questionRu: 'Мой брат никогда не играет в видеоигры.',
      options: ['doesn\'t never', 'never', 'is never', 'don\'t never'],
      correctAnswer: 1,
      explanation: 'Use "never" with a positive verb (English doesn\'t use double negatives like "doesn\'t never").'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'Where does "usually" go in: "I ___ go ___ to work"?',
      questionRu: 'Где стоит "usually": "I ___ go ___ to work"?',
      options: ['Before "go"', 'After "go"', 'At the end', 'At the start'],
      correctAnswer: 0,
      explanation: 'Before the main verb.'
    },
    {
      question: 'Select the correct sentence:',
      questionRu: 'Выберите правильное предложение:',
      options: ['He always is tired.', 'He is always tired.', 'Always he is tired.', 'He is tired always.'],
      correctAnswer: 1,
      explanation: 'After "is" (verb to be).'
    }
  ]
};
