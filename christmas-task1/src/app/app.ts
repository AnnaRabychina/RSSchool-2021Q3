import cardsData from '../view/cards/cardData';
import { CardsContainer } from '../view/cards/cards';
import { SettingsContainer } from '../view/settings/settings';

export class ToyPage {
  public cardsContainer;
  public settingsContainer;
  constructor() {
    this.cardsContainer = new CardsContainer();
    this.settingsContainer = new SettingsContainer();
  }
  start() {
    this.cardsContainer.draw(cardsData);
    this.cardsContainer.selectToy();
  }
}

