#!/usr/bin/env node

import greeting from '../cli.js';
import { createNumber, getAnswer, conclusion } from '../index.js';
import showNumber from '../games/brain-even-logic.js';

console.log('Welcome to the Brain Games!');
const getName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const stateEven = {
  currentNum: null,
  rightAnswer: '',
  answer: '',
  right: 0,
  wrong: 0,
};

const dialogsEven = {
  answerWrong: '',
  incorrect: `Let's try again, ${getName}!`,
  correct: 'Correct!',
  congrats: `Congragulations, ${getName}!`,
};

const gameEven = () => {
  const render = () => {
    let result = '';
    const { answer, rightAnswer } = stateEven;
    const { correct, answerWrong } = dialogsEven;
    result = (answer === rightAnswer) ? correct : answerWrong;
    console.log(result);
    const { right, wrong } = stateEven;
    stateEven.right = (result === correct) ? stateEven.right += 1 : right;
    stateEven.wrong = (result !== correct) ? stateEven.wrong += 1 : wrong;
  };

  const brainEven = () => {
    const number = createNumber();
    stateEven.currentNum = number;
    stateEven.rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
    showNumber(number);
    const answer = getAnswer();
    stateEven.answer = answer;
    dialogsEven.answerWrong = `'${stateEven.answer}' is wrong answer ;(. Correct answer was '${stateEven.rightAnswer}'.`;
    render();

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
