#!/usr/bin/env node

import greeting from '../cli.js';
import { createProgression, showProgression, createHideIndex } from '../games/brain-progression-logic.js';
import {
  getAnswer, render, createDialogs, conclusion,
} from '../index.js';

const getName = greeting();

const stateProg = {
  rightAnswer: '',
  answer: '',
  right: 0,
  wrong: 0,
};

const dialogsProg = createDialogs(getName);

const gameProgression = () => {
  console.log('What number is missing in the progression?');

  const brainProgression = () => {
    const { incorrect, correct, congrats } = dialogsProg;
    const progression = createProgression();
    const hideIndex = createHideIndex(progression);
    const hideNumber = progression.map((item, index) => {
      if (index === hideIndex) {
        stateProg.rightAnswer = String(item);
        return ('..');
      }
      return item;
    });

    showProgression(hideNumber);
    stateProg.answer = getAnswer();
    dialogsProg.answerWrong = `'${stateProg.answer}' is wrong answer ;(. Correct answer was '${stateProg.rightAnswer}'.`;
    const result = render(stateProg, dialogsProg);
    stateProg.right = (result === correct) ? stateProg.right += 1 : stateProg.wrong += 1;

    if (stateProg.right < 3 && stateProg.wrong === 0) {
      return brainProgression();
    }
    return conclusion(stateProg.right, stateProg.wrong, congrats, incorrect);
  };
  return brainProgression();
};

gameProgression();
