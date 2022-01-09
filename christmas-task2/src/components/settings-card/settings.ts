import './settings.css';
import { insertElement } from '../cards/cards';
import { FilterColor, FilterFavorite, FilterShape, FilterSize } from '../filters/filters';
import { SortList } from '../sorting/sorting';
import { RangeSlider } from '../../templates/rangeSlider';
import { countRange1, countRange2, yearRange1, yearRange2 } from '../../options/options';
import { setLocalStorage } from '../storage/storage';
import PageToys from '../../pages/page-toys';

export class CountRange extends RangeSlider {
  sliderContainer: HTMLElement;
  minOutput: HTMLOutputElement;
  maxOutput: HTMLOutputElement;
  rangeInput1: HTMLInputElement;
  rangeInput2: HTMLInputElement;
 
  constructor() {
    super();
    this.container.classList.add('count');
    this.sliderContainer = document.createElement('div');
    this.sliderContainer.classList.add('count-slider-container');
    this.minOutput = this.renderOutput(['count-min'], '1');
    this.maxOutput = this.renderOutput(['count-max'], '12');
    this.rangeInput1 = this.renderInput(countRange1);
    this.rangeInput1.addEventListener('input', () =>{
      this.updateRange(this.rangeInput1, this.rangeInput2, this.minOutput, this.maxOutput);
    });
    this.rangeInput2 = this.renderInput(countRange2);
    this.rangeInput2.addEventListener('input', () =>{
      this.updateRange(this.rangeInput1, this.rangeInput2, this.minOutput, this.maxOutput);
    });
  }

  render(): HTMLElement {
    const containerInputs = document.createElement('div');
    containerInputs.classList.add('container-slider');
    containerInputs.append(this.rangeInput1, this.rangeInput2);
    this.sliderContainer.append(this.minOutput, containerInputs, this.maxOutput);
    this.container.append(this.sliderContainer);
    return this.container;
  }
}

export class YearRange extends RangeSlider {
  sliderContainer: HTMLElement;
  minOutput: HTMLOutputElement;
  maxOutput: HTMLOutputElement;
  rangeInput1: HTMLInputElement;
  rangeInput2: HTMLInputElement;

  constructor() {
    super();
    this.container.classList.add('year');
    this.sliderContainer = document.createElement('div');
    this.sliderContainer.classList.add('year-slider-container');
    this.minOutput = this.renderOutput(['year-min'], '1940');
    this.maxOutput = this.renderOutput(['year-max'], '2020');
    this.rangeInput1 = this.renderInput(yearRange1);
    this.rangeInput1.addEventListener('input', () =>{
      this.updateRange(this.rangeInput1, this.rangeInput2, this.minOutput, this.maxOutput);
    });
    this.rangeInput2 = this.renderInput(yearRange2);
    this.rangeInput2.addEventListener('input', () =>{
      this.updateRange(this.rangeInput1, this.rangeInput2, this.minOutput, this.maxOutput);
    });
  }

  render(): HTMLElement {
    const containerInputs = document.createElement('div');
    containerInputs.classList.add('container-slider');
    containerInputs.append(this.rangeInput1, this.rangeInput2);
    this.sliderContainer.append(this.minOutput, containerInputs, this.maxOutput);
    this.container.append(this.sliderContainer);
    return this.container;
  }
}

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
