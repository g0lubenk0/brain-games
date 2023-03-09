import readlineSync from 'readline-sync';
import sayHello from '../cli.js';
import { answerCheck, generateNum } from '../index.js';

const progressionLength = 10;

function generateProgression() {
  const firstElement = generateNum(10, 50);
  const step = generateNum(1, 10);
  const progression = [];
  progression.push(firstElement);

  let current = firstElement;
  for (let i = 1; i < progressionLength; i += 1) {
    current += step;
    progression.push(current);
  }
  return progression;
}

function hideRandom(progression) {
  const hiddenList = [];
  const indexToHide = generateNum(0, 10);
  let hiddenElement = 0;
  for (let i = 0; i < progression.length; i += 1) {
    if (i === indexToHide) {
      hiddenElement = progression[i];
      hiddenList[i] = '..';
    } else {
      hiddenList[i] = progression[i];
    }
  }
  return [hiddenList, hiddenElement];
}

export default () => {
  const name = sayHello();
  console.log('What number is missing in the progression?');

  let i = 0;
  while (i < 3) {
    const [progression, result] = hideRandom(generateProgression());
    const question = `${progression.join(' ')}`;
    const answer = readlineSync.question(`Question: ${question}\n`);

    i = answerCheck(i, answer, String(result), name);
  }
};
