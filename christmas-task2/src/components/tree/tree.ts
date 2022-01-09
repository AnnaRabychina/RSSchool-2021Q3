import './tree.css';
import { getLocalStorage } from '../storage/storage';
import { coordinateX, coordinateY } from '../favorites/favorites';


const updateCounter = (num: string): void => {
  const counter = document.querySelector(`.favorites-card[data-num = "${num}"] .favorites-count`) as HTMLElement;
  const toys = document.querySelectorAll(`.favorites-card[data-num = "${num}"] .favorites-card-img`);
  counter.innerText = `${toys.length}`;
};

const handleDrop = (event: DragEvent): void => {
  const target = event.target as HTMLElement;
  const itemId = (event.dataTransfer as DataTransfer).getData('id');
  const toy = document.getElementById(itemId) as HTMLElement;
  const num = <string>toy.dataset.img;

  if (target.className === 'drop-area') {
    toy.style.top = `${event.pageY - coordinateY - (toy.offsetHeight + toy.offsetHeight / 2)}px`;
    toy.style.left = `${event.pageX - coordinateX - (toy.offsetWidth * 2 + toy.offsetWidth / 2)}px`;
    target.append(toy);
    (event.dataTransfer as DataTransfer).clearData();
  } else {
    const toyCard = document.querySelector(`.favorites-card[data-num = "${num}"]`) as HTMLElement;
    toy.style.top = '';
    toy.style.left = '';
    toyCard.append(toy);
  }

  updateCounter(num);
};

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
        color = <string> getLocalStorage('garlandColor');
      }

      this.renderLightRopes(color);
    }
    return this.container;
  }
}

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
    area.coords =
      '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664';
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
