#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { generateNum, answerCheck } from '../src/index.js';

const brainEven = () => {
  const name = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const number = generateNum(10, 50);
    const isEven = number % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${number}\n`);

    i = answerCheck(i, answer, isEven, name);
  }
};

brainEven();
