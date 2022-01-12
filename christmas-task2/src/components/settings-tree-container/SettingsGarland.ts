import { labelHTMLContent } from "../../options/options";
import { setLocalStorage, getLocalStorage } from "../../services/storage";
import { TreeContainer } from "../tree/tree";
import { ButtonsGarland } from "./buttonsGagland";


export class SettingsGarland {
  container: HTMLElement;
  buttonsGarland: ButtonsGarland;
  garlandInput: HTMLInputElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('garland-container', 'menu-container');
    this.buttonsGarland = new ButtonsGarland();
    this.garlandInput = document.createElement('input');
    this.garlandInput.classList.add('on-switch-checkbox');
    this.garlandInput.type = 'checkbox';
    this.garlandInput.name = 'on-switch';
    this.garlandInput.id = 'garland-on-switch';
    this.garlandInput.onclick = () => {
      this.setGarland();
    };
  }

  setGarland(): void {
    setLocalStorage('isOnGarland', this.garlandInput.checked ? 'true' : '');
    SettingsGarland.turnOnGarland();
  }

  static turnOnGarland(): void {
    if (getLocalStorage('isOnGarland')) {
      TreeContainer.garlandContainer.render();
    } else {
      TreeContainer.garlandContainer.clear();
    }
  }

  renderInputContainer(): HTMLElement {
    if (getLocalStorage('isOnGarland')) {
      this.garlandInput.checked = true;
    } else {
      this.garlandInput.checked = false;
    }
    const garlandInputContainer = <HTMLElement>document.createElement('div');
    garlandInputContainer.classList.add('on-switch');
    garlandInputContainer.append(this.garlandInput);
    const label = <HTMLLabelElement>document.createElement('label');
    label.classList.add('on-switch-label');
    label.setAttribute('for', 'garland-on-switch');
    label.innerHTML = labelHTMLContent;
    garlandInputContainer.append(label);
    return garlandInputContainer;
  }

  render(): HTMLElement {
    const buttonsGarlandHTML = this.buttonsGarland.render();
    const inputContainerHTML = this.renderInputContainer();
    this.container.append(buttonsGarlandHTML, inputContainerHTML);
    return this.container;
  }
}