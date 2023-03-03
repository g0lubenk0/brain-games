#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { answerCheck, generateNum } from '../src/index.js';

function findDivisors(num) {
  const divisors = [];
  let i = num;
  while (i >= 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
    i -= 1;
  }
  return divisors;
}

const isPrime = (array) => (array.length <= 2 && array.length > 0 ? 'yes' : 'no');

const brainPrime = () => {
  const name = sayHello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const num = generateNum(1, 200);
    const question = `${num}`;
    const result = isPrime(findDivisors(num));
    const answer = readlineSync.question(`Question: ${question}\n`);

    i = answerCheck(i, answer.toLowerCase(), String(result), name);
  }
};

brainPrime();
