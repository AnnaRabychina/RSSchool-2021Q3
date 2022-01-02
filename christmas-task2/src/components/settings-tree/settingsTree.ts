import './settingsTree.css';
import { PageTree } from '../../pages/page-tree';
import SettingsMenu from '../../templates/settingsMenu';
import { TreeContainer } from '../tree/tree';
import { getLocalStorage, setLocalStorage } from '../storage/storage';
import { changeProperty } from '../cards/cards';

const buttonsGarland = ['red', 'blue', 'yellow', 'green', 'multicolor'];
let isPlay = false;
let isSnow = false;

export class SettingsMenuContainer {
  private settingsTree: SettingsTree;
  private settingsBg: SettingsBg;
  private settingsAudioAndSnow: SettingsAudioAndSnow;
  private container: HTMLElement;
  private resetButton: HTMLButtonElement;
  private settingsGarland: SettingsGarland;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('settings-tree-menu');
    this.settingsAudioAndSnow = new SettingsAudioAndSnow();
    this.settingsTree = new SettingsTree();
    this.settingsBg = new SettingsBg();
    this.settingsGarland = new SettingsGarland();
    this.resetButton = document.createElement('button');
    this.resetButton.classList.add('reset-button');
    this.resetButton.innerText = 'Сброс настроек';
    this.resetButton.onclick = () => {
      this.resetSettings();
    };
  }

  resetSettings() {
    localStorage.removeItem('numBgTree');
    localStorage.removeItem('numImgTree');
    PageTree.treeContainer.render();
    TreeContainer.garlandContainer.clear();
    TreeContainer.snowContainer.classList.add('hide');
  }

  render(): HTMLElement {
    const settingsAudioAndSnowHTML = this.settingsAudioAndSnow.render();
    this.container.append(settingsAudioAndSnowHTML);
    const settingsTreeHTML = this.settingsTree.render();
    this.container.append(settingsTreeHTML);
    const settingsBgHTML = this.settingsBg.render();
    this.container.append(settingsBgHTML);
    const settingsGarlandHTML = this.settingsGarland.render();
    this.container.append(settingsGarlandHTML);
    this.container.append(this.resetButton);
    return this.container;
  }
}

export class SettingsAudioAndSnow {
  container: HTMLElement;
  audio: HTMLAudioElement;
  audioControl: HTMLElement;
  snowControl: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('menu-container');
    this.audio = document.createElement('audio');
    this.audio.src = 'assets/audio/audio.mp3';
    this.audioControl = document.createElement('div');
    this.audioControl.classList.add('audio-control', 'menu-item');
    this.audioControl.onclick = () => {
      this.playAudio();
    };
    this.snowControl = document.createElement('div');
    this.snowControl.classList.add('snow-control', 'menu-item');
    this.snowControl.onclick = () => {
      this.createSnow();
    };
  }

  playAudio(): void {
    if (!isPlay) {
      this.audio.currentTime = 0;
      this.audio.play();
      isPlay = true;
      this.audioControl.classList.add('active');
    } else {
      this.audio.pause();
      isPlay = false;
      this.audioControl.classList.remove('active');
    }
  }

  createSnow(): void {
    if (!isSnow) {
      TreeContainer.snowContainer.classList.remove('hide');
      PageTree.snowInterval = setInterval(() => {
        this.createSnowFlake();
        this.snowControl.classList.add('active');
        isSnow = true;
      }, 100);
    } else {
      clearInterval(PageTree.snowInterval);
      this.snowControl.classList.remove('active');
      TreeContainer.snowContainer.classList.add('hide');
      isSnow = false;
    }
  }

  createSnowFlake(): void {
    const snowFlake: HTMLElement = document.createElement('i');
    snowFlake.style.animationDuration = String(Math.random() * 3 + 2) + 's';
    snowFlake.style.opacity = String(Math.random());
    TreeContainer.snowContainer.append(snowFlake);
  }

  render(): HTMLElement {
    this.container.append(this.audioControl);
    this.container.append(this.snowControl);
    return this.container;
  }
}

export class SettingsTree extends SettingsMenu {
  constructor() {
    super();
    this.container.classList.add('tree-container', 'menu-container');
  }

  render(): HTMLElement {
    this.setSettings('tree', 'numImgTree');
    this.renderItems(6, ['tree', 'menu-item'], 'tree', this.container);
    return this.container;
  }
}

export class SettingsBg extends SettingsMenu {
  constructor() {
    super();
    this.container.classList.add('bg-container', 'menu-container');
  }

  render(): HTMLElement {
    this.setSettings('bg', 'numBgTree');
    this.renderItems(10, ['bg', 'menu-item'], 'bg', this.container);
    return this.container;
  }
}

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

  setGarland() {
    setLocalStorage('isOnGarland', this.garlandInput.checked ? 'true' : '');
    if (!this.garlandInput.checked) {
      TreeContainer.garlandContainer.clear();
    }
  }

  renderInputContainer() {
    let isOnGarland = getLocalStorage('isOnGarland');
    if (isOnGarland) {
      this.garlandInput.checked = true;
    } else {
      this.garlandInput.checked = false;
    }
    const garlandInputContainer = document.createElement('div');
    garlandInputContainer.classList.add('on-switch');
    garlandInputContainer.append(this.garlandInput);
    const label = document.createElement('label');
    label.classList.add('on-switch-label');
    label.setAttribute('for', 'garland-on-switch');
    label.innerHTML = `
      <label class="on-switch-label" for="garland-on-switch">
      <div class="on-switch-inner"></div>
      <div class="on-switch-switch"></div>
      </label> 
    `;
    garlandInputContainer.append(label);
    return garlandInputContainer;
  }

  render(): HTMLElement {
    const buttonsGarlandHTML = this.buttonsGarland.render();
    this.container.append(buttonsGarlandHTML);
    const inputContainerHTML = this.renderInputContainer();
    this.container.append(inputContainerHTML);
    return this.container;
  }
}

export class ButtonsGarland {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('garland-btns');
  }

  renderButtonsGarland(arrButtons: Array<string>) {
    arrButtons.forEach((button) => {
      const buttonHTML: HTMLButtonElement = document.createElement('button');
      buttonHTML.classList.add(`${button}-btn`, 'color-btn');
      buttonHTML.dataset.color = button;
      this.container.append(buttonHTML);
    });
  }

  turnOnGarland(color: string): void {
    let isOnGarland = getLocalStorage('isOnGarland');
    if (isOnGarland) {
      PageTree.renderNewGarland(color);
    } else {
      TreeContainer.garlandContainer.clear();
    }
  }

  setColorGarland() {
    this.container.addEventListener('click', (event: Event) => {
      let target = event.target as HTMLElement;
      let btn = target.closest('.color-btn') as HTMLElement;
      if (btn) {
        let color = target.dataset.color as string;
        this.turnOnGarland(color);
      }
    });
  }

  render(): HTMLElement {
    this.renderButtonsGarland(buttonsGarland);
    this.setColorGarland();
    return this.container;
  }
}
