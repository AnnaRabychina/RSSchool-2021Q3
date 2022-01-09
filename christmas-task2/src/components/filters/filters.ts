import { buttonsColor, buttonsShape, buttonsSize, countRangeMax, countRangeMin, ICard, yearRangeMax, yearRangeMin } from '../../options/options';
import PageToys from '../../pages/page-toys';
import FilterToys from '../../templates/filterToys';
import { RangeSlider } from '../../templates/rangeSlider';
import { getLocalStorage, setLocalStorage } from '../storage/storage';


export const createSet = (keyStorage: string): Set<string> =>  {
  return getLocalStorage(keyStorage) 
    ? new Set<string>(<string[]>getLocalStorage(keyStorage))
    : new Set<string>();
};

const selectedShapes = createSet('selectedShapes');
const selectedColors = createSet('selectedColors');
const selectedSizes = createSet('selectedSizes');
const isFavorite = getLocalStorage('isFavorite'); 

export class FilterShape extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('shape');
  }

  render(): HTMLElement {
    this.renderButtons(buttonsShape, selectedShapes, 'shape', this.container);
    this.setFilterToys(selectedShapes, 'shape', 'selectedShapes');
    return this.container;
  }
}

export class FilterColor extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('color');
  }

  render(): HTMLElement {
    this.renderButtons(buttonsColor, selectedColors, 'color', this.container);
    this.setFilterToys(selectedColors, 'color', 'selectedColors');
    return this.container;
  }
}

export class FilterSize extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('size');
  }

  render(): HTMLElement {
    this.renderButtons(buttonsSize, selectedSizes, 'size', this.container);
    this.setFilterToys(selectedSizes, 'size', 'selectedSizes');
    return this.container;
  }
}

export class FilterFavorite {
  container: HTMLElement;
  favoriteInput: HTMLInputElement;
  
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('favorite-container');
    this.favoriteInput = document.createElement('input');
    this.favoriteInput.classList.add('favorite-input');
    this.favoriteInput.type = 'checkbox';
    this.favoriteInput.id = 'checkbox';
    this.favoriteInput.onclick = () => {
      this.setFilterFavorite();
    };
  }

  setFilterFavorite(): void {
    setLocalStorage('isFavorite', this.favoriteInput.checked ? 'true' : '');
    PageToys.renderNewCardsContainer();
  }

  render(): HTMLElement {
    const label = document.createElement('label');
    label.setAttribute('for', 'checkbox');
    label.classList.add('favorite-input-label');
    if (isFavorite) {
      this.favoriteInput.checked = true ;
    } 
    this.container.append(this.favoriteInput, label);
    return this.container;
  }
}

export class CountRange extends RangeSlider {
  sliderContainer: HTMLElement;
  minOutput: HTMLOutputElement;
  maxOutput: HTMLOutputElement;
  rangeInputMin: HTMLInputElement;
  rangeInputMax: HTMLInputElement;
 
  constructor() {
    super();
    this.container.classList.add('count');
    this.sliderContainer = document.createElement('div');
    this.sliderContainer.classList.add('count-slider-container');
    this.rangeInputMin = this.renderInput(countRangeMin, 'minCount');
    this.rangeInputMin.addEventListener('input', () =>{
      this.updateRange(this.rangeInputMin, this.rangeInputMax, this.minOutput, this.maxOutput);
      this.setRange('minCount', this.rangeInputMin.value);
    });
    this.rangeInputMax = this.renderInput(countRangeMax, 'maxCount');
    this.rangeInputMax.addEventListener('input', () =>{
      this.updateRange(this.rangeInputMin, this.rangeInputMax, this.minOutput, this.maxOutput);
      this.setRange('maxCount', this.rangeInputMax.value)
    });
    this.minOutput = this.renderOutput(['count-min'], this.rangeInputMin.value);
    this.maxOutput = this.renderOutput(['count-max'], this.rangeInputMax.value);
  }

  render(): HTMLElement {
    const containerInputs = document.createElement('div');
    containerInputs.classList.add('container-slider');
    containerInputs.append(this.rangeInputMin, this.rangeInputMax);
    this.sliderContainer.append(this.minOutput, containerInputs, this.maxOutput);
    this.container.append(this.sliderContainer);
    return this.container;
  }
}

export class YearRange extends RangeSlider {
  sliderContainer: HTMLElement;
  minOutput: HTMLOutputElement;
  maxOutput: HTMLOutputElement;
  rangeInputMin: HTMLInputElement;
  rangeInputMax: HTMLInputElement;

  constructor() {
    super();
    this.container.classList.add('year');
    this.sliderContainer = document.createElement('div');
    this.sliderContainer.classList.add('year-slider-container');
    this.rangeInputMin = this.renderInput(yearRangeMin, 'minYear');
    this.rangeInputMin.addEventListener('input', () => {
      this.updateRange(this.rangeInputMin, this.rangeInputMax, this.minOutput, this.maxOutput);
      this.setRange('minYear', this.rangeInputMin.value);
    });
    this.rangeInputMax = this.renderInput(yearRangeMax, 'maxYear');
    this.rangeInputMax.addEventListener('input', () => {
      this.updateRange(this.rangeInputMin, this.rangeInputMax, this.minOutput, this.maxOutput);
      this.setRange('maxYear', this.rangeInputMax.value);
    });
    this.minOutput = this.renderOutput(['year-min'], this.rangeInputMin.value);
    this.maxOutput = this.renderOutput(['year-max'], this.rangeInputMax.value);
  }

  render(): HTMLElement {
    const containerInputs = document.createElement('div');
    containerInputs.classList.add('container-slider');
    containerInputs.append(this.rangeInputMin, this.rangeInputMax);
    this.sliderContainer.append(this.minOutput, containerInputs, this.maxOutput);
    this.container.append(this.sliderContainer);
    return this.container;
  }
}

export function filterData(): ICard[] | [] {
  const currentData = <ICard[] | [] > getLocalStorage('currentData');
  const filterShapes = <string[] | ''>getLocalStorage('selectedShapes');
  const filterColors = <string[] | ''>getLocalStorage('selectedColors');
  const filterSizes = <string[] | ''>getLocalStorage('selectedSizes');
  const isFavorite = <string | ''>getLocalStorage('isFavorite');
  const minCount = <string | ''>getLocalStorage('minCount');
  const maxCount = <string | ''>getLocalStorage('maxCount');
  const minYear = <string | ''>getLocalStorage('minYear');
  const maxYear = <string | ''>getLocalStorage('maxYear');

  const newData = currentData.filter((el: ICard) => {
    return (
      (filterShapes ? filterShapes.includes(el.shape) : true) &&
      (filterColors ? filterColors.includes(el.color) : true) &&
      (filterSizes ?  filterSizes.includes(el.size) : true) &&
      (isFavorite ? `${el.favorite}` === isFavorite : true) &&
      (minCount ? +el.count >= +minCount : +el.count >= 1) &&
      (maxCount ? +el.count <= +maxCount : +el.count <= 12)&&
      (minYear ? +el.year >= +minYear : +el.year >= 1940) &&
      (maxYear ? +el.year <= +maxYear : +el.year <= 2020)
    );
  });

  return newData;
}
