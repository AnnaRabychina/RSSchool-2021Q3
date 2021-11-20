import categories from './categoriesData';
import { rounds, variantsOfAnswers } from './rounds';
import {
  renderPopup, showPopup, hidePopup, renderResultPopup
} from './popup';

const categoriesContainer = document.querySelector('.categories-container');
const picturesBtn = document.querySelector('.pictures-quiz');
const artistsBtn = document.querySelector('.artists-quiz');

const imgQuestion = document.querySelector('.page-question-author-img');
const answersTracker = document.querySelector('.answers-tracker');
const answerElements = [
  document.getElementById('answer1'),
  document.getElementById('answer2'),
  document.getElementById('answer3'),
  document.getElementById('answer4')
];

const picturesQuestion = document.querySelector('.page-pictures-question');
const answerElementsImg = [
  document.getElementById('answerImg1'),
  document.getElementById('answerImg2'),
  document.getElementById('answerImg3'),
  document.getElementById('answerImg4')
];

let pathCategories;
let typeCategory;
let categoriesList;
let indexOfRound;
let questions;
let currQuestion = 0;
let score = 0;
let variants;
let results = [];

const insertCategory = (categoryObj) => {
  const categoryItem = document.createElement('div');
  categoryItem.classList.add('category-item');
  categoryItem.dataset.id = categoryObj.number - 1;
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
};

const shuffleAnswers = (answers) => {
  return answers.sort(() => Math.random() - 0.5);
};

const addAnswers = (correctAnswer, author) => {
  let answers = [correctAnswer];
  const randomAnswers = () => {
    while (answers.length < 4) {
      let randomNum = Math.floor(Math.random() * variants.length);
      let variant = variants[randomNum];
      if (typeCategory === 'artists') {
        if (variant !== correctAnswer && !answers.includes(variant)) {
          answers.push(variant);
        } else {
          randomAnswers();
        }
      }
      if (typeCategory === 'pictures') {
        if (variant.imageNum !== correctAnswer
          && !answers.includes(variant.imageNum)
          && variant.author !== author) {
          answers.push(variant.imageNum);
        } else {
          randomAnswers();
        }
      }
    }
  };
  randomAnswers();
  shuffleAnswers(answers);
  return answers;
};

const answerTracker = () => {
  questions.forEach(() => {
    const trackerItem = document.createElement('div');
    trackerItem.classList.add('answers-tracker-item');
    answersTracker.append(trackerItem);
  });
};

const renderQuestion = (num) => {
  if (typeCategory === 'artists') {
    questions[num].answers = addAnswers(questions[num].author);
    imgQuestion.src = `./images/img/${questions[num].imageNum}.jpg`;
    answerElements.forEach((item, index) => {
      item.textContent = questions[num].answers[index];
    });
  }
  if (typeCategory === 'pictures') {
    picturesQuestion.textContent = `Какую из картин написал ${questions[num].author}?`;
    questions[num].answers = addAnswers(questions[num].imageNum, questions[num].author);
    answerElementsImg.forEach((item, index) => {
      item.style.backgroundImage = `url('./images/img/${questions[num].answers[index]}.jpg')`;
      item.dataset.img = questions[num].answers[index];
    });
  }
};

const enableAnswers = (answers) => {
  answers.forEach(item => {
    item.classList.remove('answer-correct', 'answer-wrong');
  });
};

const openNextStep = () => {
  currQuestion += 1;
  if (currQuestion < questions.length) {
    renderQuestion(currQuestion);
    hidePopup();
    enableAnswers(typeCategory === 'artists' ? answerElements : answerElementsImg);
  } else {
    hidePopup();
    renderResultPopup(typeCategory);
    showPopup();
  }
};

const openRound = (el) => {
  indexOfRound = el.dataset.id;
  if (typeCategory === 'artists') {
    questions = rounds.roundsByAuthor[indexOfRound];
  }
  if (typeCategory === 'pictures') {
    questions = rounds.roundsByPictures[indexOfRound];
  }
  renderQuestion(currQuestion);
  answerTracker();
  score = 0;
};

const updateAnswerTracker = status =>{
  answersTracker.children[currQuestion].classList.add(`${status}`);
};

const checkAnswer = el => {
  renderPopup();
  const answerIcon = document.querySelector('.popup-answer-icon');
  if (typeCategory === 'artists'
    ? el.target.innerHTML === questions[currQuestion].author
    : el.target.dataset.img === questions[currQuestion].imageNum) {
    score += 1;
    el.target.classList.add('answer-correct');
    answerIcon.classList.add('popup-answer-correct');
    setTimeout(() =>{
      updateAnswerTracker('correct');
    }, 1000);
  } else {
    el.target.classList.add('answer-wrong');
    answerIcon.classList.add('popup-answer-wrong');
    setTimeout(() =>{
      updateAnswerTracker('wrong');
    }, 1000);
  }
  results.push(el.target.innerHTML === questions[currQuestion].author ? 1 : 0);
  showPopup();
};

const fillCategories = () =>{
  categoriesContainer.innerHTML = '';
  categories.map(el => insertCategory(el));
  categoriesList = document.querySelectorAll('.category-item');
  categoriesList.forEach(category => category.addEventListener('click', () => openRound(category)));
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
answerElements.forEach(answer => answer.addEventListener('click', (el) => checkAnswer(el)));
answerElementsImg.forEach(answer => answer.addEventListener('click', (el) => checkAnswer(el)));

export {
  categoriesContainer, pathCategories, fillCategories, insertCategory,
  changeCategory, openRound, openNextStep, currQuestion, questions, score
};
