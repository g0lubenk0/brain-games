#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { generateNum, generateNumCondition, answerCheck } from '../src/index.js';

function randomOperation() {
  const max = 4;
  const min = 0;
  const randomNum = Math.ceil(Math.random() * (max - min) + min);
  let result = 0;
  if (randomNum === 1) {
    result = '*';
  } else if (randomNum === 2) {
    result = '+';
  } else {
    result = '-';
  }
  return result;
}

function getResult(a, b, operation) {
  let result = 0;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      result = a + b;
      break;
  }
  return result;
}

const brainCalc = () => {
  const name = sayHello();
  console.log('What is the result of the expression?');

  let i = 0;
  while (i < 3) {
    const number1 = generateNum();
    const operation = randomOperation();
    const number2 = generateNumCondition(number1, operation);
    const question = `${number1} ${operation} ${number2}`;
    const result = String(getResult(number1, number2, operation));
    const answer = readlineSync.question(`Question: ${question}\n`);

    i = answerCheck(i, answer, result, name);
  }
};

brainCalc();
