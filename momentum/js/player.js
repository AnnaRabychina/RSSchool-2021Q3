const player = document.querySelector('.player')
const btnPrev = document.querySelector('.play-prev');
const btnNext = document.querySelector('.play-next');
const play = document.querySelector('.play');
const playerList = document.querySelector('.play-list');
const progress = document.querySelector('.player-progress');
const durationTime = document.querySelector('.duration-time');
const btnVolume = document.querySelector('.mute-btn');
const progressVolume = document.querySelector('.player-volume');
const track = document.querySelector('.track');

const audio = new Audio();
let isPlay = false;
let playNum = 0;
updateVolume()

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
    track.textContent = playList[playNum].title;
    document.querySelectorAll('.play-list .play-item')[playNum].classList.add('item-active')
    console.log(playerList)
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
}

function playNext() {
  document.querySelectorAll('.play-list .play-item')[playNum].classList.remove('item-active')
  playNum === playList.length-1 ? playNum = 0 : playNum =  playNum + 1;
  isPlay = false;
  playAudio();
}

function playPrev() {
  document.querySelectorAll('.play-list .play-item')[playNum].classList.remove('item-active')
  playNum === 0 ? playNum = playList.length-1 : playNum =  playNum - 1;
  isPlay = false;
  playAudio();
}

function changeProgress(target) {
  target.style.background= `linear-gradient(to right, #6cfa0d 0%, #6cfa0d ${target.value}%, #C4C4C4 ${target.value}%, #C4C4C4 100%)`
};

function handleProgress() {
  progress.value = (audio.currentTime / audio.duration) * 100;
  changeProgress(progress);
}

function updateProgress() {
  audio.currentTime = progress.value / 100 * audio.duration;
  changeProgress(progress);
} 

function updateVolume() {
  audio.volume = progressVolume.value / 100;
  if (audio.volume === 0) {
    btnVolume.classList.add('button-opacity');
   } else if (audio.volume !== 0) {
    btnVolume.classList.remove('button-opacity');
  }
  changeProgress(progressVolume);
} 

function toggleVolume() {
  if (audio.volume === 0) {
      progressVolume.value = 50;
      audio.volume = 0.5;
      btnVolume.classList.remove('button-opacity');
      changeProgress(progressVolume);
  } else {
      progressVolume.value = 0;
      audio.volume = 0;
      btnVolume.classList.add('button-opacity');
      changeProgress(progressVolume);
  }
}

audio.addEventListener("loadeddata", () => {
  durationTime.textContent = formatTime(Math.floor(audio.duration));
  setInterval(updateTime, 500);
 });

function updateTime() {
  progress.value = (audio.currentTime / audio.duration) * 100;
  document.querySelector('.current-time').textContent = (formatTime(Math.floor(audio.currentTime)));
 }

function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10){ 
      sec  = `0${sec}`;
  };
  return `${min}:${sec}`;
};

export {audio, btnPrev, btnNext, play, progress, progressVolume, track, changeProgress, handleProgress, updateProgress, updateTime, formatTime, updateVolume, toggleVolume, playerList, playNum, isPlay, toggleBtn, playAudio, playNext, playPrev, btnVolume}

