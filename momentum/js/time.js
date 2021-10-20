const time = document.querySelector('.time');
const data = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('.body');


function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-US', options);
    data.textContent = currentDate;
   }

function showGreeting() {
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  
  if (hours >= 0 && hours < 6) {
    return 'night';
  }
  
  if (hours >= 6 && hours < 12) {
    return 'morning';
  }

  if (hours >= 12 && hours < 18) {
    return 'day';
  }

  if (hours >= 18 && hours < 24) {
    return 'evening';
  }
}
  
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
  }
 
  showTime();

  function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)




