import { countRangeMin, countRangeMax } from "../../options/options";
import { RangeSlider } from "../../templates/rangeSlider";

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



