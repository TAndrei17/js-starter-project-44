#!/usr/bin/env node

import greeting from '../cli.js';
import {
  createNumber, getAnswer, createDialogs, render, conclusion,
} from '../index.js';
import showNumber from '../games/brain-even-logic.js';

const getName = greeting();

const stateEven = {
  currentNum: null,
  rightAnswer: '',
  answer: '',
  right: 0,
  wrong: 0,
};

const dialogsEven = createDialogs(getName);

const gameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const brainEven = () => {
    const { incorrect, correct, congrats } = dialogsEven;
    const number = createNumber();
    stateEven.currentNum = number;
    stateEven.rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
    showNumber(number);
    const answer = getAnswer();
    stateEven.answer = answer;
    dialogsEven.answerWrong = `'${stateEven.answer}' is wrong answer ;(. Correct answer was '${stateEven.rightAnswer}'.`;
    const result = render(stateEven, dialogsEven);
    stateEven.right = (result === correct) ? stateEven.right += 1 : stateEven.wrong += 1;

    if (stateEven.right < 3 && stateEven.wrong === 0) {
      return brainEven();
    }
    return conclusion(stateEven.right, stateEven.wrong, congrats, incorrect);
  };
  return brainEven();
};

gameEven();
