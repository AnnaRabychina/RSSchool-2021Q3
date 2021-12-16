import './sorting.css';

import { currentData } from '../..';
import { CardsContainer, ICard } from '../cards/cards';

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
      sortCards(this.selectSortList.value)
    }
  }
  
export function sortCards(value: string){
    let data = sortData (value, currentData);
    const sortCard = new CardsContainer();
    sortCard.draw(data);
  }
  
export  function sortData (value: string, currentData: Array<ICard>) : Array<ICard> {
    let newCardsData: Array<ICard> = [];
    switch (value) {
        case Sorting.minName:
          newCardsData = currentData.slice().sort((prev:ICard, next:ICard) => ((prev.name === next.name) ? 0: prev.name < next.name ? 1 : -1))
        break;
        case Sorting.maxName:
          newCardsData = currentData.slice().sort((prev:ICard, next:ICard) => ((prev.name === next.name) ? 0: next.name < prev.name ? 1 : -1))
         break;
       case Sorting.minYear:
         newCardsData = currentData.slice().sort((prev:ICard, next:ICard) => ((prev.year === next.year) ? 0: next.year < prev.year ? -1 : 1))
         break;
       case Sorting.maxYear:
         newCardsData = currentData.slice().sort((prev:ICard, next:ICard) => ((prev.year === next.year) ? 0: next.year < prev.year ? 1 : -1))
        }
         return (newCardsData);
  }