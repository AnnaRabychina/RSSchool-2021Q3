import { insertElement } from '../../services/services';
import { ControlsCreate } from './controls-create';
import { ControlsUpdate } from './controls-update';

export class ControlsContainer {
  protected container: HTMLElement;
  protected controlsCreate: ControlsCreate;
  public controlsUpdate: ControlsUpdate;
  protected raceButton: HTMLButtonElement;
  protected resetButton: HTMLButtonElement;
  protected generateButton: HTMLButtonElement;

  constructor() {
    this.container = insertElement ('div', ['garage-controls'], ''); 
    this.controlsCreate = new ControlsCreate();
    this.controlsUpdate = new ControlsUpdate();
    this.raceButton = <HTMLButtonElement>insertElement('button', ['btn', 'btn-options', 'btn-race'], 'race');
    this.resetButton = <HTMLButtonElement>insertElement('button', ['btn', 'btn-options', 'btn-reset'], 'reset');
    this.generateButton = <HTMLButtonElement>(
      insertElement('button', ['btn', 'btn-options', 'btn-generate'], 'generate')
    );
    this.generateButton.onclick = () => {
   };
  }

  render(): HTMLElement {
    const buttonsContainer = insertElement('div', ['garage-control-buttons'], ''); 
    buttonsContainer.append(this.raceButton, this.resetButton, this.generateButton);
    this.container.append(this.controlsCreate.render(), this.controlsUpdate.render(), buttonsContainer);
    return this.container;
  }
}
