#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';

const name = sayHello();

function generateNum() {
  const num = Math.ceil(Math.random() * 100 + Math.random() * 10);
  return num;
}

function playBrainEven() {
  let i = 0;
  while (i < 3) {
    const number = generateNum();
    const isEven = number % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${number}\n`);

    if (answer.toLowerCase() === isEven) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven}.\nLet's try again, ${name}!`);
      i = 0;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  playBrainEven();
};

brainEven();
