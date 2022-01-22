import { getCars } from '../api/api';
import { CarsContainer } from '../components/garage-cars/cars-container';
import { ControlsContainer } from '../components/garage-controls/controls-container';
import { insertElement } from '../services/services';
import Page from '../templates/page';

class PageGarage extends Page {
  page: HTMLElement;
  static controlsContainer: ControlsContainer;
  static carsContainer: CarsContainer;

  constructor(id: string) {
    super(id);
    this.page = insertElement('div', ['garage'], '');
    PageGarage.controlsContainer = new ControlsContainer();
    PageGarage.carsContainer = new CarsContainer();
  }

  async render(): Promise<HTMLElement> {
    const controlsContainerHTML = PageGarage.controlsContainer.render();
    const count = (await getCars(1, 7)).count;
    const title = this.createTitle(`garage (${count})`);
    this.page.append(controlsContainerHTML, title, this.createPagination(), await PageGarage.carsContainer.render());
    this.container.append(this.page);
    return this.container;
  }
}

export default PageGarage;
