import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const numbersTopic: VocabularyTopic = {
  id: 'numbers',
  title: 'Numbers',
  titleRu: 'Числа',
  description: '0-100 and basic counting',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Numbers 0-20</h3>
        <p className="text-sm text-muted-foreground mb-3">Click on any card to hear the pronunciation</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ['zero', 'ноль'],
            ['one', 'один'],
            ['two', 'два'],
            ['three', 'три'],
            ['four', 'четыре'],
            ['five', 'пять'],
            ['six', 'шесть'],
            ['seven', 'семь'],
            ['eight', 'восемь'],
            ['nine', 'девять'],
            ['ten', 'десять'],
            ['eleven', 'одиннадцать'],
            ['twelve', 'двенадцать'],
            ['thirteen', 'тринадцать'],
            ['fourteen', 'четырнадцать'],
            ['fifteen', 'пятнадцать'],
            ['sixteen', 'шестнадцать'],
            ['seventeen', 'семнадцать'],
            ['eighteen', 'восемнадцать'],
            ['nineteen', 'девятнадцать'],
            ['twenty', 'двадцать']
          ].map(([num, ru], i) => (
            <VocabCard key={i} word={num} translation={ru} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3">Tens (Десятки)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            ['thirty', 'тридцать'],
            ['forty', 'сорок'],
            ['fifty', 'пятьдесят'],
            ['sixty', 'шестьдесят'],
            ['seventy', 'семьдесят'],
            ['eighty', 'восемьдесят'],
            ['ninety', 'девяносто'],
            ['one hundred', 'сто']
          ].map(([num, ru], i) => (
            <VocabCard key={i} word={num} translation={ru} />
          ))}
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'How do you say "5" in English?',
      questionRu: 'Как сказать "5" по-английски?',
      options: ['four', 'five', 'six', 'seven'],
      correctAnswer: 1,
      explanation: '5 = five'
    },
    {
      question: 'What number is "thirteen"?',
      questionRu: 'Какое число "thirteen"?',
      options: ['3', '13', '30', '31'],
      correctAnswer: 1,
      explanation: 'Thirteen = 13'
    },
    {
      question: 'How do you say "20" in English?',
      questionRu: 'Как сказать "20" по-английски?',
      options: ['twelve', 'twenty', 'two', 'tenth'],
      correctAnswer: 1,
      explanation: '20 = twenty'
    },
    {
      question: '50 in English is:',
      questionRu: '50 по-английски:',
      options: ['fifteen', 'fourteen', 'fifty', 'fifth'],
      correctAnswer: 2,
      explanation: '50 = fifty'
    },
    {
      question: 'What comes after "eight"?',
      questionRu: 'Что идёт после "eight"?',
      options: ['seven', 'nine', 'ten', 'six'],
      correctAnswer: 1,
      explanation: 'Eight (8) → Nine (9)'
    },
    {
      question: '100 is ___.',
      questionRu: '100 - это ___.',
      options: ['ten', 'hundred', 'one hundred', 'thousand'],
      correctAnswer: 2,
      explanation: '100 = one hundred'
    },
    {
      question: '11 is ___.',
      questionRu: '11 - это ___.',
      options: ['eleven', 'twelve', 'one one', 'ten one'],
      correctAnswer: 0,
      explanation: '11 = eleven'
    },
    {
      question: '30 is ___.',
      questionRu: '30 - это ___.',
      options: ['thirteen', 'three', 'thirty', 'third'],
      correctAnswer: 2,
      explanation: '30 = thirty'
    }
  ],
  finalQuizQuestions: [
    {
      question: '12 is ___.',
      questionRu: '12 - это ___.',
      options: ['twenty', 'twelve', 'two', 'tenth'],
      correctAnswer: 1,
      explanation: '12 = twelve'
    },
    {
      question: '40 is ___.',
      questionRu: '40 - это ___.',
      options: ['four', 'fourteen', 'forty', 'fourth'],
      correctAnswer: 2,
      explanation: '40 = forty'
    }
  ]
};
