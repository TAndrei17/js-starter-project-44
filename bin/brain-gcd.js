#!/usr/bin/env node

import greeting from '../cli.js';
import { createTwoNums, showTwoNumbers, getNod } from '../games/brain-gcd-logic.js';
import {
  getAnswer, render, createDialogs, conclusion,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const getName = greeting();
console.log('Find the greatest common divisor of given numbers.');

const stateGcd = {
  currentTerm: '', // difference!
  rightAnswer: null,
  answer: null,
  right: 0,
  wrong: 0,
};

const dialogsGcd = createDialogs(getName);

const gameGcd = () => {
  const brainGcd = () => {
    const term = createTwoNums();
    stateGcd.currentTerm = term;
    stateGcd.rightAnswer = getNod(term);
    showTwoNumbers(term);
    const answer = getAnswer();
    stateGcd.answer = Number(answer);
    dialogsGcd.answerWrong = `'${stateGcd.answer}' is wrong answer ;(. Correct answer was '${stateGcd.rightAnswer}'.`;
    render(stateGcd, dialogsGcd);

    if (stateGcd.right < 3 && stateGcd.wrong === 0) {
      return brainGcd();
    }
    const { right, wrong } = stateGcd;
    const { congrats, incorrect } = dialogsGcd;
    return conclusion(right, wrong, congrats, incorrect);
  };
  return brainGcd();
};

gameGcd();
