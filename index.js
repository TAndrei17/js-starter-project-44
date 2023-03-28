import readlineSync from 'readline-sync';

const createNumber = () => {
  const maxNumber = 100;
  const number = Math.floor(Math.random() * maxNumber);
  return number;
};

const showNumber = (number) => {
  const question = `Question: ${number}`;
  console.log(question);
};

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

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export {
  createNumber,
  showNumber,
  getAnswer,
  createExpression,
  showExpression,
};
