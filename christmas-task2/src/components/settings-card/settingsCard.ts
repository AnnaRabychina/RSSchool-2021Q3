import './settings.css';

import { SortList } from '../sorting/sorting';
import PageToys from '../../pages/page-toys';
import { insertElement } from '../../services/services';
import { setLocalStorage } from '../../services/storage';
import { CountRange } from '../filter-cards/countRange';
import { FilterColor } from '../filter-cards/filterColor';
import { FilterFavorite } from '../filter-cards/filterFavorite';
import { FilterShape } from '../filter-cards/filterShape';
import { FilterSize } from '../filter-cards/filterSize';
import { YearRange } from '../filter-cards/yearRange';


export class SettingsContainer {
  protected settingsContainer: HTMLElement;
  protected sortList: SortList;
  protected filterShape: FilterShape;
  protected filterColor: FilterColor;
  protected filterSize: FilterSize;
  protected filterFavorite: FilterFavorite;
  protected countRange: CountRange;
  protected yearRange: YearRange;
  protected resetButton: HTMLButtonElement;

  constructor() {
    this.settingsContainer = document.createElement('div');
    this.settingsContainer.classList.add('settings-container');
    this.sortList = new SortList();
    this.filterShape = new FilterShape();
    this.filterColor = new FilterColor();
    this.filterSize = new FilterSize();
    this.filterFavorite = new FilterFavorite();
    this.countRange = new CountRange();
    this.yearRange = new YearRange();
    this.resetButton = <HTMLButtonElement>insertElement('button', ['reset-button'], 'Сброс фильтров');
    this.resetButton.onclick = () => {
      this.resetSettings();
    };
  }

  resetSettings(): void {
    localStorage.removeItem('selectedShapes');
    localStorage.removeItem('selectedColors');
    localStorage.removeItem('selectedSizes');
    localStorage.removeItem('minCount');
    localStorage.removeItem('maxCount');
    localStorage.removeItem('minYear');
    localStorage.removeItem('maxYear');
    setLocalStorage('isFavorite', '');
    PageToys.renderNewCardsContainer();
  }

  render(): HTMLElement {
    const sortList = this.sortList.render();
    const titleFilter = insertElement('h2', ['controls-title'], 'Фильтры по значению');
    const filterShape = this.filterShape.render();
    const filterColor = this.filterColor.render();
    const filterSize = this.filterSize.render();
    const filterFavorite = this.filterFavorite.render();
    const titleRange = insertElement('h2', ['controls-title'], 'Фильтры по диапазону');
    const countRange = this.countRange.render();
    const yearRange = this.yearRange.render();
    this.settingsContainer.append(sortList, titleFilter, filterShape, filterColor, filterSize,
      filterFavorite, titleRange, countRange, yearRange, this.resetButton);
    return this.settingsContainer;
  }
}
