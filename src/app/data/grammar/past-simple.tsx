import { GrammarTopic } from '../types';
import React from 'react';

export const pastSimpleTopic: GrammarTopic = {
  id: 'past-simple',
  title: 'Past Simple',
  titleRu: 'Простое прошедшее время',
  description: 'Was/Were, Regular Verbs, Questions',
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3">Verb "To Be" (Was/Were) / Глагол "быть" в прошлом</h3>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>I / He / She / It was</strong></p>
              <p className="text-sm text-muted-foreground">Я был / Он был...</p>
            </div>
            <div>
              <p><strong>We / You / They were</strong></p>
              <p className="text-sm text-muted-foreground">Мы были / Вы были...</p>
            </div>
          </div>
          <p className="mt-2 text-sm"><strong>Negative:</strong> wasn't / weren't</p>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Regular Verbs / Правильные глаголы</h3>
        <p className="mb-2">Add <strong>-ed</strong> to the verb.</p>
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p>work → work<strong>ed</strong></p>
          <p>play → play<strong>ed</strong></p>
          <p>live → live<strong>d</strong> (just add -d)</p>
          <p>study → stud<strong>ied</strong> (y → ied)</p>
          <p>stop → stop<strong>p</strong>ed (double consonant)</p>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Negatives & Questions / Отрицание и вопросы</h3>
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <p><strong>Negative:</strong> didn't + base verb</p>
          <ul className="list-disc list-inside ml-4">
            <li>I <strong>didn't watch</strong> TV. (NOT didn't watched)</li>
          </ul>
          
          <p className="mt-3"><strong>Question:</strong> Did + subject + base verb?</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Did</strong> you <strong>like</strong> the movie?</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  questions: [
    {
      question: 'I ___ at home yesterday.',
      questionRu: 'Я был дома вчера.',
      options: ['am', 'were', 'was', 'be'],
      correctAnswer: 2,
      explanation: 'Use "was" with "I" in the past.'
    },
    {
      question: 'They ___ happy with the result.',
      questionRu: 'Они не были довольны результатом.',
      options: ['wasn\'t', 'weren\'t', 'not were', 'didn\'t'],
      correctAnswer: 1,
      explanation: 'Use "weren\'t" (were not) with "they".'
    },
    {
      question: 'She ___ football last week.',
      questionRu: 'Она играла в футбол на прошлой неделе.',
      options: ['played', 'plaied', 'playd', 'playing'],
      correctAnswer: 0,
      explanation: 'Regular verb: add -ed.'
    },
    {
      question: 'We ___ in London in 2010.',
      questionRu: 'Мы жили в Лондоне в 2010.',
      options: ['livved', 'lived', 'liveed', 'live'],
      correctAnswer: 1,
      explanation: 'Live → lived.'
    },
    {
      question: 'He ___ go to school yesterday.',
      questionRu: 'Он не ходил в школу вчера.',
      options: ['didn\'t went', 'didn\'t go', 'not went', 'wasn\'t go'],
      correctAnswer: 1,
      explanation: 'Use "didn\'t" + base verb (go).'
    },
    {
      question: '___ you see the film?',
      questionRu: 'Ты видел фильм?',
      options: ['Did', 'Do', 'Was', 'Were'],
      correctAnswer: 0,
      explanation: 'Use "Did" for Past Simple questions.'
    },
    {
      question: 'Where ___ you born?',
      questionRu: 'Где ты родился?',
      options: ['did', 'was', 'were', 'are'],
      correctAnswer: 2,
      explanation: 'With "born", use was/were. "You" takes "were".'
    },
    {
      question: 'I ___ pizza last night.',
      questionRu: 'Я хотел пиццу вчера вечером.',
      options: ['want', 'wantes', 'wanted', 'wantted'],
      correctAnswer: 2,
      explanation: 'Regular verb: want → wanted.'
    }
  ],
  finalQuizQuestions: [
    {
      question: 'What is the past form of "study"?',
      questionRu: 'Прошедшая форма "study"?',
      options: ['studyed', 'studied', 'study', 'studed'],
      correctAnswer: 1,
      explanation: 'y → ied.'
    },
    {
      question: '___ she call you?',
      questionRu: 'Она тебе звонила?',
      options: ['Was', 'Did', 'Were', 'Does'],
      correctAnswer: 1,
      explanation: 'Did + Subject + Verb.'
    }
  ]
};
