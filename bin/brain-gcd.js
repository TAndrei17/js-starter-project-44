#!/usr/bin/env node

import greeting from '../cli.js';
import { createTwoNums, showTwoNumbers, getNod } from '../games/brain-gcd-logic.js';
import { getAnswer, conclusion } from '../index.js';

console.log('Welcome to the Brain Games!');
const getName = greeting();
console.log('Find the greatest common divisor of given numbers.');

const gameNod = (name) => {
  const stateNod = {
    currentTerm: '',
    rightAnswer: null,
    answer: null,
    right: 0,
    wrong: 0,
  };

  const dialogsNod = {
    answerWrong: '',
    incorrect: `Let's try again, ${name}!`,
    correct: 'Correct!',
    congrats: `Congragulations, ${name}!`,
  };

  const render = () => {
    let result = '';
    const {
      rightAnswer, answer, right, wrong,
    } = stateNod;
    const { correct, answerWrong } = dialogsNod;
    result = (answer === rightAnswer) ? correct : answerWrong;
    console.log(result);
    stateNod.right = (result === correct) ? stateNod.right += 1 : right;
    stateNod.wrong = (result === answerWrong) ? stateNod.wrong += 1 : wrong;
  };

  const brainGcd = () => {
    const term = createTwoNums();
    stateNod.currentTerm = term;
    stateNod.rightAnswer = getNod(term);
    showTwoNumbers(term);
    const answer = getAnswer();
    stateNod.answer = Number(answer);
    dialogsNod.answerWrong = `'${stateNod.answer}' is wrong answer ;(. Correct answer was '${stateNod.rightAnswer}'.`;
    render();

    if (stateNod.right < 3 && stateNod.wrong === 0) {
      return brainGcd();
    }
    const { right, wrong } = stateNod;
    const { congrats, incorrect } = dialogsNod;
    return conclusion(right, wrong, congrats, incorrect);
  };
  return brainGcd();
};

gameNod(getName);
