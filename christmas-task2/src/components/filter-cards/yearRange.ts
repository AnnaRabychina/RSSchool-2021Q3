import { yearRangeMin, yearRangeMax } from "../../options/options";
import { RangeSlider } from "../../templates/rangeSlider";

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

