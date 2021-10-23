const time = document.querySelector('.time');
const name = document.querySelector('.name');

import {data, showDate} from './date.js'
import {greeting, showGreeting} from './greeting.js'
  
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
  }

  showTime();
  
  export {time,showTime}


