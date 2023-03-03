function generateNum(min, max) {
  const num = Math.ceil(Math.random() * (max - min) + min);
  return num;
}

function generateNumCondition(min, max, a, operation) {
  let num = Math.ceil(Math.random() * (max - min) + min);
  while (num > a && operation === '-') {
    num = Math.ceil(Math.random() * (max - min) + min);
  }
  return num;
}

function answerCheck(i, answer, question, name) {
  let count = i;
  if (answer.toLowerCase() === question) {
    console.log('Correct!');
    count += 1;
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
    }
    return count;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${question}.\nLet's try again, ${name}!`);
  count = 4;
  return count;
}

export { generateNum, generateNumCondition, answerCheck };
