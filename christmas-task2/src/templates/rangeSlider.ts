import { IRangeSlider } from '../options/options';

export class RangeSlider{
  container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
  }

  renderInput(rangeProperty: IRangeSlider): HTMLInputElement {
    const itemInput = document.createElement('input');
    itemInput.classList.add(...rangeProperty.stiles);
    itemInput.type = 'range';
    itemInput.min = rangeProperty.min;
    itemInput.max = rangeProperty.max;
    itemInput.step = rangeProperty.step;
    itemInput.value = rangeProperty.value;
    return itemInput;
  }

  renderOutput(className: string[], value: string): HTMLOutputElement {
    const itemOutput = document.createElement('output');
    itemOutput.classList.add(...className);
    itemOutput.value = value;
    return itemOutput;
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