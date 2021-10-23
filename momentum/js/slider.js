const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const body = document.querySelector('.body');
let randomNum ;
let min = 1;
let max = 20;

import {getTimeOfDay} from './timeOfDay.js'

function getRandomNum() {
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() { 
  let timeOfDay = getTimeOfDay();
  let bgNum = String(randomNum).padStart(2 , '0') 
  const img = new Image();
  img.src =  `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
  }
}

function getSlideNext() {
  randomNum === max ? randomNum = min : randomNum =  randomNum + 1;
  setBg();
}

function getSlidePrev() {
  randomNum === min ? randomNum = max : randomNum =  randomNum -1;
  setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
getRandomNum();
setBg();

export {slideNext, slidePrev, body, randomNum, min, max, getRandomNum, setBg, getSlideNext, getSlidePrev} 