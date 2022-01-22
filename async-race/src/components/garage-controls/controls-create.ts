import { insertElement } from '../../services/services';
import ControlItem from '../../templates/controls-item';

export class ControlsCreate extends ControlItem {
  buttonCreate: HTMLButtonElement;

  constructor() {
    super();
    this.container.classList.add('garage-form-create');
    this.buttonCreate = <HTMLButtonElement>insertElement('button', ['btn', 'btn-create'], 'create');
  }

  render() {
    const title = insertElement('h3', ['page-subtitle'], 'create a car');
    this.container.append(title, this.inputText, this.inputColor, this.buttonCreate);
    return this.container;
  }
}
