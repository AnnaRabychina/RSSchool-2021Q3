const btnPrev = document.querySelector('.play-prev');
const btnNext = document.querySelector('.play-next');
const play = document.querySelector('.play');
const playerList = document.querySelector('.play-list');
const audio = new Audio();
let isPlay = false;
let playNum = 0;

import playList from './playList.js'

playList.forEach((el, index) => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = playList[index].title;
  playerList.append(li);
})

function toggleBtn() {
   play.classList.toggle('pause');
}

function playAudio() {
  if (isPlay === false) {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
}

function playNext() {
  playNum === playList.length-1 ? playNum = 0 : playNum =  playNum + 1;
  isPlay = false;
  playAudio()
}

function playPrev() {
  playNum === 0 ? playNum = playList.length-1 : playNum =  playNum - 1;
  isPlay = false;
  playAudio()
}

play.addEventListener('click', toggleBtn);
play.addEventListener('click', playAudio);
btnPrev.addEventListener('click', playPrev);
btnNext.addEventListener('click', playNext);

export {btnPrev, btnNext, play, playerList,  playNum, isPlay, toggleBtn, playAudio, playNext, playPrev}















