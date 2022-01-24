import { createCar } from '../../api/api';
import { insertElement } from '../../services/services';
import ControlItem from '../../templates/controls-item';
import PageGarage from '../../view/garage';

export class ControlsCreate extends ControlItem {
  buttonCreate: HTMLButtonElement;

  constructor() {
    super();
    this.container.classList.add('garage-form-create');
    this.buttonCreate = <HTMLButtonElement>insertElement('button', ['btn', 'btn-create'], 'create');
    this.buttonCreate.addEventListener('click', (event: Event) => {
      event.preventDefault();
      this.create();
    });
  }

  async create(): Promise<void> {
    await createCar({ name: this.inputText.value, color: this.inputColor.value });
    this.setValues('', '#000000');
    await PageGarage.carsContainer.render();
  }

  render(): HTMLElement {
    const title = insertElement('h3', ['page-subtitle'], 'create a car');
    this.container.append(title, this.inputText, this.inputColor, this.buttonCreate);
    return this.container;
  }
}
