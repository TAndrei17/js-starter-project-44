#!/usr/bin/env node

import greeting from '../cli.js';
import { createNumber, showNumber, getAnswer } from '../process.js';

console.log('Welcome to the Brain Games!');
const getName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const game = (name) => {
  const state = {
    currentNum: null,
    rightAnswer: '',
    answer: '',
    right: 0,
    wrong: 0,
  };

  const dialogs = {
    answerWrong: '',
    incorrect: `Let's try again, ${name}!`,
    correct: 'Correct!',
    congrats: `Congragulations, ${name}!`,
  };

  const render = () => {
    let result = '';
    if (state.answer === 'yes' || state.answer === 'no') {
      result = (state.answer === state.rightAnswer) ? dialogs.correct : dialogs.answerWrong;
    } else {
      result = dialogs.incorrect;
    }
    if (result !== dialogs.incorrect) {
      console.log(result);
    }
    state.right = (result === dialogs.correct) ? state.right += 1 : state.right;
    state.wrong = (result !== dialogs.correct) ? state.wrong += 1 : state.wrong;
  };

  const brainEven = () => {
    const number = createNumber();
    state.currentNum = number;
    state.rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
    showNumber(number);
    const answer = getAnswer();
    state.answer = answer;
    dialogs.answerWrong = `'${state.answer}' is wrong answer ;(. Correct answer was '${state.rightAnswer}'.`;
    const result = render();

    if (state.right < 3 && state.wrong === 0) {
      return brainEven();
    } if (state.right === 3 && state.wrong === 0) {
      console.log(dialogs.congrats);
    } else if (state.wrong > 0) {
      console.log(dialogs.incorrect);
    }
    return result;
  };
  return brainEven();
};

game(getName);
