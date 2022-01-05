import './favorites.css';
import cardsData from '../cards/cardData';
import { getLocalStorage } from '../storage/storage';
import { ICard } from '../../options/options';
import { insertElement } from '../cards/cards';

let data: ICard[] = cardsData;
let sizeFavorites: number = 20;
export let coordinateX: number;
export let coordinateY: number;

export class FavoritesCards {
  public container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('favorites-container');
  }

  private renderFavoriteCards(data: Array<ICard>): void {
    this.clear();
    let arr = <string[]>getLocalStorage('selectedCards');
    if (arr) {
      data.forEach((element) => {
        if (arr.includes(element.num)) {
          this.createFavoriteToys(element);
        }
      });

      if (arr.length < sizeFavorites) {
        for (let i = arr.length; i < sizeFavorites; i++) {
          const favoriteItem = insertElement('div', ['favorites-card'], '', this.container);
        }
      }
      (document.querySelector('.select-toys span') as HTMLElement).innerHTML = String(arr.length);
    } else {
      for (let i = 0; i < sizeFavorites; i++) {
        this.createFavoriteToys(data[i]);
      }
    }
  }

  private createFavoriteToys(element: ICard): void {
    let count = +element.count;
    const favoriteItem = insertElement('div', ['favorites-card'], '', this.container);
    favoriteItem.dataset.num = element.num;
    const favoriteCount = insertElement('p', ['favorites-count'], element.count, favoriteItem);
    for (let i = 1; i <= count; i++) {
      const favoriteImg = document.createElement('img');
      favoriteImg.classList.add('favorites-card-img');
      favoriteImg.src = `../assets/toys/${element.num}.png`;
      favoriteImg.alt = 'toy';
      favoriteImg.dataset.img = element.num;
      favoriteImg.id = `${element.num}-${i}`;
      favoriteImg.draggable = true;
      favoriteImg.addEventListener('dragstart', handleDragStart);
      favoriteItem.append(favoriteImg);
    }
  }

  private clear(): void {
    this.container.innerHTML = '';
  }

  render(): HTMLElement {
    this.renderFavoriteCards(data);
    return this.container;
  }
}

export const handleDragStart = (event: DragEvent) => {
  let target = event.target as HTMLElement;
  (event.dataTransfer as DataTransfer).setData('id', target.id);
  coordinateX = event.offsetX;
  coordinateY = event.offsetY;
};
