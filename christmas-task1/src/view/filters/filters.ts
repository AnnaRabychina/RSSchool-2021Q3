import cardsData from '../cards/cardData';
import { ICard, changeProperty, CardsContainer, currentData } from '../cards/cards';
import { sortCards, Sorting } from '../sorting/sorting';
import { getLocalStorage, setLocalStorage } from '../storage/storage';

let selectedShapes = getLocalStorage('selectedShapes')
  ? new Set<string>(getLocalStorage('selectedShapes'))
  : new Set<string>();

let selectedColors = getLocalStorage('selectedColors')
  ? new Set<string>(getLocalStorage('selectedColors'))
  : new Set<string>();

let selectedSizes = getLocalStorage('selectedSizes')
  ? new Set<string>(getLocalStorage('selectedSizes'))
  : new Set<string>();

setFilters('data-shape', selectedShapes);
setFilters('data-size', selectedSizes);
setFilters('data-color', selectedColors);

(document.querySelector('.shape') as HTMLElement).addEventListener('click', (e: Event) => {
  let target = e.target as HTMLElement,
    filterField = target.dataset.shape;
  changeProperty(target, 'active');
  if (target.classList.contains('active')) {
    selectedShapes.add(filterField!);
  } else {
    selectedShapes.delete(filterField!);
  }
  
  if ([...selectedShapes].length == 0) {
    localStorage.removeItem('selectedShapes')
  } else {
    setLocalStorage('selectedShapes', [...selectedShapes]);
  }
  updateCardsContainer();
});

(document.querySelector('.color') as HTMLElement).addEventListener('click', (e: Event) => {
  let target = e.target as HTMLElement,
    filterField = target.dataset.color;
  changeProperty(target, 'active');
  if (target.classList.contains('active')) {
    selectedColors.add(filterField!);
  } else {
    selectedColors.delete(filterField!);
  }

  if ([...selectedColors].length == 0) {
    localStorage.removeItem('selectedColors')
  } else {
    setLocalStorage('selectedColors', [...selectedColors]);
  }
  updateCardsContainer();
});

(document.querySelector('.size') as HTMLElement).addEventListener('click', (e: Event) => {
  let target = e.target as HTMLElement,
    filterField = target.dataset.size;
  changeProperty(target, 'active');
  if (target.classList.contains('active')) {
    selectedSizes.add(filterField!);
  } else {
    selectedSizes.delete(filterField!);
  }
 
  if ([...selectedSizes].length == 0) {
    localStorage.removeItem('selectedSizes')
  } else {
    setLocalStorage('selectedSizes', [...selectedSizes]);
  }
  updateCardsContainer();
});

(document.querySelector('.favorite-input') as HTMLElement).addEventListener('click', (e) => {
  setLocalStorage('isFavorite', (document.getElementById('checkbox') as HTMLInputElement).checked ? 'true' : '');
  updateCardsContainer();
});

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

export function updateCardsContainer() {
  let data = filterData();
  let sortProperty = localStorage.getItem('sortProperty');
  if (sortProperty) data = sortCards(sortProperty, data);
  const newContainer = new CardsContainer();
  newContainer.draw(data);
}

function setFilters(fieldFilter: string, filterSet: Set<string>) {
  (document.querySelectorAll(`[${fieldFilter}]`) as NodeListOf<HTMLElement>).forEach((el) => {
    if ([...filterSet].includes(el.getAttribute(`${fieldFilter}`)!)) {
      changeProperty(el, 'active');
    }
  });
}

let sortProperty = localStorage.getItem('sortProperty');
if (sortProperty) {
  (document.querySelectorAll('.sort-select option') as NodeListOf<HTMLOptionElement>).forEach((option) => {
    if (option.value === sortProperty) {
      option.selected = true;
    }
  });
}
