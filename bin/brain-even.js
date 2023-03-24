import readlineSync from 'readline-sync';

const game = (name) => {
  const state = {
    currentNum: null,
    even: null,
    answer: '',
    right: 0,
    wrong: 0,
  };

  const dialogs = {
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    yesWrong: "'yes' is wrong answer ;(. Correct answer was 'no'.",
    noWrong: "'no' is wrong answer ;(. Correct answer was 'yes'.",
    incorrect: `Let's try again, ${name}!`,
    correct: 'Correct!',
    congrats: `Congragulations, ${name}!`,
  };

  const getNumber = () => {
    const maxNumber = 250;
    const number = Math.floor(Math.random() * maxNumber);
    state.currentNum = number;
    state.even = (number % 2 === 0);
    const askNumber = () => `Question: ${state.currentNum}`;
    console.log(askNumber());
    const playerAnswer = readlineSync.question('Your answer: ');
    state.answer = playerAnswer;
  };

  const render = (answer, even) => {
    let result = '';
    if ((answer === 'yes' && even) || (answer === 'no' && !even)) {
      result = dialogs.correct;
    } else if (answer === 'yes' && !even) {
      result = dialogs.yesWrong;
    } else if (answer === 'no' && even) {
      result = dialogs.noWrong;
    } else {
      result = dialogs.incorrect;
    }
    if (result !== dialogs.incorrect) {
      console.log(result);
    }
    state.right = (result === dialogs.correct) ? state.right += 1 : state.right;
    state.wrong = (result !== dialogs.correct) ? state.wrong += 1 : state.wrong;
  };

  console.log(dialogs.rule);
  const brainEven = () => {
    getNumber();
    render(state.answer, state.even);

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
