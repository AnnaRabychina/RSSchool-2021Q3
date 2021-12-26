import { insertElement } from '../cards/cards';
import { FilterColor, FilterFavorite, FilterShape, FilterSize } from '../filters/filters';
import { SortList } from '../sorting/sorting';

export class SettingsContainer {
  protected settingsContainer: HTMLElement;
  protected sortList: SortList;
  protected filterShape: FilterShape;
  protected filterColor: FilterColor;
  protected filterSize: FilterSize;
  protected filterFavorite: FilterFavorite;
  constructor() {
    this.settingsContainer = document.createElement('div');
    this.settingsContainer.classList.add('settings-container');
    this.sortList = new SortList();
    this.filterShape = new FilterShape();
    this.filterColor = new FilterColor();
    this.filterSize = new FilterSize();
    this.filterFavorite = new FilterFavorite();
  }

  private createSettings() {
    const settings = document.createElement('div');
    settings.innerHTML = `     
      <h2 class="controls-title">Фильтры по диапазону</h2>
      <div class="count">
        <p>Количество экземпляров:</p>
        <div class="count-slider-container">
          <output class="count-min">1</output>
          <div class="container-slider">
            <input id="count-range1" class="count-range1" type="range" min="1" step="1" max="12" value="1" />
            <input id="count-range2" class="count-range2" type="range" min="1" step="1" max="12" value="12" />
          </div>
          <output class="count-max">12</output>
        </div>
      </div>
      <div class="year">
        <p>Год приобретения:</p>
        <div class="year-slider-container">
          <output class="year-min">1940</output>
          <div class="container-slider">
            <input id="year-range1" class="year-range1" type="range" min="1940" step="10" max="2020" value="1940" />
            <input id="year-range2" class="year-range2" type="range" min="1940" step="10" max="2020" value="2020" />
          </div>
          <div class="year-slider"></div>
          <output class="year-max">2020</output>
        </div>
      </div>
    `;
    return settings;
  }

  render(): HTMLElement {
    const sortList = this.sortList.render();
    this.settingsContainer.append(sortList);
    const title = insertElement('h2', ['controls-title'], 'Фильтры по значению');
    this.settingsContainer.append(title);
    const filterShape = this.filterShape.render();
    this.settingsContainer.append(filterShape);
    const filterColor = this.filterColor.render();
    this.settingsContainer.append(filterColor);
    const filterSize = this.filterSize.render();
    this.settingsContainer.append(filterSize);
    const filterFavorite = this.filterFavorite.render();
    this.settingsContainer.append(filterFavorite);
    const settings = this.createSettings();
    this.settingsContainer.append(settings);
    const resetButton = insertElement('button', ['reset-button'], 'Сброс фильтров');
    this.settingsContainer.append(resetButton);
    return this.settingsContainer;
  }
}

const countRange1 = document.getElementById('count-range1') as HTMLInputElement;
const countRange2 = document.getElementById('count-range2') as HTMLInputElement;
const countMin = document.querySelector('.count-min') as HTMLOutputElement;
const countMax = document.querySelector('.count-max') as HTMLOutputElement;

const yearRange1 = document.getElementById('year-range1') as HTMLInputElement;
const yearRange2 = document.getElementById('year-range2') as HTMLInputElement;
const yearMin = document.querySelector('.year-min') as HTMLOutputElement;
const yearMax = document.querySelector('.year-max') as HTMLOutputElement;

if (countRange1) {
  countRange1.addEventListener('input', (e: Event) => {
    let step: number = 1;
    if (+countRange1.value >= +countRange2.value) {
      countRange1.value = String(+countRange2.value - step);
    }
    countMin.value = countRange1.value;
    // updateSlider(countRange1,countRange1, countRange2);
  });
}

if (countRange2) {
  countRange2.addEventListener('input', (e: Event) => {
    let step: number = 1;
    if (+countRange2.value <= +countRange1.value) {
      countRange2.value = String(+countRange1.value + step);
    }
    countMax.value = countRange2.value;
    //updateSlider(countRange2,countRange1, countRange2);
  });
}

if (yearRange1) {
  yearRange1.addEventListener('input', (e) => {
    let step: number = 10;
    if (+yearRange1.value >= +yearRange2.value) {
      yearRange1.value = String(+yearRange2.value - step);
    }
    yearMin.value = yearRange1.value;
    // updateSlider(yearRange1,yearRange1, yearRange2);
  });
}

if (yearRange2) {
  yearRange2.addEventListener('input', (e: Event) => {
    let step: number = 10;
    if (+yearRange2.value <= +yearRange1.value) {
      yearRange2.value = String(+yearRange1.value + step);
    }
    yearMax.value = yearRange2.value;
  });
}

/*function updateSlider(target: HTMLInputElement, slider1: HTMLInputElement, slider2: HTMLInputElement) {
  let value1 = (+slider1.value- +slider1.min)/(+slider1.max - +slider1.min) 
  console.log('value1',value1)
  let value2 =  (+slider2.value-+slider2.min)/(+slider2.max - +slider2.min)
  console.log(value2)
   changeProgress(target, value1, value2);
}

function changeProgress(target: HTMLInputElement, value1: number, value2: number ) {
  target.style.background = `linear-gradient(90deg, #fff ${value1}%, #278D9F ${value1}%, #278D9F ${value2}%, #fff 100%)`;
}*/
