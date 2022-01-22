import { brandsCars } from '../options/brands-cars';
import { modelsCars } from '../options/models-cars';
import { lengthColorHEX, valueForColor } from '../options/options';

export function insertElement(
  tagName: keyof HTMLElementTagNameMap,
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

export const getRandomName = (): string => {
  const brand: string = brandsCars[Math.floor(Math.random() * brandsCars.length)];
  const model: string = modelsCars[Math.floor(Math.random() * modelsCars.length)];
  return `${brand} ${model}`;
};

export const getRandomColor = (): string => {
  const values = valueForColor;
  let color = '#';
  while (color.length < lengthColorHEX) {
    color += values[Math.floor(Math.random() * values.length)];
  }
  return `${color}`;
};