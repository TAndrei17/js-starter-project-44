import { createNumber } from '../index.js';

const createExpression = () => {
  const operators = ['+', '-', '*'];
  const expression = { num1: 0, num2: 0, operator: '' };
  expression.num1 = createNumber();
  expression.num2 = createNumber();
  expression.operator = operators[Math.floor(Math.random() * operators.length)];
  const showExpression = `${expression.num1} ${expression.operator} ${expression.num2}`;
  return showExpression;
};

const showExpression = (text) => {
  const question = `Question: ${text}`;
  console.log(question);
};

const calculateExpression = (text) => {
  const divideText = text.split(' ');
  const oper = divideText[1];
  const numberOne = parseInt(divideText[0], 10);
  const numberTwo = parseInt(divideText[2], 10);

  let result;
  switch (oper) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    default:
      console.log('Error. Unknown oprator');
  }
  return result;
};

export { createExpression, showExpression, calculateExpression };
