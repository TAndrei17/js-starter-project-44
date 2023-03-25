import readlineSync from 'readline-sync';

const game = (name) => {
  const state = {
    currentNum: null,
    rightAnswer: '',
    answer: '',
    right: 0,
    wrong: 0,
  };

  const dialogs = {
    answerWrong: '',
    incorrect: `Let's try again, ${name}!`,
    correct: 'Correct!',
    congrats: `Congragulations, ${name}!`,
  };

  const getNumber = () => {
    const maxNumber = 1000;
    const number = Math.floor(Math.random() * maxNumber);
    state.currentNum = number;
    state.rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
    const askNumber = () => `Question: ${state.currentNum}`;
    console.log(askNumber());
    const playerAnswer = readlineSync.question('Your answer: ');
    state.answer = playerAnswer;
    dialogs.answerWrong = `'${state.answer}' is wrong answer ;(. Correct answer was '${state.rightAnswer}'.`;
  };

  const render = () => {
    let result = '';
    if (state.answer === 'yes' || state.answer === 'no') {
      result = (state.answer === state.rightAnswer) ? dialogs.correct : dialogs.answerWrong;
    } else {
      result = dialogs.incorrect;
    }
    if (result !== dialogs.incorrect) {
      console.log(result);
    }
    state.right = (result === dialogs.correct) ? state.right += 1 : state.right;
    state.wrong = (result !== dialogs.correct) ? state.wrong += 1 : state.wrong;
  };

  const brainEven = () => {
    getNumber();
    render();

    if (state.right < 3 && state.wrong === 0) {
      return brainEven();
    } if (state.right === 3 && state.wrong === 0) {
      console.log(dialogs.congrats);
    } else if (state.wrong > 0) {
      console.log(dialogs.incorrect);
    }
  };
  return brainEven();
};

export default game;
