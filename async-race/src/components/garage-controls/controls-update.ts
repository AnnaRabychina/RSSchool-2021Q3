import { ICar, updateCar } from '../../api/api';
import { insertElement } from '../../services/services';
import { getLocalStorage } from '../../services/storage';
import ControlItem from '../../templates/controls-item';
import PageGarage from '../../view/garage';

export class ControlsUpdate extends ControlItem {
  buttonUpdate: HTMLButtonElement;

  constructor() {
    super();
    this.container.classList.add('garage-form-update');
    this.buttonUpdate = <HTMLButtonElement>insertElement('button', ['btn', 'btn-update'], 'update');
    this.buttonUpdate.disabled = true;
    this.buttonUpdate.addEventListener('click', (event: Event) => {
      event.preventDefault();
      this.UpdateCar();
    });
  }

  async UpdateCar() {
    const selectedCar = <ICar>getLocalStorage('selectedCar'); 
    await updateCar(selectedCar.id, { name: this.inputText.value, color: this.inputColor.value });
    this.inputText.disabled = true;
    this.inputColor.disabled = true;
    this.buttonUpdate.disabled = true;
    this.inputColor.value = '#000000';
    this.inputText.value = '';
    await PageGarage.carsContainer.render();
  }

  render(): HTMLElement {
    const title = insertElement('h3', ['page-subtitle'], 'update a car');
    this.container.append(title, this.inputText, this.inputColor, this.buttonUpdate);
    return this.container;
  }
}
