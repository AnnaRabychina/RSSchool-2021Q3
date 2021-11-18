import categories from './categoriesData';
import { rounds, uniqAnswers } from './rounds';

const categoriesContainer = document.querySelector('.categories-container');
const picturesBtn = document.querySelector('.pictures-quiz');
const artistsBtn = document.querySelector('.artists-quiz');
let pathCategories;
let typeCategory;
let categoriesList;
let indexOfRound;
let questions;
let currQuestion = 0;
let variantsOfAnswers;

function insertCategory(categoryObj) {
  const categoryItem = document.createElement('div');
  categoryItem.classList.add('category-item');
  categoryItem.dataset.id = categoryObj.number;
  categoriesContainer.append(categoryItem);
  const categoryNumber = document.createElement('div');
  categoryNumber.classList.add('category-number');
  categoryNumber.textContent = categoryObj.number;

  const categoryTitle = document.createElement('div');
  categoryTitle.classList.add('category-title');
  categoryTitle.textContent = categoryObj.category;

  const categoryImg = document.createElement('img');
  categoryImg.classList.add('category-img');
  categoryImg.classList.add('category-img-active');
  categoryImg.src = pathCategories + `${categoryObj.name}.jpg`;
  categoryImg.alt = `${categoryObj.name}`;

  categoryItem.append(categoryNumber);
  categoryItem.append(categoryTitle);
  categoryItem.append(categoryImg);
}

function shuffleAnswers(answers) {
  return answers.sort(() => Math.random() - 0.5);
}

function addAnswers(correctAnswer) {
  let answers = [correctAnswer];
  const randomAnswers = () => {
    while (answers.length < 4) {
      let randomNum = Math.floor(Math.random() * variantsOfAnswers.length);
      let variant = variantsOfAnswers[randomNum];
      if (variant !== correctAnswer && !answers.includes(variant)) {
        answers.push(variant);
      } else {
        randomAnswers();
      }
    }
  };
  randomAnswers();
  shuffleAnswers(answers);
  return answers;
}

const imgQuestion = document.querySelector('.page-question-author-img');

const answerElements = [
  document.getElementById('answer1'),
  document.getElementById('answer2'),
  document.getElementById('answer3'),
  document.getElementById('answer4')
];

function renderQuestion(num) {
  questions[num].answers = addAnswers(questions[num].author);
  imgQuestion.src = `./images/img/${questions[num].imageNum}.jpg`;
  answerElements.forEach((answer, index) => {
    answer.textContent = questions[num].answers[index];
  });
}

function openRound(el) {
  indexOfRound = el.dataset.id;
  if (typeCategory === 'artists') {
    questions = rounds.roundsByAuthor[indexOfRound];
  } else {
    questions = rounds.roundsByPictures[indexOfRound];
  }
  renderQuestion(currQuestion);
}

const checkAnswer = el =>{
  if (el.target.innerHTML === questions[currQuestion].author) {
    el.target.classList.add('answer-correct');
  } else {
    el.target.classList.add('answer-wrong');
  }
};

answerElements.forEach(answer => answer.addEventListener('click', (el) => checkAnswer(el)));

function fillCategories() {
  categoriesContainer.innerHTML = '';
  categories.map(el => insertCategory(el));
  categoriesList = document.querySelectorAll('.category-item');
  categoriesList.forEach(category => category.addEventListener('click', () => openRound(category)));
}

function changeCategory(type) {
  typeCategory = type;
  pathCategories = `images/categories-${type}/`;
  categoriesContainer.dataset.page = 'page-categories';
  categoriesContainer.dataset.nextPage = type === 'artists' ? 'page-artists' : 'page-pictures';
  variantsOfAnswers = type === 'artists' ? uniqAnswers.uniqAnswersByAuthor : uniqAnswers.uniqAnswersByPictures;
  fillCategories();
}

artistsBtn.addEventListener('click', () => changeCategory('artists'));
picturesBtn.addEventListener('click', () => changeCategory('pictures'));

export {
  categoriesContainer, pathCategories, fillCategories, insertCategory, changeCategory, openRound
};
