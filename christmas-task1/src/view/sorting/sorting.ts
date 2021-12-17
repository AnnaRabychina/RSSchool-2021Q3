import './sorting.css';
import { CardsContainer, ICard } from '../cards/cards';
import cardsData from '../cards/cardData';

let currentData = cardsData;

export const enum Sorting{
    minName="sort-name-min",
    maxName="sort-name-max",
    maxYear ="sort-year-max",
    minYear ="sort-year-min",
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
      sortCards(this.selectSortList.value);
  }
}

export function sortCards(value: string){
    switch (value) {
    case Sorting.minName:
      sortData(Sorting.minName, 'name', false); 
      break;
    case Sorting.maxName:
      sortData(Sorting.minName, 'name', true);
      break;
   case Sorting.minYear:
     sortData(Sorting.minName, 'year', false);
     break;
   case Sorting.maxYear:
     sortData(Sorting.minName, 'year', true);
  }
    const sortCard = new CardsContainer();
    sortCard.draw(currentData);
  }
  
  export  function sortData (value: string, field: keyof ICard, revers:boolean) {
    if (!revers) {
      currentData.sort((prev:ICard, next:ICard) => ((prev[field] === next[field]) ? 0: next[field] > prev[field] ? 1 : -1))
    } else {
      currentData.sort((prev:ICard, next:ICard) => ((prev[field] === next[field]) ? 0: next[field] < prev[field] ? 1 : -1))
    }
  }

