import cardsData from '../cards/cardData';
import {CardsContainer, ICard } from '../cards/cards';

const selectSortList = document.querySelector('.sort-select') as HTMLSelectElement;

function sortData (value: string, currentData: Array<ICard>) {
  let newCardsData: ICard[] = [];
  switch (value) {
      case "sort-name-min":
       newCardsData = cardsData.slice().sort((prev:ICard, next:ICard) => ((prev.name === next.name) ? 0: prev.name < next.name ? -1 : 1))
      break;
     case "sort-name-max":
       newCardsData = cardsData.slice().sort((prev:ICard, next:ICard) => ((prev.name === next.name) ? 0: next.name < prev.name ? -1 : 1))
       break;
     case "sort-year-min":
       newCardsData = cardsData.slice().sort((prev:ICard, next:ICard) => ((prev.year === next.year) ? 0: next.year < prev.year ? -1 : 1))
       break;
     case "sort-year-max":
       newCardsData = cardsData.slice().sort((prev:ICard, next:ICard) => ((prev.year === next.year) ? 0: next.year < prev.year ? -1 : 1))
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

export {selectSortList, sortData, sortCards}

