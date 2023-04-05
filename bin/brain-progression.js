#!/usr/bin/env node

import greeting from '../cli.js';
import { createProgression, showProgression, createHideIndex } from '../games/brain-progression-logic.js';
import {
  getAnswer, render, createDialogs, conclusion,
} from '../index.js';

const getName = greeting();

const stateProgression = {
  rightAnswer: '',
  answer: '',
  right: 0,
  wrong: 0,
};

const dialogsProgression = createDialogs(getName);

const gameProgression = () => {
  console.log('What number is missing in the progression?');

  const brainProgression = () => {
    const { right, wrong } = stateProgression;
    const { incorrect, correct, congrats } = dialogsProgression;
    const progression = createProgression();
    const hideIndex = createHideIndex(progression);
    const hideNumber = progression.map((item, index) => {
      if (index === hideIndex) {
        stateProgression.rightAnswer = String(item);
        return ('..');
      }
      return item;
    });

    showProgression(hideNumber);
    const playerAnswer = getAnswer();
    stateProgression.answer = playerAnswer;
    dialogsProgression.answerWrong = `'${stateProgression.answer}' is wrong answer ;(. Correct answer was '${stateProgression.rightAnswer}'.`;
    const result = render(stateProgression, dialogsProgression);
    stateProgression.right = (result === correct) ? stateProgression.right += 1 : right;
    stateProgression.wrong = (result !== correct) ? stateProgression.wrong += 1 : wrong;

    if (stateProgression.right < 3 && stateProgression.wrong === 0) {
      return brainProgression();
    }
    return conclusion(stateProgression.right, stateProgression.wrong, congrats, incorrect);
  };
  return brainProgression();
};

gameProgression();
