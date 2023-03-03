#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { generateNum, answerCheck } from '../src/index.js';

function findLesser(string) {
  const [first, second] = string.split(' ');
  return first > second ? [first, second] : [second, first];
}

function findGCD(a, b, answer) {
  const [bigger, lesser] = findLesser(answer);
  let GCD = 1;
  let i = lesser;
  while (lesser > 1) {
    if (lesser % i === 0 && bigger % i === 0) {
      GCD = i;
      return GCD;
    }
    i -= 1;
  }
  return GCD;
}

const brainEven = () => {
  const name = sayHello();
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  while (i < 3) {
    const number1 = generateNum();
    const number2 = generateNum();
    const question = `${number1} ${number2}`;
    const result = String(findGCD(number1, number2, question));
    const answer = readlineSync.question(`Question: ${question}\n`);

    i = answerCheck(i, answer, result, name);
  }
};

brainEven();
