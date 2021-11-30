import categories from './categoriesData';
import { variantsOfAnswers } from './rounds';
import { openQuiz } from './quiz';

import {
  roundsPictures, roundsArtists, resultsArtists, resultsPictures
} from './storage';

import {
  openPage
} from './pages';

const categoriesContainer = document.querySelector('.categories-container');
const picturesBtn = document.querySelector('.pictures-quiz');
const artistsBtn = document.querySelector('.artists-quiz');

let pathCategories;
let typeCategory;
let categoriesList;
let categoriesResults;
let variants;

const insertCategory = (categoryObj) => {
  const categoryItem = document.createElement('div');
  categoryItem.classList.add('category-item');
  categoryItem.dataset.id = categoryObj.number - 1;
  categoriesContainer.append(categoryItem);
  const categoryNumber = document.createElement('div');
  categoryNumber.classList.add('category-number');
  categoryNumber.textContent = categoryObj.number;

  const categoryScore = document.createElement('div');
  categoryScore.classList.add('category-score');

  const categoryTitle = document.createElement('div');
  categoryTitle.classList.add('category-title');
  categoryTitle.textContent = categoryObj.category;

  const categoryResult = document.createElement('div');
  categoryResult.classList.add('category-results', 'btn-page');
  categoryResult.textContent = 'score';
  categoryResult.dataset.page = 'page-categories';
  categoryResult.dataset.nextPage = 'page-results';

  const categoryImg = document.createElement('img');
  categoryImg.classList.add('category-img');
  if (typeCategory === 'artists') {
    if (roundsArtists[categoryObj.number - 1] === '0') {
      categoryImg.classList.add('category-img-inactive');
    } else {
      categoryScore.textContent = `${resultsArtists[categoryObj.number - 1]}/10`;
    }
  }

  if (typeCategory === 'pictures') {
    if (roundsPictures[categoryObj.number - 1] === '0') {
      categoryImg.classList.add('category-img-inactive');
    } else {
      categoryScore.textContent = `${resultsPictures[categoryObj.number - 1]}/10`;
    }
  }
  categoryImg.src = pathCategories + `${categoryObj.name}.jpg`;
  categoryImg.alt = `${categoryObj.name}`;

  categoryItem.append(categoryNumber);
  categoryItem.append(categoryScore);
  categoryItem.append(categoryTitle);
  categoryItem.append(categoryImg);
  categoryItem.append(categoryResult);
};

const fillCategories = () => {
  categoriesContainer.innerHTML = '';
  categories.map(el => insertCategory(el));
  categoriesList = document.querySelectorAll('.category-item');
  categoriesList.forEach(category => category.addEventListener('click', () => openQuiz(category)));
  categoriesResults = document.querySelectorAll('.category-results');
  categoriesResults.forEach(result => result.addEventListener('click', openPage));
  categoriesResults.forEach(result => result.addEventListener('click', (event) => {
    event.stopPropagation();
  }));
};

function changeCategory(type) {
  typeCategory = type;
  pathCategories = `images/categories-${type}/`;
  categoriesContainer.dataset.page = 'page-categories';
  categoriesContainer.dataset.nextPage = type === 'artists' ? 'page-artists' : 'page-pictures';
  variants = type === 'artists' ? variantsOfAnswers.uniqAnswersByAuthor : variantsOfAnswers.questionsByPictures;
  fillCategories();
}

artistsBtn.addEventListener('click', () => changeCategory('artists'));
picturesBtn.addEventListener('click', () => changeCategory('pictures'));

export {
  categoriesContainer, pathCategories, fillCategories, insertCategory,
  changeCategory, typeCategory, variants
};
