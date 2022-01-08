import categories from './categoriesData';
import { variantsOfAnswers } from './rounds';
import { openQuiz } from './quiz';
import { getLocalStorage } from './storage';
import { openPage } from './pages';
import {
  categoryArtists, categoryPictures, pageCategories, pageResults
} from './options';

const categoriesContainer = document.querySelector('.categories-container');
const picturesBtn = document.querySelector('.pictures-quiz');
const artistsBtn = document.querySelector('.artists-quiz');

let pathCategories;
let typeCategory;
let variants;

const changeProperty = (elem, nameProperty) => {
  elem.classList.toggle(nameProperty);
};

const showScore = (elem, value) => {
  elem.textContent = `${value}/10`;
};

const createNewElement = (tagName, className, content) => {
  const el = document.createElement(tagName);
  el.classList.add(className);
  if (content) {
    el.textContent = content;
  }
  return el;
};

const renderPropertyCategory = (keyRounds, keyResults, index) => {
  let rounds = getLocalStorage(keyRounds);
  let results = getLocalStorage(keyResults);
  if (rounds[index] === '0') {
    changeProperty(document.querySelectorAll('.category-img')[index], 'category-img-inactive');
  } else {
    showScore(document.querySelectorAll('.category-score')[index], results[index]);
  }
};

const insertCategory = (categoryObj) => {
  const categoryItem = createNewElement('div', 'category-item', '');
  categoryItem.dataset.id = categoryObj.number - 1;
  categoriesContainer.append(categoryItem);
  const categoryNumber = createNewElement('div', 'category-number', categoryObj.number);
  const categoryScore = createNewElement('div', 'category-score', '');
  const categoryTitle = createNewElement('div', 'category-title', categoryObj.category);
  const categoryResult = createNewElement('div', 'category-results', 'score');
  categoryResult.classList.add('btn-page');
  categoryResult.dataset.page = pageCategories;
  categoryResult.dataset.nextPage = pageResults;
  const categoryImg = createNewElement('img', 'category-img', '');
  categoryImg.src = pathCategories + `${categoryObj.name}.jpg`;
  categoryImg.alt = `${categoryObj.name}`;

  categoryItem.append(categoryNumber, categoryScore, categoryTitle, categoryImg, categoryResult);

  if (typeCategory === categoryArtists.id) {
    renderPropertyCategory(categoryArtists.rounds, categoryArtists.result, categoryObj.number - 1);
  }

  if (typeCategory === categoryPictures.id) {
    renderPropertyCategory(
      categoryPictures.rounds,
      categoryPictures.result,
      categoryObj.number - 1
    );
  }
};

const fillCategories = () => {
  categoriesContainer.innerHTML = '';
  categories.map(el => insertCategory(el));
  document.querySelectorAll('.category-item').forEach(category => category.addEventListener('click', () => openQuiz(category)));
  document.querySelectorAll('.category-results').forEach(result => result.addEventListener('click', openPage));
  document.querySelectorAll('.category-results').forEach(result => result.addEventListener('click', (event) => {
    event.stopPropagation();
  }));
};

function changeCategory(type) {
  typeCategory = type;
  pathCategories = `images/categories-${type}/`;
  categoriesContainer.dataset.page = pageCategories;
  categoriesContainer.dataset.nextPage = type === categoryArtists.id
    ? categoryArtists.page : categoryPictures.page;
  variants = type === categoryArtists.id
    ? variantsOfAnswers.uniqAnswersByAuthor : variantsOfAnswers.questionsByPictures;
  fillCategories();
}

artistsBtn.addEventListener('click', () => changeCategory(categoryArtists.id));
picturesBtn.addEventListener('click', () => changeCategory(categoryPictures.id));

export {
  categoriesContainer, pathCategories, fillCategories, insertCategory,
  changeCategory, typeCategory, variants, changeProperty, showScore
};
