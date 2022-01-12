import { buttonsGarland } from "../../options/options";
import { setLocalStorage } from "../../services/storage";
import { SettingsGarland } from "./SettingsGarland";


export class ButtonsGarland {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('garland-btns');
  }

  renderButtonsGarland(arrButtons: Array<string>): void {
    arrButtons.forEach((button) => {
      const buttonHTML = <HTMLButtonElement>document.createElement('button');
      buttonHTML.classList.add(`${button}-btn`, 'color-btn');
      buttonHTML.dataset.color = button;
      this.container.append(buttonHTML);
    });
  }

  setColorGarland(): void {
    this.container.addEventListener('click', (event: Event) => {
      const target = <HTMLElement>event.target;
      const btn = <HTMLElement>target.closest('.color-btn');
      if (btn) {
        const color = <string>target.dataset.color;
        setLocalStorage('garlandColor', color);
        SettingsGarland.turnOnGarland();
      }
    });
  }

  render(): HTMLElement {
    this.renderButtonsGarland(buttonsGarland);
    this.setColorGarland();
    return this.container;
  }
}

