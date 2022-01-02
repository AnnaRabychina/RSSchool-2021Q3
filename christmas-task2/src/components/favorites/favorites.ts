import './favorites.css'
import cardsData from '../cards/cardData';
import { ICard, insertElement, changeProperty } from '../cards/cards';
import { getLocalStorage } from '../storage/storage';

let data = cardsData;
let sizeFavorites = 20;

export class FavoritesCards {
  public container: HTMLElement;
  
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('favorites-container');
  }

  private renderFavoriteCards(data: Array<ICard>) {
    this.clear();
    let arr: Array<string> = getLocalStorage('selectedCards');
    if (arr) {
      data.forEach((element) => {
        if (arr.includes(element.num)) {
          this.createFavoriteCard(element);
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
        this.createFavoriteCard(data[i]);
      }
    }
  }

  private createFavoriteCard(element: ICard) {
    const favoriteItem = insertElement('div', ['favorites-card'], '', this.container);
    const favoriteCount = insertElement('p', ['favorites-count'], element.count, favoriteItem);
    const favoriteImg = insertElement('img', ['favorites-card-img'], '', favoriteItem) as HTMLImageElement;
    favoriteImg.src = `../assets/toys/${element.num}.png`;
    favoriteImg.alt = 'toy';
    favoriteImg.draggable = true;
  }

  private clear(): void {
    this.container.innerHTML = '';
  }

  render(): HTMLElement {
    this.renderFavoriteCards(data);
    return this.container;
  }
}
