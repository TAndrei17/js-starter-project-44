import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay i have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default greeting;
