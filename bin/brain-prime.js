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
    const { incorrect, correct, congrats } = dialogsPrime;
    const number = createNumber();
    statePrime.currentNum = number;
    statePrime.rightAnswer = (isPrime(number)) ? 'yes' : 'no';
    showNumber(number);
    const answer = getAnswer();
    statePrime.answer = answer;
    dialogsPrime.answerWrong = `'${statePrime.answer}' is wrong answer ;(. Correct answer was '${statePrime.rightAnswer}'.`;
    const result = render(statePrime, dialogsPrime);
    statePrime.right = (result === correct) ? statePrime.right += 1 : statePrime.wrong += 1;

    if (statePrime.right < 3 && statePrime.wrong === 0) {
      return brainPrime();
    }
    return conclusion(statePrime.right, statePrime.wrong, congrats, incorrect);
  };
  return brainPrime();
};

gamePrime();
