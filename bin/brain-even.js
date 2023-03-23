import readlineSync from 'readline-sync';

const game = () => {
  const nums = {
    current: '',
    right: 0,
    wrong: 0,
  };

  const dialogs = {
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    yesWrong: "'yes' is wrong answer ;(. Correct answer was 'no'.",
    noWrong: "'no' is wrong answer ;(. Correct answer was 'yes'.",
    incorrect: "Let's try again",
    correct: 'Correct!',
    congrats: 'Congragulations',
  };

  console.log(dialogs.rule);

  const getNumber = () => {
    const maxNumber = 100;
    const number = Math.floor(Math.random() * maxNumber);
    nums.current = number;
    return number;
  };

  const checkNumber = () => {
    getNumber();
    const askNumber = () => `Question: ${nums.current}`;
    console.log(askNumber());
    const playerAnswer = readlineSync.question('Your answer: ');
    return playerAnswer;
  };

  const render = (answer, even = true) => {
    if (answer === 'yes') {
      const result = (even) ? console.log(dialogs.correct) : console.log(dialogs.yesWrong);
      return (result === true) ? checkNumber() : dialogs.incorrect;
    }
    if (answer === 'no') {
      const result = (even) ? console.log(dialogs.correct) : console.log(dialogs.noWrong);
      return (result === true) ? checkNumber() : dialogs.incorrect;
    }
  };

  /* const brainEven = (name) => {
    const answer = checkNumber();
    const isEven = nums.current % 2;
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      nums.right += 1;
    } else {
      nums.wrong += 1;
    }
    render(answer, isEven);
  }; */
};
