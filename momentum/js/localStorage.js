const name = document.querySelector('.name');
const city = document.querySelector('.city');

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
  }

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }

    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    }
  }

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

 
  export {name, city,setLocalStorage, getLocalStorage}



