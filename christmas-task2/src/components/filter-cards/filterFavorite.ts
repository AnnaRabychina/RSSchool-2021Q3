import PageToys from "../../pages/page-toys";
import { getLocalStorage, setLocalStorage } from "../../services/storage";

const isFavorite = getLocalStorage('isFavorite'); 

export class FilterFavorite {
  container: HTMLElement;
  favoriteInput: HTMLInputElement;
  
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('favorite-container');
    this.favoriteInput = document.createElement('input');
    this.favoriteInput.classList.add('favorite-input');
    this.favoriteInput.type = 'checkbox';
    this.favoriteInput.id = 'checkbox';
    this.favoriteInput.onclick = () => {
      this.setFilterFavorite();
    };
  }

  setFilterFavorite(): void {
    setLocalStorage('isFavorite', this.favoriteInput.checked ? 'true' : '');
    PageToys.renderNewCardsContainer();
  }

  render(): HTMLElement {
    const label = document.createElement('label');
    label.setAttribute('for', 'checkbox');
    label.classList.add('favorite-input-label');
    if (isFavorite) {
      this.favoriteInput.checked = true ;
    } 
    this.container.append(this.favoriteInput, label);
    return this.container;
  }
}


