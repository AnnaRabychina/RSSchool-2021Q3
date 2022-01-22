import { getCar, getCars, ICar } from "../../api/api";
import { createItemCar } from "../../services/render-car";
import { insertElement } from "../../services/services";
import { setLocalStorage } from "../../services/storage";
import PageGarage from "../../view/garage";

export class CarsContainer {
  container: HTMLUListElement;

  constructor() {
    this.container = <HTMLUListElement>insertElement('ul', ['garage-cars'], '')
  }

  renderCars(arrCars: ICar[]): string {
    let carsContainerHTML = '';
    arrCars.forEach((carsItem) => {
      carsContainerHTML += createItemCar(carsItem.name, carsItem.color, carsItem.id);
    });
    return carsContainerHTML;
  }

  private selectCar() {
    this.container.addEventListener('click', async (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('btn-select')) {
        let selectedCar = await getCar(Number(target.dataset.select));
        setLocalStorage('selectedCar', selectedCar);
        PageGarage.controlsContainer.controlsUpdate.inputText.disabled = false;
        PageGarage.controlsContainer.controlsUpdate.inputColor.disabled = false;
        PageGarage.controlsContainer.controlsUpdate.buttonUpdate.disabled = false;
        PageGarage.controlsContainer.controlsUpdate.inputText.value = selectedCar.name;
        PageGarage.controlsContainer.controlsUpdate.inputColor.value = selectedCar.color;
      }
    });
  }

  async render(): Promise<HTMLElement> {
    let carsItems: ICar[] = <ICar[]>(await getCars(1, 7)).items;
    let arrCars: ICar[] = [...carsItems];
    this.container.innerHTML = await this.renderCars(arrCars);
    this.selectCar();
    return this.container;
  }
}