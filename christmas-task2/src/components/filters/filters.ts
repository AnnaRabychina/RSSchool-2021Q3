import { ICard } from '../../options/options';
import { PageToys } from '../../pages/page-toys';
import FilterToys from '../../templates/filterToys';
import { getLocalStorage, setLocalStorage } from '../storage/storage';

const buttonsShape = ['шар', 'колокольчик', 'шишка', 'снежинка', 'фигурка'];
const buttonsColor = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];
const buttonsSize = ['большой', 'средний', 'малый'];

let selectedShapes = <string[] | ''>getLocalStorage('selectedShapes')
  ? new Set<string>(<string[]>getLocalStorage('selectedShapes'))
  : new Set<string>();

let selectedColors = <string[] | ''>getLocalStorage('selectedColors')
  ? new Set<string>(<string[]>getLocalStorage('selectedColors'))
  : new Set<string>();

let selectedSizes = <string[] | ''>getLocalStorage('selectedSizes')
  ? new Set<string>(<string[]>getLocalStorage('selectedSizes'))
  : new Set<string>();

export class FilterShape extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('shape');
  }

  render(): HTMLElement {
    this.renderButtons(buttonsShape, selectedShapes, 'shape', this.container, 'Форма:');
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
    this.renderButtons(buttonsColor, selectedColors, 'color', this.container, 'Цвет:');
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
    this.renderButtons(buttonsSize, selectedSizes, 'size', this.container, 'Размер:');
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
    this.container.append('Только любимые:');
    this.container.append(this.favoriteInput);
    const label = document.createElement('label');
    label.setAttribute('for', 'checkbox');
    label.classList.add('favorite-input-label');
    this.container.append(label);
    return this.container;
  }
}

export function filterData(): ICard[] | [] {
  let currentData = <ICard[] | [] > getLocalStorage('currentData');
  let filterShapes = <string[] | ''>getLocalStorage('selectedShapes');
  let filterColors = <string[] |''>getLocalStorage('selectedColors');
  let filterSizes = <string[]|''>getLocalStorage('selectedSizes');
  let isFavorite = <string |''>getLocalStorage('isFavorite');

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
