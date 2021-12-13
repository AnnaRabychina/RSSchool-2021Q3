import { optimize } from 'webpack';
import './cards.css';

export interface ICard {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string,
  color: string,
  size: string,
  favorite: boolean;
}

export class Cards {
  draw(data:Array<ICard>) {
    const page = document.querySelector('.page') as HTMLElement;
    const cardsContainer = insertElement(page, 'div', 'cards-container', '') ;
    data.forEach(element => {
      const cardItem = insertElement(cardsContainer, 'div', 'card-item','');
      cardItem.dataset.num = element.num;
      const cardTitle = insertElement(cardItem, 'h2', 'card-title', element.name);
      const cardImg = insertElement(cardItem, 'img', 'card-img', '') as HTMLImageElement;
      cardImg.src = `../assets/toys/${element.num}.png`;
      cardImg.alt = element.name;
      const cardInfo = insertElement(cardItem, 'div','card-info','');
      const count = insertElement(cardInfo, 'p','count', `Количество: <span> ${element.count}</span>` );
      const year = insertElement(cardInfo, 'p','year', `Год покупки:  <span> ${element.year}</span>` );
      const shape = insertElement(cardInfo, 'p','shape', `Форма:  <span> ${element.shape}</span>` );
      const color = insertElement(cardInfo, 'p','color', `Цвет:  <span> ${element.color}</span>` );
      const size = insertElement(cardInfo, 'p','size', `Размер:  <span> ${element.size}</span>` );
      const favorite = insertElement(cardInfo, 'p','favorite', `Любимая: <span> ${element.favorite ? 'да' : 'нет'}</span>` );
      const mark = insertElement(cardItem, 'div','mark' , '');
     });
  }
}

function insertElement(parentNode: HTMLElement, tagName: string, className: string, content: string): HTMLElement {
  const el = document.createElement(tagName);
  el.className = className;
  el.innerHTML = content;
  if (parentNode) {
    parentNode.append(el);
  }
  return el;
 }

export function selectToy() {
  const cardsContainer = document.querySelector('.cards-container') as HTMLElement;
  const selectElements = new Set;
    cardsContainer.addEventListener('click', function(event) {
      let target =<HTMLElement> event.target;
      let card =<HTMLElement> target.closest('.card-item')
      if (selectElements.size === 20 && !card.classList.contains('selected')){
        alert('Извините, все слоты заполнены');
      } else {
        if (card){
          changeMark(card);
          let num =  card.dataset.num;
          if (card.classList.contains('selected')){
            selectElements.add(num);
          } else {
            selectElements.delete(num);
          }
         (document.querySelector('.select-toys span') as HTMLElement).innerHTML = String(selectElements.size);
        }
      }
    })
  }

 function changeMark(card: HTMLElement) {
  card.classList.toggle('selected');
}

