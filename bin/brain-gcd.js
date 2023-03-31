#!/usr/bin/env node

import greeting from '../cli.js';
import { createTwoNums, showTwoNumbers, getNod } from '../games/brain-gcd-logic.js';
import { getAnswer, conclusion } from '../index.js';

console.log('Welcome to the Brain Games!');
const getName = greeting();
console.log('Find the greatest common divisor of given numbers.');

const stateGcd = {
  currentTerm: '',
  rightAnswer: null,
  answer: null,
  right: 0,
  wrong: 0,
};

const gameGcd = (name) => {
  const dialogsGcd = {
    answerWrong: '',
    incorrect: `Let's try again, ${name}!`,
    correct: 'Correct!',
    congrats: `Congragulations, ${name}!`,
  };

  const render = () => {
    let result = '';
    const {
      rightAnswer, answer, right, wrong,
    } = stateGcd;
    const { correct, answerWrong } = dialogsGcd;
    result = (answer === rightAnswer) ? correct : answerWrong;
    console.log(result);
    stateGcd.right = (result === correct) ? stateGcd.right += 1 : right;
    stateGcd.wrong = (result === answerWrong) ? stateGcd.wrong += 1 : wrong;
  };

  const brainGcd = () => {
    const term = createTwoNums();
    stateGcd.currentTerm = term;
    stateGcd.rightAnswer = getNod(term);
    showTwoNumbers(term);
    const answer = getAnswer();
    stateGcd.answer = Number(answer);
    dialogsGcd.answerWrong = `'${stateGcd.answer}' is wrong answer ;(. Correct answer was '${stateGcd.rightAnswer}'.`;
    render();

    if (stateGcd.right < 3 && stateGcd.wrong === 0) {
      return brainGcd();
    }
    const { right, wrong } = stateGcd;
    const { congrats, incorrect } = dialogsGcd;
    return conclusion(right, wrong, congrats, incorrect);
  };
  return brainGcd();
};

gameGcd(getName);
