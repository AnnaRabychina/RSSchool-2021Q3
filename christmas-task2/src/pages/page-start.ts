import { insertElement } from '../components/cards/cards';
import Page from '../templates/page';

class PageStart extends Page {
  constructor(id: string) {
    super(id);
    this.container.classList.add('page');
    this.container.classList.add('page-start');
  }

  private createTitle(text: string) {
    const mainTitle = insertElement('h1', ['page-start-title'], text);
    return mainTitle;
  }

  private createStartButton() {
    const startButton = document.createElement('a');
    startButton.href = '#page-toys';
    startButton.classList.add('start-button');
    startButton.innerText = 'Начать';

    return startButton;
  }

  render(): HTMLElement {
    const title = this.createTitle('Новогодняя игра  \r\n  «Наряди ёлку»');
    const startButtonHTML = this.createStartButton();
    this.container.append(title, startButtonHTML);
    return this.container;
  }
}

export default PageStart;
