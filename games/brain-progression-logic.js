import { createNumber } from '../index.js';

const createArray = (firstNum, length, step) => {
  const array = [firstNum];
  let result = firstNum;
  for (let i = 1; i < length; i += 1) {
    result = (step < 5 ? (result -= step) : (result += step));
    array.push(result);
  }
  return array;
};

const createProgression = () => {
  let firstNum = 0;
  const getFirstNum = createNumber();
  firstNum = getFirstNum;

  let progressionLength = 5;
  const getProgressionLength = Math.floor(Math.random() * 5);
  progressionLength += getProgressionLength;

  let step = 0;
  const getStep = Math.floor(Math.random() * 10);
  step = getStep;

  const progression = createArray(firstNum, progressionLength, step);
  return progression;
};

const showProgression = (array) => {
  const arrayToString = array.join(', ');
  const question = `Question: ${arrayToString}`;
  console.log(question);
};

export { createProgression, showProgression };
