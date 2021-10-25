const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const body = document.querySelector('.body');
let randomNum ;

import {getTimeOfDay} from './timeOfDay.js'

function getRandomNum(min,max)  {
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
  randomNum === 20 ? randomNum = 1 : randomNum =  randomNum + 1;
  setBg();
}

function getSlidePrev() {
  randomNum === 1 ? randomNum = 20 : randomNum =  randomNum -1;
  setBg();
}

getRandomNum(1,20); 
setBg();

export {slideNext, slidePrev, body, randomNum, getRandomNum, setBg, getSlideNext, getSlidePrev} 