import { PageTree } from '../../pages/page-tree';
import SettingsMenu from '../../templates/settingsMenu';
import { TreeContainer } from '../tree/tree';

let isPlay = false;
let isSnow = false;

export class SettingsMenuContainer {
  private settingsTree: SettingsTree;
  private settingsBg: SettingsBg;
  private settingsAudioAndSnow: SettingsAudioAndSnow;
  private container: HTMLElement;
  private resetButton: HTMLButtonElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('favorites-menu');
    this.settingsAudioAndSnow = new SettingsAudioAndSnow();
    this.settingsTree = new SettingsTree();
    this.settingsBg = new SettingsBg();
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
  }

  render(): HTMLElement {
    const settingsAudioAndSnowHTML = this.settingsAudioAndSnow.render();
    this.container.append(settingsAudioAndSnowHTML);
    const settingsTreeHTML = this.settingsTree.render();
    this.container.append(settingsTreeHTML);
    const settingsBgHTML = this.settingsBg.render();
    this.container.append(settingsBgHTML);
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

  createSnow() {
    if (!isSnow) {
      TreeContainer.snowContainer.classList.remove('hide');
      PageTree.snowInterval = setInterval(() =>{
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

  createSnowFlake() {
    const snowFlake = document.createElement('i');
    snowFlake.style.animationDuration = String(Math.random()* 3 + 2) + 's'; 
    snowFlake.style.opacity = String(Math.random())
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

  render() {
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

  render() {
    this.setSettings('bg', 'numBgTree');
    this.renderItems(10, ['bg', 'menu-item'], 'bg', this.container);
    return this.container;
  }
}
