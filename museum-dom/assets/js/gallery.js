const pictureInnerContainer = document.querySelector('.picture-inner-container');

let imgNames = ['galery1', 'galery2', 'galery3', 'galery4', 'galery5', 'galery6', 'galery7', 'galery8', 'galery9', 'galery10', 
'galery11', 'galery12', 'galery13', 'galery14', 'galery15'];

function fillGallery () {
    shuffle(imgNames);
    imgNames.map(el => insertImage(el));
}

function insertImage (imgName) {
    const img = document.createElement('img');
    img.classList.add('gallery-img')
    img.src = `assets/img/galery/${imgName}.jpg`;
    img.alt = `${imgName}`;
    pictureInnerContainer.append(img);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
fillGallery();

