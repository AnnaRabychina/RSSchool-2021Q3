const name = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
 
  export {name,setLocalStorage, getLocalStorage}


