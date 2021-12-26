import { PageToys } from '../../pages/page-toys';
import FilterToys from '../../templates/filterToys';
import { ICard } from '../cards/cards';
import { getLocalStorage, setLocalStorage } from '../storage/storage';

const buttonsShape = ['шар', 'колокольчик', 'шишка', 'снежинка', 'фигурка'];
const buttonsColor = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];
const buttonsSize = ['большой', 'средний', 'малый'];

let selectedShapes = getLocalStorage('selectedShapes')
  ? new Set<string>(getLocalStorage('selectedShapes'))
  : new Set<string>();

let selectedColors = getLocalStorage('selectedColors')
  ? new Set<string>(getLocalStorage('selectedColors'))
  : new Set<string>();

let selectedSizes = getLocalStorage('selectedSizes')
  ? new Set<string>(getLocalStorage('selectedSizes'))
  : new Set<string>();

export class FilterShape extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('shape');
  }

  render() {
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

  render() {
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

  render() {
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

  setFilterFavorite() {
    setLocalStorage('isFavorite', this.favoriteInput.checked ? 'true' : '');
    PageToys.renderNewCardsContainer();
  }

  render() {
    this.container.append('Только любимые:');
    this.container.append(this.favoriteInput);
    const label = document.createElement('label');
    label.setAttribute('for', 'checkbox');
    label.classList.add('favorite-input-label');
    this.container.append(label);
    return this.container;
  }
}

export function filterData() {
  let currentData = getLocalStorage('currentData');
  let filterShapes = getLocalStorage('selectedShapes');
  let filterColors = getLocalStorage('selectedColors');
  let filterSizes = getLocalStorage('selectedSizes');
  let isFavorite = getLocalStorage('isFavorite');

  const newData = currentData.filter((el: ICard) => {
    return (
      (filterShapes ? filterShapes.includes(el.shape) : true) &&
      (filterColors ? filterColors.includes(el.color) : true) &&
      (filterSizes ? filterSizes.includes(el.size) : true) &&
      (isFavorite ? String(el.favorite) === isFavorite : true)
    );
  });

  return newData;
}

/*let sortProperty = localStorage.getItem('sortProperty');
if (sortProperty) {
  (document.querySelectorAll('.sort-select option') as NodeListOf<HTMLOptionElement>).forEach((option) => {
    if (option.value === sortProperty) {
      option.selected = true;
    }
  });
}*/
