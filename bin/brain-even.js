import readlineSync from 'readline-sync';

const nums = {
  current: '',
  right: [],
  wrong: [],
};

const dialogs = {
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
  yesWrong: "'yes' is wrong answer ;(. Correct answer was 'no'.",
  noWrong: "'no' is wrong answer ;(. Correct answer was 'yes'.",
  incorrect: "Let's try again",
  correct: 'Correct!',
  congrats: 'Congragulations',
};

const getNumber = () => {
  const maxNumber = 100;
  const number = Math.floor(Math.random() * maxNumber);
  nums.current = number;
  return number;
};

const brainEven = (name) => {
  // i need 'rule' only once
  console.log(dialogs.rule);

  // function getNumber is indeterminate!
  // receive number and save it to 'nums' (state)
  getNumber();
  // answer a player
  const askNumber = () => `Question: ${nums.current}`;
  console.log(askNumber());
  // answer to me
  const playerAnswer = readlineSync.question('Your answer: ');

  // in 'tic-tac-toe' a player moved game by click; how should it work in node?
  // player's answer is a event, answer should call function again?

  // final
  if (nums.wrong.length > 0) {
    console.log(dialogs.incorrect);
  }

  if (nums.right.length === 3) {
    console.log(`${dialogs.congrats} ${name}!`);
  }
};
