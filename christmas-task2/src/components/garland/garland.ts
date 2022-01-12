import { getLocalStorage } from '../../services/storage';
import './garland.css';

export class GarlandContainer {
  public container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('garland-tree-container');
  }

  public clear(): void {
    this.container.innerHTML = '';
  }

  public renderLightRopes(color: string) {
    this.clear();
    const countLightRopes = 8;
    let width = 30;
    const stepWidth = 50;
    const stepLight = 5;
    let countLight = 5;

    for (let i = 0; i < countLightRopes; i += 1) {
      const lightRopes = <HTMLElement>document.createElement('ul');
      lightRopes.classList.add('light-ropes');
      const angle: number = 100 / countLight;
      let rotate = 40;

      for (let j = 0; j <= countLight; j += 1) {
        const light = <HTMLElement>document.createElement('li');
        light.classList.add('light', color);
        light.style.transform = `rotate(${rotate}deg) translate(${width / 2}px) rotate(-${rotate}deg)`;
        rotate = rotate + angle;
        lightRopes.append(light);
      }
      width = width + stepWidth;
      countLight = countLight + stepLight;
      this.container.append(lightRopes);
    }
  }

  public render(): HTMLElement {
    if (getLocalStorage('isOnGarland')) {
      let color = 'red';

      if (getLocalStorage('garlandColor')) {
        color = <string>getLocalStorage('garlandColor');
      }

      this.renderLightRopes(color);
    }
    return this.container;
  }
}
