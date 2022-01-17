import { ICard, Sorting } from '../options/options';
import { CardsContainer } from '../view/cards/cards';
import { filterData } from '../view/filters/filters';
import { setLocalStorage } from '../view/storage/storage';

export function insertElement(
  parentNode: HTMLElement,
  tagName: string,
  className: Array<string>,
  content: string
): HTMLElement {
  const el = document.createElement(tagName);
  el.classList.add(...className);
  el.innerHTML = content;
  if (parentNode) {
    parentNode.append(el);
  }
  return el;
}

export function changeProperty(elem: Element | HTMLButtonElement, nameProperty: string): void {
  elem.classList.toggle(nameProperty);
}

export function sortCards(value: string, data: ICard[]): ICard[] | undefined {
  switch (value) {
    case Sorting.minName:
      return sortData(Sorting.minName, 'name', false, data);
    case Sorting.maxName:
      return sortData(Sorting.maxName, 'name', true, data);
    case Sorting.minYear:
      return sortData(Sorting.minYear, 'year', false, data);
    case Sorting.maxYear:
      return sortData(Sorting.maxYear, 'year', true, data);
  }
}

export function sortData(value: string, field: keyof ICard, revers: boolean, data: ICard[]): ICard[] {
  if (!revers) {
    return data.sort((prev: ICard, next: ICard) =>
      prev[field] === next[field] ? 0 : next[field] > prev[field] ? 1 : -1
    );
  } else {
    return data.sort((prev: ICard, next: ICard) =>
      prev[field] === next[field] ? 0 : next[field] < prev[field] ? 1 : -1
    );
  }
}

export function updateCardsContainer(): void {
  let data = filterData();
  let sortProperty = localStorage.getItem('sortProperty');
  if (sortProperty) data = <ICard[]>sortCards(sortProperty, data);
  const newContainer = new CardsContainer();
  newContainer.draw(data);
}
