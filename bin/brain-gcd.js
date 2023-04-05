#!/usr/bin/env node

import greeting from '../cli.js';
import { createTwoNums, showTwoNumbers, getNod } from '../games/brain-gcd-logic.js';
import {
  getAnswer, render, createDialogs, conclusion,
} from '../index.js';

const getName = greeting();

const stateGcd = {
  currentTerm: '',
  rightAnswer: '',
  answer: '',
  right: 0,
  wrong: 0,
};

const dialogsGcd = createDialogs(getName);

const gameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const brainGcd = () => {
    const term = createTwoNums();
    stateGcd.currentTerm = term;
    stateGcd.rightAnswer = String(getNod(term));
    showTwoNumbers(term);
    const answer = getAnswer();
    stateGcd.answer = answer;
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
