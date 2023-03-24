#!/usr/bin/env node
import greeting from '../cli.js';
import game from './brain-even.js';

console.log('Welcome to the Brain Games!');

const name = greeting();
game(name);
