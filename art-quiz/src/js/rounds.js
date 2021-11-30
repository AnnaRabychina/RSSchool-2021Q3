import { images } from './images';

const questionsByAuthor = [];
const questionsByPictures = [];

images.forEach((item, index) => {
  if (index < images.length / 2) {
    questionsByAuthor.push(item);
  }

  if (index >= images.length / 2) {
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

const variantsOfAnswers = {
  uniqAnswersByAuthor,
  questionsByPictures
};

export { createRounds, rounds, variantsOfAnswers };
