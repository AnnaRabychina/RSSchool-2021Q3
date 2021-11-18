import { images } from './images';

const questionsByAuthor = [];
const questionsByPictures = [];

images.forEach((item, index) => {
  if (index % 2 === 0) {
    questionsByAuthor.push(item);
  }

  if (index % 2 !== 0) {
    questionsByPictures.push(item);
  }
});

function createRounds(arr, chunks) {
  let shortArrays = [];
  for (let i = 0; i < arr.length; i += chunks) {
    shortArrays.push(arr.slice(i, i + chunks));
  }
  return shortArrays;
}

const roundsByAuthor = createRounds(questionsByAuthor, 10);
const roundsByPictures = createRounds(questionsByPictures, 10);

const rounds = {
  roundsByAuthor,
  roundsByPictures
};

const uniqAnswersByAuthor = [...new Set(questionsByAuthor.map(item => item.author))];
const uniqAnswersByPictures = [...new Set(questionsByPictures.map(item => item.author))];

const uniqAnswers = {
  uniqAnswersByAuthor,
  uniqAnswersByPictures
};

console.log('rounds', rounds);
console.log('uniqAnswers', uniqAnswers);

export { createRounds, rounds, uniqAnswers };
