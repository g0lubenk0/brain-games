#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';

function generateNum() {
  const num = Math.ceil(Math.random() * 100 + Math.random() * 10);
  return num;
}

function checkWin(i, name) {
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

const brainEven = () => {
  const name = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
    checkWin(i, name);
  }
};

brainEven();
