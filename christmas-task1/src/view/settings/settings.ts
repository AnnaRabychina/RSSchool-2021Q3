import cardsData from '../cards/cardData';
import {CardsContainer, ICard } from '../cards/cards';

const selectSortList = document.querySelector('.sort-select') as HTMLSelectElement;

export const enum Sorting{
  minName="sort-name-min",
  maxName="sort-name-max",
  maxYear ="sort-year-max",
  minYear ="sort-year-min",
}

function sortData (value: string, currentData: Array<ICard>) : Array<ICard> {
  let newCardsData: Array<ICard> = [];
  switch (value) {
      case Sorting.minName:
        newCardsData = cardsData.slice().sort((prev:ICard, next:ICard) => ((prev.name === next.name) ? 0: prev.name < next.name ? 1 : -1))
      break;
      case Sorting.maxName:
        newCardsData = cardsData.slice().sort((prev:ICard, next:ICard) => ((prev.name === next.name) ? 0: next.name < prev.name ? 1 : -1))
       break;
     case Sorting.minYear:
       newCardsData = cardsData.slice().sort((prev:ICard, next:ICard) => ((prev.year === next.year) ? 0: next.year < prev.year ? -1 : 1))
       break;
     case Sorting.maxYear:
       newCardsData = cardsData.slice().sort((prev:ICard, next:ICard) => ((prev.year === next.year) ? 0: next.year < prev.year ? 1 : -1))
      }
       return (newCardsData);
}

function sortCards(value: string){
  console.log(1)
  
  let data = sortData (value, cardsData);
  console.log(data)
 
  const sortCard = new CardsContainer();
  sortCard.draw(data);
}

selectSortList.addEventListener('click', () => sortCards(selectSortList.value));

const countRange1 = document.getElementById('count-range1') as HTMLInputElement;
const countRange2 = document.getElementById('count-range2') as HTMLInputElement;
const countMin = document.querySelector('.count-min') as HTMLOutputElement;
const countMax= document.querySelector('.count-max') as HTMLOutputElement;
const yearRange1 = document.getElementById('year-range1') as HTMLInputElement;
const yearRange2 = document.getElementById('year-range2') as HTMLInputElement;
const yearMin = document.querySelector('.year-min') as HTMLOutputElement;
const yearMax= document.querySelector('.year-max') as HTMLOutputElement;

countRange1.addEventListener('input', (e:Event) => {
  let step: number = 1;
  if (+countRange1.value >= +countRange2.value) {
    countRange1.value = String(+countRange2.value - step)
  } 
  countMin.value = countRange1.value
})

countRange2.addEventListener('input', (e) =>{
  let step: number = 1;
  if (+countRange2.value <= +countRange1.value){
    countRange2.value = String(+countRange1.value + step)
  }
  countMax.value = countRange2.value
})

yearRange1.addEventListener('input', (e) => {
  let step: number = 10;
  if (+yearRange1.value >= +yearRange2.value) {
    yearRange1.value = String(+yearRange2.value - step)
  } 
  yearMin.value = yearRange1.value
})

yearRange2.addEventListener('input', (e) =>{
  let step: number = 10;
  if (+yearRange2.value <= +yearRange1.value){
    yearRange2.value = String(+yearRange1.value + step)
  }
  yearMax.value = yearRange2.value
})

export {selectSortList, sortData, sortCards}
