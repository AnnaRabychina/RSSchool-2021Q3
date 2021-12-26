import { insertElement } from "../components/cards/cards";
import Page from "../templates/page";

export class PageStart extends Page{
  constructor(id: string) {
    super(id);
    this.container.classList.add('page');
    this.container.classList.add('page-start');
   }

   private createTitle(text: string) {
    const mainTitle =  insertElement('h1', ['page-start-title'], text);
    return mainTitle;
   }

   render(): HTMLElement {
    const title = this.createTitle('Новогодняя игра  \r\n  «Наряди ёлку»')
    this.container.append(title);
    const startButton = insertElement('button', ['start-button'], 'Начать')
    this.container.append(startButton);
    return this.container;
   }
}
