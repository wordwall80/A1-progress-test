import { VocabularyTopic } from '../types';
import { VocabCard } from '../../components/vocab-card';
import React from 'react';

export const foodTopic: VocabularyTopic = {
  id: 'food',
  title: 'Food & Drinks',
  titleRu: 'Еда и напитки',
  description: 'Basics and Cafe phrases',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Food & Drinks / Еда и напитки</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            ['water', 'вода'],
            ['coffee', 'кофе'],
            ['tea', 'чай'],
            ['bread', 'хлеб'],
            ['cheese', 'сыр'],
            ['meat', 'мясо'],
            ['chicken', 'курица'],
            ['fish', 'рыба'],
            ['vegetables', 'овощи'],
            ['fruit', 'фрукты'],
            ['apple', 'яблоко'],
            ['banana', 'банан'],
            ['sandwich', 'бутерброд / сэндвич'],
            ['salad', 'салат'],
            ['soup', 'суп']
          ].map(([eng, ru], i) => (
            <VocabCard key={i} word={eng} translation={ru} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3">At the Cafe / В кафе</h3>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p><strong>Can I have a Latte?</strong> (Можно мне Латте?)</p>
          <p><strong>What size?</strong> (Какой размер?)</p>
          <p><strong>Small / Medium / Large</strong> (Мал / Сред / Бол)</p>
          <p><strong>Here or to-go?</strong> (Здесь или с собой?)</p>
          <p><strong>That’s it.</strong> (Это всё.)</p>
          <p><strong>How much is it?</strong> (Сколько это стоит?)</p>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I drink ___ in the morning.',
      questionRu: 'Я пью кофе утром.',
      options: ['bread', 'coffee', 'cheese', 'meat'],
      correctAnswer: 1,
      explanation: 'Coffee is a drink.'
    },
    {
      question: '___ is a fruit.',
      questionRu: 'Яблоко - это фрукт.',
      options: ['Potato', 'Carrot', 'Apple', 'Chicken'],
      correctAnswer: 2,
      explanation: 'Apple.'
    },
    {
      question: 'Vegetarians do not eat ___.',
      questionRu: 'Вегетарианцы не едят мясо.',
      options: ['vegetables', 'fruit', 'bread', 'meat'],
      correctAnswer: 3,
      explanation: 'Meat.'
    },
    {
      question: 'Can I have a ___ of water?',
      questionRu: 'Можно мне стакан воды?',
      options: ['plate', 'glass', 'piece', 'slice'],
      correctAnswer: 1,
      explanation: 'Glass of water.'
    },
    {
      question: '"To-go" means:',
      questionRu: '"To-go" означает:',
      options: ['Eat here', 'Take away', 'Pay now', 'Sit down'],
      correctAnswer: 1,
      explanation: 'Take away / с собой.'
    },
    {
      question: 'I would like a cheese ___.',
      questionRu: 'Я бы хотел бутерброд с сыром.',
      options: ['sandwich', 'soup', 'coffee', 'water'],
      correctAnswer: 0,
      explanation: 'Sandwich.'
    },
    {
      question: 'What ___ would you like? Small or Large?',
      questionRu: 'Какой размер вы хотите?',
      options: ['color', 'time', 'size', 'price'],
      correctAnswer: 2,
      explanation: 'Size.'
    },
    {
      question: '___ or to-go?',
      questionRu: 'Здесь или с собой?',
      options: ['There', 'Here', 'Where', 'Near'],
      correctAnswer: 1,
      explanation: 'Here.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'Chicken and beef are types of ___.',
      questionRu: 'Курица и говядина - это виды ___.',
      options: ['fruit', 'vegetables', 'meat', 'drink'],
      correctAnswer: 2,
      explanation: 'Meat.'
    },
    {
      question: '___ comes from cows.',
      questionRu: 'Молоко дают коровы.',
      options: ['Milk', 'Juice', 'Tea', 'Coffee'],
      correctAnswer: 0,
      explanation: 'Milk (added context implicitly).'
    }
  ]
};
