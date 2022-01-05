import './sorting.css';
import {insertElement } from '../cards/cards';
import {setLocalStorage } from '../storage/storage';
import { PageToys } from '../../pages/page-toys';
import { ICard } from '../../options/options';

export const enum Sorting {
  minName = '"sort-name-min"',
  maxName = '"sort-name-max"',
  maxYear = '"sort-year-max"',
  minYear = '"sort-year-min"',
}

export class SortList {
  container: HTMLElement;
  sortList: HTMLSelectElement;
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('sort');
    this.sortList = document.createElement('select');
    this.sortList.classList.add('sort-select');
    this.sortList.innerHTML = `
      <option value="sort-name-max">По названию от «А» до «Я»</option>
      <option value="sort-name-min">По названию от «Я» до «А»</option>
      <option value="sort-year-max">Год приобретения по возрастанию</option>
      <option value="sort-year-min">Год приобретения по убыванию</option>
   `;
    this.sortList.onclick = () => {
      this.sort();
    };
  }

  private sort(): void {
    setLocalStorage('sortProperty', this.sortList.value);
    PageToys.renderNewCardsContainer();
  }

  render(): HTMLElement  {
    const title = insertElement('h2', ['controls-title'], 'Сортировать');
    this.container.append(title);
    this.container.append(this.sortList);
    return this.container;
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

export function sortData(field: keyof ICard, revers: boolean, data: ICard[]) : ICard[] {
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
