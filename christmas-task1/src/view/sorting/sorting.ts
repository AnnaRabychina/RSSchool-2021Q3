import './sorting.css';
import { ICard } from '../cards/cards';
import { getLocalStorage, setLocalStorage } from '../storage/storage';
import { updateCardsContainer } from '../filters/filters';

export const enum Sorting{
    minName= '"sort-name-min"',
    maxName= '"sort-name-max"',
    maxYear = '"sort-year-max"',
    minYear = '"sort-year-min"',
  }

export class SortList {
    selectSortList: HTMLSelectElement;
    constructor() {
      this.selectSortList = document.querySelector('.sort-select') as HTMLSelectElement;
      this.selectSortList.onclick = () =>{
        this.sort()
      }
    }
    sort() {
      setLocalStorage('sortProperty', this.selectSortList.value);
      updateCardsContainer();
  }
}

export function sortCards(value: string, data: ICard[]){
  switch (value) {
    case Sorting.minName:
      return sortData(Sorting.minName, 'name', false, data); 
    case Sorting.maxName:
      return sortData(Sorting.maxName, 'name', true, data);
   case Sorting.minYear:
    return sortData(Sorting.minYear, 'year', false,  data);
   case Sorting.maxYear:
    return sortData(Sorting.maxYear, 'year', true,  data);
  }
}
  
  export function sortData (value: string, field: keyof ICard, revers:boolean, data: ICard[]) {
    if (!revers) {
       return data.sort((prev:ICard, next:ICard) => ((prev[field] === next[field]) ? 0: next[field] > prev[field] ? 1 : -1)); 
    } else {
      return data.sort((prev:ICard, next:ICard) => ((prev[field] === next[field]) ? 0: next[field] < prev[field] ? 1 : -1))
    }
  }


