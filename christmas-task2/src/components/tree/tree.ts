import  './tree.css';
import { getLocalStorage } from '../storage/storage';

export class TreeContainer {
  public container: HTMLElement;
  static snowContainer: HTMLElement;
  static garlandContainer: GarlandContainer;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('main-tree-container');
    TreeContainer.snowContainer = document.createElement('div');
    TreeContainer.snowContainer.classList.add('snow-container', 'hide');
    TreeContainer.garlandContainer = new GarlandContainer();
  }

  private renderTreeContainer() {
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

    const treeImg = document.createElement('img') as HTMLImageElement;
    treeImg.classList.add('main-tree');
    treeImg.src = `assets/tree/${numImgTree}.png`;
    treeImg.alt = 'tree';
    treeImg.useMap = '#tree-map';
    this.container.style.backgroundImage = `url(../assets/bg/${numBgTree}.jpg)`;
    this.container.append(treeImg);
    const map = document.createElement('map') as HTMLMapElement;
    map.name = 'tree-map';
    const area = document.createElement('area') as HTMLAreaElement;
    area.coords =
      '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664';
    area.shape = 'poly';
    map.append(area);
    this.container.append(map);
  }

  private clear(): void {
    this.container.innerHTML = '';
  }

  render(): HTMLElement {
    this.renderTreeContainer();
    return this.container;
  }
}

export class GarlandContainer {
  public container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('garland-tree-container', 'hide');
  }

  public clear(): void {
    this.container.innerHTML = '';
  }

  public createLightRopes(color: string) {
    this.clear();
    let countLightRopes = 8;
    let width = 30;
    let step = 50;
    let countLight = 5;

    for (let i = 0; i < countLightRopes; i++) {
      const lightRopes: HTMLElement = document.createElement('ul');
      lightRopes.classList.add('lightropes');
      let angle = 100 / countLight;
      let rotate = 40;

      for (let i = 0; i <= countLight; i++) {
        const light: HTMLElement = document.createElement('li');
        light.classList.add('light', color);
        light.style.transform = `rotate(${rotate}deg) translate(${width / 2}px) rotate(-${rotate}deg)`;
        rotate = rotate + angle;
        lightRopes.append(light);
      }
      width = width + step;
      countLight = countLight + 5;
      this.container.append(lightRopes);
    }
  }

  public render(): HTMLElement {
   // this.createLightRopes('red');
    return this.container;
  }
}
