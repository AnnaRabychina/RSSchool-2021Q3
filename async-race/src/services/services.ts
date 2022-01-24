import { IBodyCar } from '../api/api';
import { brandsCars } from '../options/brands-cars';
import { modelsCars } from '../options/models-cars';
import { buttonsPage, LENGTH_COLOR_HEX, VALUE_FOR_COLOR } from '../options/options';

export function insertElement(
  tagName: string,
  className: string[],
  content: string | undefined,
  parentNode?: HTMLElement | null | ''
): HTMLElement {
  const el = document.createElement(tagName);
  el.classList.add(...className);
  if (content) {
    el.innerHTML = content;
  }
  if (parentNode) {
    parentNode.append(el);
  }
  return el;
}

export const renderHeaderButtons = (): HTMLElement => {
  const headerButtons = document.createElement('nav');
  headerButtons.classList.add('nav');
  buttonsPage.forEach((button) => {
    const buttonHTML = document.createElement('a');
    buttonHTML.href = `#${button.id}`;
    buttonHTML.classList.add(...button.class);
    buttonHTML.innerText = button.label;
    headerButtons.append(buttonHTML);
  });
  return headerButtons;
};

export const renderInput = (
  stiles: string,
  type: string,
  value?: string | undefined
): HTMLInputElement => {
  const itemInput = document.createElement('input');
  itemInput.classList.add(stiles);
  itemInput.type = type;
  if (value) {
    itemInput.value = value;
  }
  return itemInput;
};

export const createTitle = (text: string): HTMLElement => {
  const title = document.createElement('h2');
  title.classList.add('page-title');
  title.innerText = text;
  return title;
};

export const createPagination = (): HTMLElement => {
  const pagination = document.createElement('div');
  pagination.classList.add('page-pagination');
  pagination.innerHTML = `
    <button class="btn btn-prev"> prev </button>
    <button class="btn btn-next"> next </button>
  `;
  return pagination;
};

export const getRandomName = (): string => {
  const brand: string = brandsCars[Math.floor(Math.random() * brandsCars.length)];
  const model: string = modelsCars[Math.floor(Math.random() * modelsCars.length)];
  return `${brand} ${model}`;
};

export const getRandomColor = (): string => {
  const values = VALUE_FOR_COLOR;
  let color = '#';
  while (color.length < LENGTH_COLOR_HEX) {
    color += values[Math.floor(Math.random() * values.length)];
  }
  return `${color}`;
};

export const createRandomCars = (count: number): IBodyCar[] => {
  const randomCars = [];
  for (let i = 0; i < count; i += 1) {
    randomCars.push({ name: getRandomName(), color: getRandomColor() });
  }
  return randomCars;
};
