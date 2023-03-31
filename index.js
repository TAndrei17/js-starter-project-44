import readlineSync from 'readline-sync';

const createNumber = () => {
  const maxNumber = 100;
  const number = Math.floor(Math.random() * maxNumber);
  return number;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const conclusion = (num1, num2, text1, text2) => {
  if (num1 === 3 && num2 === 0) {
    console.log(text1);
  } else if (num2 > 0) {
    console.log(text2);
  }
};

export {
  createNumber,
  getAnswer,
  conclusion,
};
