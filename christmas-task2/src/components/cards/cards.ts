import { filterData } from '../filters/filters';
import { sortCards } from '../sorting/sorting';
import { getLocalStorage } from '../storage/storage';
import cardsData from './cardData';
import './cards.css';

export let currentData = cardsData;

export interface ICard {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

export class CardsContainer {
  public cardsContainer: HTMLElement;
  constructor() {
    this.cardsContainer = document.createElement('div');
    this.cardsContainer.classList.add('cards-container');
  }

  private draw(data: Array<ICard>) {
    this.clear();
    let arr = getLocalStorage('selectedCards');
    data.forEach((element) => {
      const cardItem = insertElement('div', ['card-item'], '', this.cardsContainer);
      cardItem.dataset.num = element.num;
      if (arr && arr.includes(cardItem.dataset.num)) {
        cardItem.classList.add('selected');
      }
      const cardTitle = insertElement('h2', ['card-title'], element.name, cardItem);
      const cardImg = insertElement('img', ['card-img'], '', cardItem) as HTMLImageElement;
      cardImg.src = `../assets/toys/${element.num}.png`;
      cardImg.alt = element.name;
      const cardInfo = insertElement('div', ['card-info'], '', cardItem);
      const count = insertElement('p', ['count'], `Количество: <span> ${element.count}</span>`, cardInfo);
      const year = insertElement('p', ['year'], `Год покупки:  <span> ${element.year}</span>`, cardInfo);
      const shape = insertElement('p', ['shape'], `Форма:  <span> ${element.shape}</span>`, cardInfo);
      const color = insertElement('p', ['color'], `Цвет:  <span> ${element.color}</span>`, cardInfo);
      const size = insertElement('p', ['size'], `Размер:  <span> ${element.size}</span>`, cardInfo);
      const favorite = insertElement(
        'p',
        ['favorite'],
        `Любимая: <span> ${element.favorite ? 'да' : 'нет'}</span>`,
        cardInfo
      );
      const mark = insertElement('div', ['mark'], '', cardItem);
    });
  }

  private clear(): void {
    this.cardsContainer.innerHTML = '';
  }

  private selectToy() {
    let arr = getLocalStorage('selectedCards');
    const selectedCards = arr === [] ? new Set() : new Set(arr);
    this.cardsContainer.addEventListener('click', (event) => {
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
    //(document.querySelector('.select-toys span') as HTMLElement).innerHTML = String(selectedCards.size);
  }

  render(): HTMLElement {
    let data = filterData();
    let sortProperty = localStorage.getItem('sortProperty');
    if (sortProperty) data = sortCards(sortProperty, data);
    this.draw(data);
    this.selectToy();
    return this.cardsContainer;
  }
}

export function changeProperty(elem: Element | HTMLButtonElement, nameProperty: string): void {
  elem.classList.toggle(nameProperty);
}

export function insertElement(
  tagName: keyof HTMLElementTagNameMap,
  className: string[],
  content: string | undefined,
  parentNode?: HTMLElement | null
): HTMLElement {
  const el = document.createElement(tagName);
  el.classList.add(...className);
  if (content) {
    el.innerHTML = content;
  }
  if (parentNode) {
    parentNode.append(el);
  }
  return el;
}
