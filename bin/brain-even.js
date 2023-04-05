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
    const number = createNumber();
    stateEven.currentNum = number;
    stateEven.rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
    showNumber(number);
    const answer = getAnswer();
    stateEven.answer = answer;
    dialogsEven.answerWrong = `'${stateEven.answer}' is wrong answer ;(. Correct answer was '${stateEven.rightAnswer}'.`;
    render(stateEven, dialogsEven);

    const { right, wrong } = stateEven;
    const { congrats, incorrect } = dialogsEven;
    if (right < 3 && wrong === 0) {
      return brainEven();
    }
    return conclusion(right, wrong, congrats, incorrect);
  };
  return brainEven();
};

gameEven();
