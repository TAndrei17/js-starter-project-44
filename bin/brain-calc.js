#!/usr/bin/env node

import greeting from '../cli.js';
import {
  getAnswer, createExpression, showExpression,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const getName = greeting();
console.log('What is the result of the expression?');

const game = (name) => {
  const state = {
    currentTerm: '',
    rightAnswer: null,
    answer: null,
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
    const {
      rightAnswer, answer, right, wrong,
    } = state;
    const { correct, answerWrong, incorrect } = dialogs;
    result = (answer === rightAnswer) ? correct : answerWrong;
    console.log(result);
    state.right = (result === correct) ? state.right += 1 : right;
    state.wrong = (result === answerWrong) ? state.wrong += 1 : wrong;
  };

  const brainCalc = () => {
    const term = createExpression();
    state.currentTerm = term;
    state.rightAnswer = eval(state.currentTerm);
    showExpression(term);
    const answer = getAnswer();
    state.answer = Number(answer);
    dialogs.answerWrong = `'${state.answer}' is wrong answer ;(. Correct answer was '${state.rightAnswer}'.`;
    const result = render();

    if (state.right < 3 && state.wrong === 0) {
      return brainCalc();
    } if (state.right === 3 && state.wrong === 0) {
      console.log(dialogs.congrats);
    } else if (state.wrong > 0) {
      console.log(dialogs.incorrect);
    }
    return result;
  };
  return brainCalc();
};

game(getName);
