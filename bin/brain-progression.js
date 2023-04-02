#!/usr/bin/env node

import greeting from '../cli.js';
import { createProgression, showProgression } from '../games/brain-progression-logic.js';
import {
  getAnswer, render, createDialogs, conclusion,
} from '../index.js';

console.log('Welcome to the Brain Games!');
const getName = greeting();
console.log('What number is missing in the progression?');

const stateProgression = {
  rightAnswer: null,
  answer: null,
  right: 0,
  wrong: 0,
};

const dialogsProgression = createDialogs(getName);

const gameProgression = () => {
  const brainProgression = () => {
    const progression = createProgression();

    let hideIndex = 0;
    const getHideIndex = Math.floor(Math.random() * progression.length);
    hideIndex = getHideIndex;

    const hideNumber = progression.map((item, index) => {
      if (index === hideIndex) {
        stateProgression.rightAnswer = item;
        return ('..');
      }
      return item;
    });

    showProgression(hideNumber);
    const answer = getAnswer();
    stateProgression.answer = Number(answer);
    dialogsProgression.answerWrong = `'${stateProgression.answer}' is wrong answer ;(. Correct answer was '${stateProgression.rightAnswer}'.`;
    render(stateProgression, dialogsProgression);

    if (stateProgression.right < 3 && stateProgression.wrong === 0) {
      return brainProgression();
    }
    const { right, wrong } = stateProgression;
    const { congrats, incorrect } = dialogsProgression;
    return conclusion(right, wrong, congrats, incorrect);
  };
  return brainProgression();
};

gameProgression();
