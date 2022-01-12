import './sorting.css';
import PageToys from '../../pages/page-toys';
import { sortListHTMLContent } from '../../options/options';
import { setLocalStorage } from '../../services/storage';
import { insertElement } from '../../services/services';


export class SortList {
  protected container: HTMLElement;
  protected sortList: HTMLSelectElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('sort');
    this.sortList = document.createElement('select');
    this.sortList.classList.add('sort-select');
    this.sortList.innerHTML = sortListHTMLContent;
    this.sortList.onclick = () => {
      this.sort();
    };
  }

  private sort(): void {
    setLocalStorage('sortProperty', this.sortList.value);
    PageToys.renderNewCardsContainer();
  }

  render(): HTMLElement  {
    const title = insertElement('h2', ['controls-title'], 'Сортировать');
    this.container.append(title);
    this.container.append(this.sortList);
    return this.container;
  }
}
