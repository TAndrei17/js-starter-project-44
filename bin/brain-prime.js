#!/usr/bin/env node

import greeting from '../cli.js';
import {
  createNumber, getAnswer, render, createDialogs, conclusion,
} from '../index.js';
import showNumber from '../games/brain-even-logic.js';
import isPrime from '../games/brain-prime-logic.js';

const getName = greeting();

const statePrime = {
  currentNum: null,
  rightAnswer: '',
  answer: '',
  right: 0,
  wrong: 0,
};

const dialogsPrime = createDialogs(getName);

const gamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  const brainPrime = () => {
    const number = createNumber();
    statePrime.currentNum = number;
    statePrime.rightAnswer = (isPrime(number)) ? 'yes' : 'no';
    showNumber(number);
    const answer = getAnswer();
    statePrime.answer = answer;
    dialogsPrime.answerWrong = `'${statePrime.answer}' is wrong answer ;(. Correct answer was '${statePrime.rightAnswer}'.`;
    render(statePrime, dialogsPrime);

    const { right, wrong } = statePrime;
    const { congrats, incorrect } = dialogsPrime;
    if (right < 3 && wrong === 0) {
      return brainPrime();
    }
    return conclusion(right, wrong, congrats, incorrect);
  };
  return brainPrime();
};

gamePrime();
