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

function answerCheck(i, answer, isEven, name) {
  let count = i;
  if (answer.toLowerCase() === isEven) {
    console.log('Correct!');
    checkWin(i, name);
    count += 1;
    return count;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven}.\nLet's try again, ${name}!`);
  count = 0;
  return count;
}

const brainEven = () => {
  const name = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const number = generateNum();
    const isEven = number % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${number}\n`);

    i = answerCheck(i, answer, isEven, name);
  }
};

brainEven();
