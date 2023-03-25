#!/usr/bin/env node
import greeting from '../cli.js';
import game from './brain-even.js';

console.log('Welcome to the Brain Games!');

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
game(name);
