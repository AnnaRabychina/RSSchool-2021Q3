import { CardsContainer } from "../components/cards/cards";
import { SettingsContainer } from "../components/settings/settings";
import Page from "../templates/page";

export class PageToys extends Page {
  private static cardsContainer: CardsContainer= new CardsContainer;
  private settingsContainer: SettingsContainer;
  page: HTMLDivElement;

  constructor(id: string) {
    super(id);
    this.page=document.createElement('div');
    this.page.classList.add('page');
    this.settingsContainer = new SettingsContainer;
  }
  
 static renderNewCardsContainer() {
  PageToys.cardsContainer.render()
 }

 render(): HTMLElement {
  
   const settingsContainerHTML = this.settingsContainer.render()
   this.page.append(settingsContainerHTML);
   const cardsContainer = PageToys.cardsContainer.render();
   this.page.append(cardsContainer)
   this.container.append(this.page)
   return this.container;
  }
}