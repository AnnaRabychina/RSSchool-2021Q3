import {time, showTime} from './time.js'

import {name, city, setLocalStorage, getLocalStorage} from './localStorage.js'

import {slideNext, slidePrev, body, randomNum, getRandomNum, setBg, getSlideNext, getSlidePrev} from './slider.js'

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

import playList from './playList.js'
import {audio, btnPrev, btnNext, play, progress, progressVolume, track, changeProgress, handleProgress, updateProgress, updateTime, formatTime, updateVolume, toggleVolume, playerList, playNum, isPlay, toggleBtn, playAudio, playNext, playPrev, btnVolume} from './player.js'

  play.addEventListener('click', toggleBtn);
  play.addEventListener('click', playAudio);
  btnPrev.addEventListener('click', playPrev);
  btnNext.addEventListener('click', playNext);
  audio.addEventListener('ended', playNext);
  audio.addEventListener('timeupdate', handleProgress);
  progress.addEventListener('input', updateProgress);
  progressVolume.addEventListener('input', updateVolume);
  btnVolume.addEventListener('click', toggleVolume);
import {nextQuote, quote, author, numQuote, getQuotes, changeQuote} from './quotes.js'

import {weatherIcon, temperature,weatherDescription,wind,humidity, getWeather, setCity} from './weather.js'

