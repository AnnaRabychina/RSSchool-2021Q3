import cardsData from '../components/cards/cardData';
import { CardsContainer } from '../components/cards/cards';
import { SettingsContainer } from '../components/settings-card/settings';
import { setLocalStorage } from '../components/storage/storage';
import Page from '../templates/page';

setLocalStorage('currentData', [...cardsData]);

export class PageToys extends Page {
  private static cardsContainer: CardsContainer;
  private settingsContainer: SettingsContainer;
  private page: HTMLElement;

  constructor(id: string) {
    super(id);
    this.page = document.createElement('div');
    this.page.classList.add('page');
    this.settingsContainer = new SettingsContainer();
    PageToys.cardsContainer = new CardsContainer();
  }

  static renderNewCardsContainer() {
    PageToys.cardsContainer.render();
  }

  render(): HTMLElement {
    const settingsContainerHTML = this.settingsContainer.render();
    this.page.append(settingsContainerHTML);
    const cardsContainerHTML = PageToys.cardsContainer.render();
    this.page.append(cardsContainerHTML);
    this.container.append(this.page);
    return this.container;
  }
}
