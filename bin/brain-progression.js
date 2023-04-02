#!/usr/bin/env node

import greeting from '../cli.js';
import { getAnswer, conclusion } from '../index.js';
import { createProgression, showProgression } from '../games/brain-progression-logic.js';

console.log('Welcome to the Brain Games!');
const getName = greeting();
console.log('What number is missing in the progression?');

const stateProgression = {
  rightAnswer: null,
  answer: null,
  right: 0,
  wrong: 0,
};

const dialogsProgression = {
  answerWrong: '',
  incorrect: `Let's try again, ${getName}!`,
  correct: 'Correct!',
  congrats: `Congragulations, ${getName}!`,
};

const gameProgression = () => {
  const render = () => {
    let result = '';
    const {
      rightAnswer, answer, right, wrong,
    } = stateProgression;
    const { correct, answerWrong } = dialogsProgression;
    result = (answer === rightAnswer) ? correct : answerWrong;
    console.log(result);
    stateProgression.right = (result === correct) ? stateProgression.right += 1 : right;
    stateProgression.wrong = (result === answerWrong) ? stateProgression.wrong += 1 : wrong;
  };

  const brainProgression = () => {
    const progression = createProgression();

    let hideIndex = 0;
    const getHideIndex = Math.floor(Math.random() * progression.length);
    hideIndex = getHideIndex;

    const hideNumber = progression.map((item, index) => {
      if (index === hideIndex) {
        stateProgression.rightAnswer = item;
        return ('..');
      }
      return item;
    });

    showProgression(hideNumber);
    const answer = getAnswer();
    stateProgression.answer = Number(answer);
    dialogsProgression.answerWrong = `'${stateProgression.answer}' is wrong answer ;(. Correct answer was '${stateProgression.rightAnswer}'.`;
    render();

    if (stateProgression.right < 3 && stateProgression.wrong === 0) {
      return brainProgression();
    }
    const { right, wrong } = stateProgression;
    const { congrats, incorrect } = dialogsProgression;
    return conclusion(right, wrong, congrats, incorrect);
  };
  return brainProgression();
};

gameProgression();
