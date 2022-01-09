import './favorites.css';
import cardsData from '../cards/cardData';
import { getLocalStorage } from '../storage/storage';
import { ICard } from '../../options/options';
import { insertElement } from '../cards/cards';

const sizeFavorites = 20;

export let coordinateX: number;
export let coordinateY: number;

export const handleDragStart = (event: DragEvent) => {
  const target = event.target as HTMLElement;
  (event.dataTransfer as DataTransfer).setData('id', target.id);
  coordinateX = event.offsetX;
  coordinateY = event.offsetY;
};

export class FavoritesCards {
  public container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('favorites-container');
  }

  private renderFavoriteCards(data: ICard[]): void {
    this.clear();
    const arr = <string[]>getLocalStorage('selectedCards');
    if (arr) {
      data.forEach((element) => {
        if (arr.includes(element.num)) {
          this.createFavoriteToys(element);
        }
      });

      if (arr.length < sizeFavorites) {
        for (let i = arr.length; i < sizeFavorites; i += 1) {
          const favoriteItem = insertElement('div', ['favorites-card'], '', '');
          this.container.append(favoriteItem)
        }
      }
      (document.querySelector('.select-toys span') as HTMLElement).innerHTML = String(arr.length);
    } else {
      for (let i = 0; i < sizeFavorites; i += 1) {
        this.createFavoriteToys(data[i]);
      }
    }
  }

  private createFavoriteToys(element: ICard): void {
    const count = +element.count;
    const favoriteItem = insertElement('div', ['favorites-card'], '', this.container);
    favoriteItem.dataset.num = element.num;
    const favoriteCount = insertElement('p', ['favorites-count'], element.count, '');
    for (let i = 1; i <= count; i += 1) {
      const favoriteImg = document.createElement('img');
      favoriteImg.classList.add('favorites-card-img');
      favoriteImg.src = `../assets/toys/${element.num}.png`;
      favoriteImg.alt = 'toy';
      favoriteImg.dataset.img = element.num;
      favoriteImg.id = `${element.num}-${i}`;
      favoriteImg.draggable = true;
      favoriteImg.addEventListener('dragstart', handleDragStart);
      favoriteItem.append(favoriteImg, favoriteCount);
    }
  }

  private clear(): void {
    this.container.innerHTML = '';
  }

  render(): HTMLElement {
    const data: ICard[] = cardsData;
    this.renderFavoriteCards(data);
    return this.container;
  }
}


