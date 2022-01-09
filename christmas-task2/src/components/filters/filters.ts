import { buttonsColor, buttonsShape, buttonsSize, ICard } from '../../options/options';
import PageToys from '../../pages/page-toys';
import FilterToys from '../../templates/filterToys';
import { getLocalStorage, setLocalStorage } from '../storage/storage';


export const createSet = (keyStorage: string): Set<string> =>  {
  return getLocalStorage(keyStorage) 
    ? new Set<string>(<string[]>getLocalStorage(keyStorage))
    : new Set<string>();
};

const selectedShapes = createSet('selectedShapes');
const selectedColors = createSet('selectedColors');
const selectedSizes = createSet('selectedSizes');

export class FilterShape extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('shape');
  }

  render(): HTMLElement {
    this.renderButtons(buttonsShape, selectedShapes, 'shape', this.container);
    this.setFilterToys(selectedShapes, 'shape', 'selectedShapes');
    return this.container;
  }
}

export class FilterColor extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('color');
  }

  render(): HTMLElement {
    this.renderButtons(buttonsColor, selectedColors, 'color', this.container);
    this.setFilterToys(selectedColors, 'color', 'selectedColors');
    return this.container;
  }
}

export class FilterSize extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('size');
  }

  render(): HTMLElement {
    this.renderButtons(buttonsSize, selectedSizes, 'size', this.container);
    this.setFilterToys(selectedSizes, 'size', 'selectedSizes');
    return this.container;
  }
}

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
    this.container.append(this.favoriteInput, label);
    return this.container;
  }
}

export function filterData(): ICard[] | [] {
  const currentData = <ICard[] | [] > getLocalStorage('currentData');
  const filterShapes = <string[] | ''>getLocalStorage('selectedShapes');
  const filterColors = <string[] | ''>getLocalStorage('selectedColors');
  const filterSizes = <string[] | ''>getLocalStorage('selectedSizes');
  const isFavorite = <string | ''>getLocalStorage('isFavorite');

  const newData = currentData.filter((el: ICard) => {
    return (
      (filterShapes ? filterShapes.includes(el.shape) : true) &&
      (filterColors ? filterColors.includes(el.color) : true) &&
      (filterSizes ?  filterSizes.includes(el.size) : true) &&
      (isFavorite ? `${el.favorite}` === isFavorite : true)
    );
  });

  return newData;
}
