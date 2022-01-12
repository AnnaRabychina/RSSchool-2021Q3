import { IRangeSlider } from '../options/options';
import PageToys from '../pages/page-toys';
import { getLocalStorage, setLocalStorage } from '../services/storage';

export class RangeSlider{
  container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
  }

  renderInput(rangeProperty: IRangeSlider, keyStorage: string): HTMLInputElement {
    const value = <string | ''>getLocalStorage(keyStorage);
    const itemInput = document.createElement('input');
    itemInput.classList.add(...rangeProperty.stiles);
    itemInput.type = 'range';
    itemInput.min = rangeProperty.min;
    itemInput.max = rangeProperty.max;
    itemInput.step = rangeProperty.step;
    itemInput.value = value ? value : rangeProperty.value;
    return itemInput;
  }

  renderOutput(className: string[], value: string): HTMLOutputElement {
    const itemOutput = document.createElement('output');
    itemOutput.classList.add(...className);
    itemOutput.value = value;
    return itemOutput;
  }

  setRange(keyProperty: string, value: string): void {
    setLocalStorage(keyProperty, value);
    PageToys.renderNewCardsContainer();
  }

  updateRange(range1: HTMLInputElement, range2:HTMLInputElement, 
    minOutput: HTMLOutputElement, maxOutput: HTMLOutputElement): void {

    if (+range1.value >= +range2.value) {
      range1.value = range2.value;
    }

    if (+range2.value <= +range1.value) {
      range2.value = range1.value;
    }

    maxOutput.value = range2.value;
    minOutput.value = range1.value;
  }

  render(): HTMLElement {
    return this.container;
  }
}