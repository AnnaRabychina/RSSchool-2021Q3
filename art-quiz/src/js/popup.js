import {
  currQuestion, openNextStep, questions, score
} from './quiz';

import {
  openPage
} from './pages';

import { pageCategories } from './options';

import { changeProperty } from './categories';

const popupContent = document.querySelector('.popup-content');

const updateVisibilityPopup = () =>{
  changeProperty(document.querySelector('.popup-content'), 'popup-content-show');
  changeProperty(document.querySelector('.overlay'), 'overlay-show');
};

const renderResultPopup = (type) =>{
  popupContent.innerHTML = `
    <div class="popup-answer-icon"></div>
    <h2 class="popup-title popup-title-finish">Congratulations!</h2>
    <p class="popup-text-score">${score}/${currQuestion}</p>
    <div class="popup-finish-icon" style="background-image:url('./images/finish.png')"></div>
    <button class="btn btn-end btn-page"
      data-next-page="${pageCategories}"
      data-page="page-${type}">
    next</button>`;
  const endBtn = document.querySelector('.btn-end');
  endBtn.addEventListener('click', openPage);
  endBtn.addEventListener('click', updateVisibilityPopup);
};

const renderPopup = () => {
  popupContent.innerHTML = `
    <div class="popup-answer-icon"></div>
    <div class="popup-picture" style="background-image:url('./images/img/${questions[currQuestion].imageNum}.jpg')"></div>
    <h2 class="popup-title">${questions[currQuestion].name}</h2>
    <p class="popup-text popup-text-author">${questions[currQuestion].author}</p>
    <p class="popup-text popup-text-year">${questions[currQuestion].year}</p>
    <button class="btn btn-next">next</button>
    `;
  const nextBtn = document.querySelector('.btn-next');
  nextBtn.addEventListener('click', openNextStep);
};

export {
  renderPopup, updateVisibilityPopup, renderResultPopup
};
