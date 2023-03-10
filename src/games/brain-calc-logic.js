import readlineSync from 'readline-sync';
import sayHello from '../cli.js';
import { generateNum, generateNumCondition, answerCheck } from '../index.js';

function randomOperation() {
  const max = 4;
  const min = 0;
  const randomNum = generateNum(max, min);
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

export default () => {
  const name = sayHello();
  console.log('What is the result of the expression?');

  let i = 0;
  while (i < 3) {
    const number1 = generateNum(10, 30);
    const operation = randomOperation();
    const number2 = generateNumCondition(10, 30, number1, operation);
    const question = `${number1} ${operation} ${number2}`;
    const result = String(getResult(number1, number2, operation));
    const answer = readlineSync.question(`Question: ${question}\n`);

    i = answerCheck(i, answer, result, name);
  }
};
