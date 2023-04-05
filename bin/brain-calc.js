#!/usr/bin/env node

import greeting from '../cli.js';
import { createExpression, showExpression, calculateExpression } from '../games/brain-calc-logic.js';
import {
  getAnswer, render, createDialogs, conclusion,
} from '../index.js';

const getName = greeting();

const stateCalc = {
  currentTerm: '',
  rightAnswer: '',
  answer: '',
  right: 0,
  wrong: 0,
};

const dialogsCalc = createDialogs(getName);

const gameCalc = () => {
  console.log('What is the result of the expression?');
  const brainCalc = () => {
    const term = createExpression();
    stateCalc.currentTerm = term;
    stateCalc.rightAnswer = String(calculateExpression(stateCalc.currentTerm));
    showExpression(term);
    const answer = getAnswer();
    stateCalc.answer = answer;
    dialogsCalc.answerWrong = `'${stateCalc.answer}' is wrong answer ;(. Correct answer was '${stateCalc.rightAnswer}'.`;
    render(stateCalc, dialogsCalc);

    if (stateCalc.right < 3 && stateCalc.wrong === 0) {
      return brainCalc();
    }
    const { right, wrong } = stateCalc;
    const { congrats, incorrect } = dialogsCalc;
    return conclusion(right, wrong, congrats, incorrect);
  };
  return brainCalc();
};

gameCalc();
