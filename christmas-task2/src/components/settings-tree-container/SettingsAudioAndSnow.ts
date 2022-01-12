import { PageTree } from "../../pages/page-tree";
import { TreeContainer } from "../tree/tree";

let isPlay = false;
let isSnow  = false;

export class SettingsAudioAndSnow {
  protected container: HTMLElement;
  protected audio: HTMLAudioElement;
  protected audioControl: HTMLElement;
  protected snowControl: HTMLElement;

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
    this.container.append(this.audioControl, this.snowControl);
    return this.container;
  }
}
