const greeting = document.querySelector('.greeting');

import {getTimeOfDay} from './timeOfDay.js'

function showGreeting() {
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}
  
export {greeting, showGreeting}




