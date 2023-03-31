import { createNumber } from '../index.js';

const createTwoNums = () => {
  const numbers = { num1: 0, num2: 0 };
  numbers.num1 = createNumber();
  numbers.num2 = createNumber();
  const showNunbers = `${numbers.num1} ${numbers.num2}`;
  return showNunbers;
};

const showTwoNumbers = (text) => {
  const question = `Question: ${text}`;
  console.log(question);
};

const getNod = (text) => {
  const array = text.split(' ');
  const num1 = Number(array[0]);
  const num2 = Number(array[1]);
  const findNod = (n1, n2) => {
    if (n2 !== 0) {
      const balance = n1 % n2;
      return findNod(n2, balance);
    }
    return n1;
  };
  return findNod(num1, num2);
};

export { createTwoNums, showTwoNumbers, getNod };
