import { brandsCars } from '../options/brands-cars';
import { modelsCars } from '../options/models-cars';



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
