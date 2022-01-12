import { buttonsColor } from "../../options/options";
import { createSet } from "../../services/services";
import FilterToys from "../../templates/filterToys";

const selectedColors = createSet('selectedColors');

export class FilterColor extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('color');
  }

  render(): HTMLElement {
    this.renderButtons(buttonsColor, selectedColors, 'color', this.container);
    this.setFilterToys(selectedColors, 'color', 'selectedColors');
    return this.container;
  }
}

