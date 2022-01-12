import { coordinateY, coordinateX } from "../components/favorites/favorites";
import { ICard, Sorting } from "../options/options";
import { getLocalStorage } from "./storage";

export const updateCounter = (num: string): void => {
  const counter = document.querySelector(`.favorites-card[data-num = "${num}"] .favorites-count`) as HTMLElement;
  const toys = document.querySelectorAll(`.favorites-card[data-num = "${num}"] .favorites-card-img`);
  counter.innerText = `${toys.length}`;
};

export const handleDrop = (event: DragEvent): void => {
  const target = event.target as HTMLElement;
  const itemId = (event.dataTransfer as DataTransfer).getData('id');
  const toy = document.getElementById(itemId) as HTMLElement;
  const num = <string>toy.dataset.img;

  if (target.className === 'drop-area') {
    toy.style.top = `${event.pageY - coordinateY - (toy.offsetHeight + toy.offsetHeight / 2)}px`;
    toy.style.left = `${event.pageX - coordinateX - (toy.offsetWidth * 2 + toy.offsetWidth / 2)}px`;
    target.append(toy);
    (event.dataTransfer as DataTransfer).clearData();
  } else {
    const toyCard = document.querySelector(`.favorites-card[data-num = "${num}"]`) as HTMLElement;
    toy.style.top = '';
    toy.style.left = '';
    toyCard.append(toy);
  }

  updateCounter(num);
};

export function sortData(field: keyof ICard, revers: boolean, data: ICard[]) : ICard[] {
  if (!revers) {
    return data.sort((prev: ICard, next: ICard) =>
      prev[field] === next[field] ? 0 : next[field] > prev[field] ? 1 : -1,
    );
  } else {
    return data.sort((prev: ICard, next: ICard) =>
      prev[field] === next[field] ? 0 : next[field] < prev[field] ? 1 : -1,
    );
  }
}

export function sortCards(value: string, data: ICard[]) {
  switch (value) {
    case Sorting.minName:
      return sortData('name', false, data);
    case Sorting.maxName:
      return sortData('name', true, data);
    case Sorting.minYear:
      return sortData('year', false, data);
    case Sorting.maxYear:
      return sortData('year', true, data);
  }
}

export const createSet = (keyStorage: string): Set<string> =>  {
  return getLocalStorage(keyStorage) 
    ? new Set<string>(<string[]>getLocalStorage(keyStorage))
    : new Set<string>();
};

export function filterData(): ICard[] | [] {
  const currentData = <ICard[] | [] > getLocalStorage('currentData');
  const filterShapes = <string[] | ''>getLocalStorage('selectedShapes');
  const filterColors = <string[] | ''>getLocalStorage('selectedColors');
  const filterSizes = <string[] | ''>getLocalStorage('selectedSizes');
  const isFavorite = <string | ''>getLocalStorage('isFavorite');
  const minCount = <string | ''>getLocalStorage('minCount');
  const maxCount = <string | ''>getLocalStorage('maxCount');
  const minYear = <string | ''>getLocalStorage('minYear');
  const maxYear = <string | ''>getLocalStorage('maxYear');

  const newData = currentData.filter((el: ICard) => {
    return (
      (filterShapes ? filterShapes.includes(el.shape) : true) &&
      (filterColors ? filterColors.includes(el.color) : true) &&
      (filterSizes ?  filterSizes.includes(el.size) : true) &&
      (isFavorite ? `${el.favorite}` === isFavorite : true) &&
      (minCount ? +el.count >= +minCount : +el.count >= 1) &&
      (maxCount ? +el.count <= +maxCount : +el.count <= 12)&&
      (minYear ? +el.year >= +minYear : +el.year >= 1940) &&
      (maxYear ? +el.year <= +maxYear : +el.year <= 2020)
    );
  });

  return newData;
}

export function insertElement(
  tagName: keyof HTMLElementTagNameMap,
  className: string[],
  content: string | undefined,
  parentNode?: HTMLElement | null | '',
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

export function changeProperty(elem: Element | HTMLButtonElement, nameProperty: string): void {
  elem.classList.toggle(nameProperty);
}
