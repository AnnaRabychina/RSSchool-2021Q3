import {
  deleteCar, getCar, getCars, ICar, stopEngine
} from '../../api/api';
import { getDistance } from '../../services/get-distance';
import { getTime } from '../../services/get-time';
import { moveCar } from '../../services/move-car';
import { renderCars } from '../../services/render-cars';
import { insertElement } from '../../services/services';
import { setLocalStorage } from '../../services/storage';
import PageGarage from '../../view/garage';

let animationId: number;

export class CarsContainer {
  container: HTMLUListElement;

  constructor() {
    this.container = <HTMLUListElement>insertElement('ul', ['garage-cars'], '');
  }

  private selectCar(): void {
    this.container.addEventListener('click', async (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('btn-select')) {
        const selectedCar = await getCar(Number(target.dataset.select));
        setLocalStorage('selectedCar', selectedCar);
        PageGarage.controlsContainer.controlsUpdate.setState(false);
        PageGarage.controlsContainer.controlsUpdate.setValues(selectedCar.name, selectedCar.color);
      }
    });
  }

  private removeCar(): void {
    this.container.addEventListener('click', async (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('btn-remove')) {
        await deleteCar(Number(target.dataset.remove));
        await PageGarage.carsContainer.render();
      }
    });
  }

  private startDrivingCar(): void {
    this.container.addEventListener('click', async (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (target.classList.contains('btn-start')) {
        target.disabled = true;
        const id = Number(target.dataset.start);
        const time = await getTime(id);
        const distance = getDistance(id);
        animationId = moveCar(id, distance, time);
      }
    });
  }

  private stopDrivingCar(): void {
    this.container.addEventListener('click', async (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('btn-stop')) {
        const id = Number(target.dataset.stop);
        await stopEngine(id);
        const car = document.querySelector(`[data-car ='${id}']`) as HTMLElement;
        window.cancelAnimationFrame(animationId);
        car.style.transform = 'translateX(0)';
      }
    });
  }

  async render(): Promise<HTMLElement> {
    const carsItems: ICar[] = <ICar[]>(await getCars(1, 7)).items;
    const arrCars: ICar[] = [...carsItems];
    this.container.innerHTML = renderCars(arrCars);
    this.selectCar();
    this.removeCar();
    this.startDrivingCar();
    this.stopDrivingCar();
    return this.container;
  }
}
