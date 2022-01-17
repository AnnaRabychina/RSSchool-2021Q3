import { ICard } from '../../options/options';
import { insertElement, changeProperty } from '../../utils/utils';
import { getLocalStorage } from '../storage/storage';
import './cards.css';

export class CardsContainer {
  public cardsContainer: HTMLElement;
  constructor() {
    this.cardsContainer = document.querySelector('.cards-container') as HTMLElement;
  }

  draw(data: Array<ICard>): void {
    this.clear();
    data.forEach((element) => {
      const cardItem = insertElement(this.cardsContainer, 'div', ['card-item'], '');
      cardItem.dataset.num = element.num;
      let arr = <string[]>getLocalStorage('selectedCards');
      if (arr && arr.includes(cardItem.dataset.num)) {
        cardItem.classList.add('selected');
      }
      const cardTitle = insertElement(cardItem, 'h2', ['card-title'], element.name);
      const cardImg = insertElement(cardItem, 'img', ['card-img'], '') as HTMLImageElement;
      cardImg.src = `../assets/toys/${element.num}.png`;
      cardImg.alt = element.name;
      const cardInfo = insertElement(cardItem, 'div', ['card-info'], '');
      const count = insertElement(cardInfo, 'p', ['count'], `Количество: <span> ${element.count}</span>`);
      const year = insertElement(cardInfo, 'p', ['year'], `Год покупки:  <span> ${element.year}</span>`);
      const shape = insertElement(cardInfo, 'p', ['shape'], `Форма:  <span> ${element.shape}</span>`);
      const color = insertElement(cardInfo, 'p', ['color'], `Цвет:  <span> ${element.color}</span>`);
      const size = insertElement(cardInfo, 'p', ['size'], `Размер:  <span> ${element.size}</span>`);
      const favorite = insertElement(
        cardInfo,
        'p',
        ['favorite'],
        `Любимая: <span> ${element.favorite ? 'да' : 'нет'}</span>`
      );
      const mark = insertElement(cardItem, 'div', ['mark'], '');
    });
  }

  clear(): void {
    this.cardsContainer.innerHTML = '';
  }

  selectToy(): void {
    let arr = <string[]>getLocalStorage('selectedCards');
    const selectedCards = arr === [] ? new Set() : new Set(arr);
    this.cardsContainer.addEventListener('click', function (event) {
      let target = event.target as HTMLElement;
      let card = target.closest('.card-item') as HTMLElement;
      if (selectedCards.size === 20 && !card.classList.contains('selected')) {
        alert('Извините, все слоты заполнены');
      } else {
        if (card) {
          changeProperty(card, 'selected');
          let num = card.dataset.num;
          if (card.classList.contains('selected')) {
            selectedCards.add(num);
          } else {
            selectedCards.delete(num);
          }
          (document.querySelector('.select-toys span') as HTMLElement).innerHTML = String(selectedCards.size);
          localStorage.setItem('selectedCards', JSON.stringify([...selectedCards]));
        }
      }
    });
    (document.querySelector('.select-toys span') as HTMLElement).innerHTML = String(selectedCards.size);
  }
}
