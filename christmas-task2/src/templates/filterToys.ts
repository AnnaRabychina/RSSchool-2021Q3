import { changeProperty } from '../components/cards/cards';
import { setLocalStorage } from '../components/storage/storage';
import { PageToys } from '../pages/page-toys';

abstract class FilterToys {
  protected container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
  }

  renderButtons(
    arrButtons: Array<string>,
    filterSet: Set<string>,
    field: string,
    parentNode: HTMLElement,
    text: string
  ) {
    parentNode.append(text);
    arrButtons.forEach((button) => {
      const buttonHTML: HTMLButtonElement = document.createElement('button');
      buttonHTML.dataset[field] = button;
      if ([...filterSet] && [...filterSet].includes(button)) {
        buttonHTML.classList.add('active');
      }
      parentNode.append(buttonHTML);
    });
  }

  setFilterToys(filterSet: Set<string>, filter: string, keyStorage: string) {
    this.container.addEventListener('click', (event) => {
      let target = event.target as HTMLElement,
        filterField = target.dataset[filter];
      changeProperty(target, 'active');
      if (target.classList.contains('active')) {
        filterSet.add(filterField!);
      } else {
        filterSet.delete(filterField!);
      }
      if ([...filterSet].length == 0) {
        localStorage.removeItem(keyStorage);
      } else {
        setLocalStorage(keyStorage, [...filterSet]);
      }
      PageToys.renderNewCardsContainer();
    });
  }
  render(): HTMLElement {
    return this.container;
  }
}

export default FilterToys;
