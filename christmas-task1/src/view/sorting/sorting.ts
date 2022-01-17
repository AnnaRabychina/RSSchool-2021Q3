import './sorting.css';
import { setLocalStorage } from '../storage/storage';
import { updateCardsContainer } from '../../utils/utils';

export class SortList {
  selectSortList: HTMLSelectElement;
  constructor() {
    this.selectSortList = document.querySelector('.sort-select') as HTMLSelectElement;
    this.selectSortList.onclick = () => {
      this.sort();
    };
  }
  
  sort(): void {
    setLocalStorage('sortProperty', this.selectSortList.value);
    updateCardsContainer();
  }
}
