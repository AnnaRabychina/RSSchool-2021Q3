let roundsArtists;
let roundsPictures;
let resultsArtists;
let resultsPictures;

const getLocalStorage = () => {
  if (localStorage.getItem('roundsArtists')) {
    roundsArtists = localStorage.getItem('roundsArtists');
  } else {
    roundsArtists = '000000000000';
  }

  if (localStorage.getItem('roundsPictures')) {
    roundsPictures = localStorage.getItem('roundsPictures');
  } else {
    roundsPictures = '000000000000';
  }

  if (localStorage.getItem('resultsArtists')) {
    resultsArtists = localStorage.getItem('resultsArtists');
  } else {
    resultsArtists = '000000000000';
  }

  if (localStorage.getItem('resultsPictures')) {
    resultsPictures = localStorage.getItem('resultsPictures');
  } else {
    resultsPictures = '000000000000';
  }
};

const setResults = (type, index, value) => {
  if (type === 'artists') {
    roundsArtists = roundsArtists.slice(0, index) + '1' + roundsArtists.slice(Number(index) + 1);
    resultsArtists = resultsArtists.slice(0, index) + `${value}` + resultsArtists.slice(Number(index) + 1);
    localStorage.setItem('roundsArtists', roundsArtists);
    localStorage.setItem('resultsArtists', resultsArtists);
  }

  if (type === 'pictures') {
    roundsPictures = roundsPictures.slice(0, index) + '1' + roundsPictures.slice(Number(index) + 1);
    resultsPictures = resultsPictures.slice(0, index) + `${value}` + resultsPictures.slice(Number(index) + 1);
    localStorage.setItem('roundsPictures', roundsPictures);
    localStorage.setItem('resultsPictures', resultsPictures);
  }

  document.querySelectorAll('.category-item').forEach(el => {
    if (el.dataset.id === index) {
      el.querySelector('.category-img').classList.remove('category-img-inactive');
      el.querySelector('.category-score').textContent = `${value}/10`;
    }
  });
};

window.addEventListener('load', getLocalStorage);

export {
  roundsPictures, roundsArtists, resultsArtists, getLocalStorage, resultsPictures, setResults
};
