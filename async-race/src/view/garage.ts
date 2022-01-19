import { getCars, ICar, IGetData } from '../api/api';
import Page from '../templates/page';

class PageGarage extends Page {
  page: HTMLElement;

  constructor(id: string) {
    super(id);
    this.page = document.createElement('div');
    this.page.classList.add('garage');
  }

  protected renderOption(): HTMLElement {
    const options = document.createElement('div');
    options.classList.add('garage-option');
    options.innerHTML = `
      <div class="garage-form-create">
        <h3 class="page-subtitle">create a car</h3>
        <input class= "input-text" type="text">
        <input class= "input-color" type="color" value="#000000">
        <button class="btn btn-create"> create </button>
      </div>
      <div class="garage-form-update">
        <h3 class="page-subtitle">update a car</h3>
        <input class= "input-text" type="text">
        <input class= "input-color" type="color" value="#000000">
        <button class="btn btn-update"> update </button>
      </div>
      <div class="garage-control-buttons">
        <h3 class="page-subtitle">all cars actions</h3>
        <button class="btn btn-options btn-race"> race </button>
        <button class="btn btn-options btn-reset"> reset </button>
        <button class="btn btn-options btn-generate"> generate cars </button>
      </div>
    `;
    return options;
  }

  protected createItemCar(name: string, color: string, id: number): string {
    let car = `
    <li class="garage-car">
      <div class="car-header">
        <button class="btn btn-control btn-select" id="select-${id}"> select </button>
        <button class="btn btn-control btn-remove" id="remove-${id}"> remove </button>
        <h3 class="page-subtitle car-title">${name}</h3>
      </div>
      <div class="car-race">
        <div class="car-control">
          <button class="btn btn-start"> start </button>
          <button class="btn btn-stop"> stop </button>
        </div>
        ${this.renderCarImage(color)}
      <img class="flag" src="./../assets/svg/flag.svg" alt="flag">
    </div>
  </li>`;
    return car;
  }

  async renderCars(): Promise<HTMLUListElement> {
    const carsContainer = document.createElement('ul');
    carsContainer.classList.add('garage-cars');
    let carsItems: ICar[] = <ICar[]>(await getCars(1, 7)).items;
    let arrCars: ICar[] = [...carsItems];
    let carsContainerHTML = '';
    arrCars.forEach((carsItem) => {
      carsContainerHTML += this.createItemCar(carsItem.name, carsItem.color, carsItem.id);
    });

    carsContainer.innerHTML = carsContainerHTML;
    return carsContainer;
  }

    async render(): Promise<HTMLElement> {
    const count = (await getCars()).count;
    const title = this.createTitle(`garage (${count})`);
    this.page.append(this.renderOption(), title, this.createPagination(), await this.renderCars());
    this.container.append(this.page);
    return this.container;
  }
}

export default PageGarage;
