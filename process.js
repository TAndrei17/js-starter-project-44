import readlineSync from 'readline-sync';

const createNumber = () => {
  const maxNumber = 1000;
  const number = Math.floor(Math.random() * maxNumber);
  return number;
};

const showNumber = (number) => {
  const question = `Question: ${number}`;
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
};
