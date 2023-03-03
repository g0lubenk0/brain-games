function generateNum() {
  const num = Math.ceil(Math.random() * 100 + Math.random() * 10);
  return num;
}

function generateNumCondition(a, operation) {
  let num = Math.ceil(Math.random() * 100 + Math.random() * 10);
  while (num > a && operation === '-') {
    num = Math.ceil(Math.random() * 100 + Math.random() * 10);
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
  count = 0;
  return count;
}

export { generateNum, generateNumCondition, answerCheck };
