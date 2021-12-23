import cardsData from '../view/cards/cardData';
import { CardsContainer, ICard } from '../view/cards/cards';
import { filterData, updateCardsContainer } from '../view/filters/filters';
import { SettingsContainer } from '../view/settings/settings';
import { sortCards, Sorting, sortData } from '../view/sorting/sorting';
import { getLocalStorage, setLocalStorage } from '../view/storage/storage';

let  currentData = [...cardsData]
export class ToyPage {
  public cardsContainer;
  public settingsContainer;

  constructor() {
    this.cardsContainer = new CardsContainer();
    this.settingsContainer = new SettingsContainer();
    
  }
  start() {
    setLocalStorage('currentData', [...cardsData])
    updateCardsContainer();
    this.cardsContainer.selectToy();
  }
}