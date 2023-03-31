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

export { createExpression, showExpression };
