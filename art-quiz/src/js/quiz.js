import { rounds } from './rounds';
import {
  renderPopup, updateVisibilityPopup, renderResultPopup
} from './popup';

import { setResults } from './storage';

import { typeCategory, variants } from './categories';
import { categoryArtists, categoryPictures } from './options';

const imgQuestion = document.querySelector('.page-artists-img');
const answersTracker = document.querySelector('.answers-tracker');

const answerElements = [
  document.getElementById('answer1'),
  document.getElementById('answer2'),
  document.getElementById('answer3'),
  document.getElementById('answer4')
];

const answerElementsImg = [
  document.getElementById('answerImg1'),
  document.getElementById('answerImg2'),
  document.getElementById('answerImg3'),
  document.getElementById('answerImg4')
];

const picturesQuestion = document.querySelector('.page-pictures-question');
const artistsQuestion = document.querySelector('.page-artists-question');

let questions;
let currQuestion = 0;
let score = 0;
let indexOfRound;
let results = [];

const shuffleAnswers = (answers) => {
  return answers.sort(() => Math.random() - 0.5);
};

const addAnswers = (correctAnswer, author) => {
  let answers = [correctAnswer];
  const randomAnswers = () => {
    while (answers.length < 4) {
      let randomNum = Math.floor(Math.random() * variants.length);
      let variant = variants[randomNum];
      if (typeCategory === categoryArtists.id) {
        if (variant !== correctAnswer && !answers.includes(variant)) {
          answers.push(variant);
        } else {
          randomAnswers();
        }
      }
      if (typeCategory === categoryPictures.id) {
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

const renderQuestion = (num) => {
  if (typeCategory === categoryArtists.id) {
    artistsQuestion.textContent = categoryArtists.question;
    questions[num].answers = addAnswers(questions[num].author);
    imgQuestion.src = `./images/img/${questions[num].imageNum}.jpg`;
    answerElements.forEach((item, index) => {
      item.textContent = questions[num].answers[index];
    });
  }
  if (typeCategory === categoryPictures.id) {
    picturesQuestion.textContent = `${categoryPictures.question} ${questions[num].author}?`;
    questions[num].answers = addAnswers(questions[num].imageNum, questions[num].author);
    answerElementsImg.forEach((item, index) => {
      item.style.backgroundImage = `url('./images/img/${questions[num].answers[index]}.jpg')`;
      item.dataset.img = questions[num].answers[index];
    });
  }
};

const answerTracker = () => {
  answersTracker.innerHTML = '';
  questions.forEach(() => {
    const trackerItem = document.createElement('div');
    trackerItem.classList.add('answers-tracker-item');
    answersTracker.append(trackerItem);
  });
};

const enableAnswers = (answers) => {
  if (typeCategory === categoryArtists.id) {
    answers.forEach(item => {
      item.classList.remove('answer-correct', 'answer-wrong');
    });
  }
  if (typeCategory === categoryPictures.id) {
    answers.forEach(item => {
      item.querySelector('.answer-picture-check').classList.remove('answer-correct', 'answer-wrong');
      item.querySelector('.answer-picture-check').style.display = 'none';
    });
  }
};

const prepareNextStep = () => {
  updateVisibilityPopup();
  enableAnswers(typeCategory === categoryArtists.id ? answerElements : answerElementsImg);
};

const openNextStep = () => {
  currQuestion += 1;
  prepareNextStep();
  if (currQuestion < questions.length) {
    renderQuestion(currQuestion);
  } else {
    renderResultPopup(typeCategory);
    setResults(typeCategory, indexOfRound, score);
    updateVisibilityPopup();
  }
};

const openQuiz = (el) => {
  indexOfRound = el.dataset.id;
  currQuestion = 0;
  score = 0;
  if (typeCategory === categoryArtists.id) {
    questions = rounds.roundsByAuthor[indexOfRound];
    answerTracker();
  }
  if (typeCategory === categoryPictures.id) {
    questions = rounds.roundsByPictures[indexOfRound];
  }
  renderQuestion(currQuestion);
};

const updateAnswerTracker = status =>{
  answersTracker.children[currQuestion].classList.add(`${status}`);
};

const checkAnswer = el => {
  renderPopup();
  const answerIcon = document.querySelector('.popup-answer-icon');
  if (typeCategory === categoryArtists.id) {
    if (el.target.innerHTML === questions[currQuestion].author) {
      el.target.classList.add('answer-correct');
      setTimeout(() =>{
        updateAnswerTracker('correct');
      }, 1000);
      score += 1;
      answerIcon.classList.add('popup-answer-correct');
    } else {
      el.target.classList.add('answer-wrong');
      answerIcon.classList.add('popup-answer-wrong');
      setTimeout(() =>{
        updateAnswerTracker('wrong');
      }, 1000);
    }
  }

  if (typeCategory === categoryPictures.id) {
    if (el.target.dataset.img === questions[currQuestion].imageNum) {
      el.target.querySelector('.answer-picture-check').classList.add('answer-correct');
      score += 1;
      answerIcon.classList.add('popup-answer-correct');
    } else {
      el.target.querySelector('.answer-picture-check').classList.add('answer-wrong');
      answerIcon.classList.add('popup-answer-wrong');
    }
    el.target.querySelector('.answer-picture-check').style.display = 'block';
  }
  results.push(el.target.innerHTML === questions[currQuestion].author ? 1 : 0);
  updateVisibilityPopup();
};

answerElements.forEach(answer => answer.addEventListener('click', (el) => checkAnswer(el)));
answerElementsImg.forEach(answer => answer.addEventListener('click', (el) => checkAnswer(el)));

export {
  indexOfRound, openQuiz, openNextStep, questions, score, currQuestion
};
