import readlineSync from 'readline-sync';

const createNumber = () => {
  const maxNumber = 10;
  const number = Math.floor(Math.random() * maxNumber);
  return number;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const createDialogs = (name) => {
  const dialogs = {
    answerWrong: '',
    incorrect: `Let's try again, ${name}!`,
    correct: 'Correct!',
    congrats: `Congratulations, ${name}!`,
  };
  return dialogs;
};

const render = (state, dialogs) => {
  let result = '';
  const {
    rightAnswer, answer, right, wrong,
  } = state;
  const { correct, answerWrong } = dialogs;
  result = (answer === rightAnswer) ? correct : answerWrong;
  console.log(result);
  state.right = (result === correct) ? state.right += 1 : right;
  state.wrong = (result === answerWrong) ? state.wrong += 1 : wrong;
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
  createDialogs,
  render,
};
