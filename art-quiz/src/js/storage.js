import { changeProperty, showScore } from './categories';
import { categoryArtists, categoryPictures } from './options';

let roundsArtists;
let roundsPictures;
let resultsArtists;
let resultsPictures;

const getLocalStorage = (keyProperty) => {
  return localStorage.getItem(keyProperty) ? localStorage.getItem(keyProperty) : '000000000000';
};

const setProperty = (keyRounds, keyResults, index, value) => {
  let rounds = getLocalStorage(keyRounds);
  let results = getLocalStorage(keyResults);
  rounds = rounds.slice(0, index) + '1' + rounds.slice(Number(index) + 1);
  results = results.slice(0, index) + `${value}` + results.slice(Number(index) + 1);
  localStorage.setItem(keyRounds, rounds);
  localStorage.setItem(keyResults, results);
};

const setResults = (type, index, value) => {
  if (type === categoryArtists.id) {
    setProperty(categoryArtists.rounds, categoryArtists.results, index, value);
  }

  if (type === categoryPictures.id) {
    setProperty(categoryPictures.rounds, categoryPictures.results, index, value);
  }

  document.querySelectorAll('.category-item').forEach(el => {
    if (el.dataset.id === index) {
      changeProperty(el.querySelector('.category-img'), 'category-img-inactive');
      showScore(el.querySelector('.category-score'), value);
    }
  });
};

const getProperty = () => {
  roundsArtists = getLocalStorage(categoryArtists.rounds);
  roundsPictures = getLocalStorage(categoryPictures.rounds);
  resultsArtists = getLocalStorage(categoryPictures.results);
  resultsPictures = getLocalStorage(categoryPictures.results);
};

window.addEventListener('load', getProperty);

export {
  roundsPictures, roundsArtists, resultsArtists, getLocalStorage, resultsPictures, setResults
};
