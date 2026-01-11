import { GrammarTopic } from '../types';
import React from 'react';

export const imperativeTopic: GrammarTopic = {
  id: 'imperative',
  title: 'Imperative & Let\'s',
  titleRu: 'Повелительное наклонение и Let\'s',
  description: 'Orders, instructions, suggestions',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Imperatives / Повелительное наклонение</h3>
        <p className="mb-2">Used for orders, warnings, or advice.</p>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>Positive:</strong> Base verb (without "to")</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Sit</strong> down! (Садись!)</li>
            <li><strong>Open</strong> the door. (Открой дверь.)</li>
            <li><strong>Be</strong> quiet. (Тише.)</li>
          </ul>
          
          <p className="mt-3"><strong>Negative:</strong> Don't + Base verb</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Don't touch</strong> that! (Не трогай это!)</li>
            <li><strong>Don't be</strong> late. (Не опаздывай.)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Let's (Suggestions) / Предложения</h3>
        <p className="mb-2">Used to suggest doing something together (Let us).</p>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>Positive:</strong> Let's + verb</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Let's go</strong> to the cinema. (Пойдём в кино.)</li>
            <li><strong>Let's have</strong> coffee. (Давай выпьем кофе.)</li>
          </ul>
          
          <p className="mt-3"><strong>Negative:</strong> Let's not + verb</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Let's not talk</strong> about it. (Давай не будем говорить об этом.)</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: '___ down, please.',
      questionRu: 'Садитесь, пожалуйста.',
      options: ['Sits', 'Sitting', 'Sit', 'To sit'],
      correctAnswer: 2,
      explanation: 'Use the base form of the verb for imperatives.'
    },
    {
      question: '___ open the window. It is cold.',
      questionRu: 'Не открывай окно. Холодно.',
      options: ['No', 'Don\'t', 'Not', 'Doesn\'t'],
      correctAnswer: 1,
      explanation: 'Use "Don\'t" for negative imperatives.'
    },
    {
      question: '___ go for a walk!',
      questionRu: 'Пойдём гулять!',
      options: ['Let', 'Let\'s', 'Lets', 'Let is'],
      correctAnswer: 1,
      explanation: 'Use "Let\'s" (Let us) for suggestions.'
    },
    {
      question: 'Please ___ quiet.',
      questionRu: 'Пожалуйста, тише (будьте тихими).',
      options: ['be', 'are', 'is', 'to be'],
      correctAnswer: 0,
      explanation: 'Use "be" in imperatives.'
    },
    {
      question: '___ worry, everything is fine.',
      questionRu: 'Не волнуйся, всё хорошо.',
      options: ['Not', 'No', 'Don\'t', 'Isn\'t'],
      correctAnswer: 2,
      explanation: 'Negative imperative starts with "Don\'t".'
    },
    {
      question: '___ play football.',
      questionRu: 'Давай поиграем в футбол.',
      options: ['Let\'s', 'Let', 'Lets', 'Go'],
      correctAnswer: 0,
      explanation: 'Suggestion.'
    },
    {
      question: '___ your homework!',
      questionRu: 'Делай домашнюю работу!',
      options: ['Does', 'Doing', 'Do', 'To do'],
      correctAnswer: 2,
      explanation: 'Base verb.'
    },
    {
      question: '___ late!',
      questionRu: 'Не опаздывай!',
      options: ['Don\'t be', 'Not be', 'No be', 'Don\'t is'],
      correctAnswer: 0,
      explanation: 'Don\'t + be.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'Which sentence is a correct instruction?',
      questionRu: 'Какое предложение является правильной инструкцией?',
      options: ['You open the book.', 'Open the book.', 'Opens the book.', 'To open the book.'],
      correctAnswer: 1,
      explanation: 'Imperatives start with the verb.'
    },
    {
      question: '___ have lunch.',
      questionRu: 'Давай пообедаем.',
      options: ['Let\'s', 'Let', 'Lets', 'Us'],
      correctAnswer: 0,
      explanation: 'Let\'s for suggestions.'
    }
  ]
};
