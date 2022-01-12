import './tree.css';
import { GarlandContainer } from '../garland/garland';
import { handleDrop } from '../../services/services';
import { areaCoords } from '../../options/options';
import { getLocalStorage } from '../../services/storage';

export class TreeContainer {
  public container: HTMLElement;
  static snowContainer: HTMLElement;
  static garlandContainer: GarlandContainer;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('main-tree-container');
    this.container.addEventListener('drop', handleDrop);
    this.container.addEventListener('dragover', (event: DragEvent) => {
      event.preventDefault();
    });

    TreeContainer.snowContainer = document.createElement('div');
    TreeContainer.snowContainer.classList.add('snow-container', 'hide');
    TreeContainer.garlandContainer = new GarlandContainer();
  }

  private renderTreeContainer(): void {
    this.clear();
    this.container.append(TreeContainer.snowContainer);
    this.container.append(TreeContainer.garlandContainer.render());

    let numImgTree = 1;
    let numBgTree = 1;

    if (getLocalStorage('numImgTree')) {
      numImgTree = Number(getLocalStorage('numImgTree'));
    }

    if (getLocalStorage('numBgTree')) {
      numBgTree = Number(getLocalStorage('numBgTree'));
    }

    const map = document.createElement('map') as HTMLMapElement;
    map.name = 'tree-map';
    const area = document.createElement('area') as HTMLAreaElement;
    area.coords = areaCoords;
    area.shape = 'poly';
    area.addEventListener('dragover', (event: DragEvent) => {
      event.preventDefault();
    });
    map.append(area);
    area.classList.add('drop-area');
    const treeImg = document.createElement('img') as HTMLImageElement;
    treeImg.classList.add('main-tree');
    treeImg.src = `assets/tree/${numImgTree}.png`;
    treeImg.alt = 'tree';
    treeImg.useMap = '#tree-map';
    this.container.style.backgroundImage = `url(../assets/bg/${numBgTree}.jpg)`;
    this.container.append(map, treeImg);
  }

  private clear(): void {
    this.container.innerHTML = '';
  }

  render(): HTMLElement {
    this.renderTreeContainer();
    return this.container;
  }
}
