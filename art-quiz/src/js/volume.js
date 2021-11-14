const progress = document.querySelector('.progress')
const btnVolume = document.querySelector('.volume-icon');

const audio = new Audio();

updateVolume() 

function changeProgress(target) {
  target.style.background= `linear-gradient(to right, #660033 0%, #660033 ${target.value}%, #C4C4C4 ${target.value}%, #C4C4C4 100%)`
};

function toggleVolume() {
    if ( audio.value === 0) {
        progress.value = 50;
        audio.volume = 0.5;
        btnVolume.classList.remove('volume-off');
        changeProgress(progress);
    } else {
        progress.value = 0;
        audio.volume = 0;
        btnVolume.classList.add('volume-off');
        changeProgress(progress);
    }
  }

  function updateVolume() {
    audio.volume = progress.value / 100;
    if (audio.volume === 0) {
      btnVolume.classList.add('volume-off');
     } else if (audio.volume !== 0) {
      btnVolume.classList.remove('volume-off');
    }
    changeProgress(progress);
  } 


  btnVolume.addEventListener('click', toggleVolume);
  progress.addEventListener('input', updateVolume);

export {progress, btnVolume, toggleVolume, changeProgress, updateVolume}