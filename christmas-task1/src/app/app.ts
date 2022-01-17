import { updateCardsContainer } from '../utils/utils';
import cardsData from '../view/cards/cardData';
import { CardsContainer } from '../view/cards/cards';
import { SettingsContainer } from '../view/settings/settings';
import { setLocalStorage } from '../view/storage/storage';

export class ToyPage {
  public cardsContainer;
  public settingsContainer;

  constructor() {
    this.cardsContainer = new CardsContainer();
    this.settingsContainer = new SettingsContainer();
  }
  
  start(): void {
    setLocalStorage('currentData', [...cardsData]);
    updateCardsContainer();
    this.cardsContainer.selectToy();
  }
}
