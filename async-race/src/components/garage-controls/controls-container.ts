import { createCar } from '../../api/api';
import { countOfCars } from '../../options/options';
import { createRandomCars, insertElement } from '../../services/services';
import PageGarage from '../../view/garage';
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
      this.generateCars();
   };
  }

  async generateCars() {
   const cars = createRandomCars(countOfCars);
   await Promise.all(cars.map(async car => await createCar(car)));
   await PageGarage.carsContainer.render();
  }
  
  render(): HTMLElement {
    const buttonsContainer = insertElement('div', ['garage-control-buttons'], ''); 
    buttonsContainer.append(this.raceButton, this.resetButton, this.generateButton);
    this.container.append(this.controlsCreate.render(), this.controlsUpdate.render(), buttonsContainer);
    return this.container;
  }
}
