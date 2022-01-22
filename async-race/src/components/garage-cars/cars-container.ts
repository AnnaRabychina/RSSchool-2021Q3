import { getCar, getCars, ICar } from "../../api/api";
import { renderCars } from "../../services/render-cars";
import { insertElement } from "../../services/services";
import { setLocalStorage } from "../../services/storage";
import PageGarage from "../../view/garage";

export class CarsContainer {
  container: HTMLUListElement;

  constructor() {
    this.container = <HTMLUListElement>insertElement('ul', ['garage-cars'], '')
  }

  private selectCar() {
    this.container.addEventListener('click', async (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('btn-select')) {
        let selectedCar = await getCar(Number(target.dataset.select));
        setLocalStorage('selectedCar', selectedCar);
        PageGarage.controlsContainer.controlsUpdate.setState(false);
        PageGarage.controlsContainer.controlsUpdate.setValues(selectedCar.name, selectedCar.color);
      }
    });
  }

  async render(): Promise<HTMLElement> {
    let carsItems: ICar[] = <ICar[]>(await getCars(1, 7)).items;
    let arrCars: ICar[] = [...carsItems];
    this.container.innerHTML = renderCars(arrCars);
    this.selectCar();
    return this.container;
  }
}