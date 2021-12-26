import { insertElement } from '../cards/cards';
import { getLocalStorage } from '../storage/storage';

export class TreeContainer {
  public container: HTMLElement;
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('main-tree-container');
  }

  private renderTreeContainer() {
    this.clear();
    let numImgTree = 1;
    let numBgTree = 1;
    if (getLocalStorage('numImgTree')) {
      numImgTree = Number(getLocalStorage('numImgTree'))
    }
    if (getLocalStorage('numBgTree')) {
      numBgTree = Number(getLocalStorage('numBgTree'))
    }

   const treeImg = document.createElement('img') as HTMLImageElement;
   treeImg.classList.add('main-tree');
   treeImg.src = `assets/tree/${numImgTree}.png`;
    treeImg.alt = 'tree';
    this.container.style.backgroundImage = `url(../assets/bg/${numBgTree}.jpg)`;
    this.container.append(treeImg);
  }

  private clear(): void {
    this.container.innerHTML = '';
  }

  render(): HTMLElement {
    this.renderTreeContainer();
    return this.container;
  }
}
