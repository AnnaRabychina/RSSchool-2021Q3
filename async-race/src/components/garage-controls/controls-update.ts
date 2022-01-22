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
    this.buttonUpdate.addEventListener('click', (event: Event) => {
      event.preventDefault();
      this.update();
    });
  }

  async update(): Promise<void> {
    const selectedCar = <ICar>getLocalStorage('selectedCar');
    await updateCar(selectedCar.id, { name: this.inputText.value, color: this.inputColor.value });
    this.setState(true);
    this.setValues('', '#000000');
    await PageGarage.carsContainer.render();
  }

  setState(value: boolean): void {
    this.buttonUpdate.disabled = value;
    this.inputText.disabled = value;
    this.inputColor.disabled = value;
  }

  render(): HTMLElement {
    const title = insertElement('h3', ['page-subtitle'], 'update a car');
    this.container.append(title, this.inputText, this.inputColor, this.buttonUpdate);
    this.setState(true);
    return this.container;
  }
}
