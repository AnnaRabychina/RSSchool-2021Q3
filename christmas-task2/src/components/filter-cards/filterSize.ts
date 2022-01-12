import { buttonsSize } from "../../options/options";
import { createSet } from "../../services/services";
import FilterToys from "../../templates/filterToys";


const selectedSizes = createSet('selectedSizes');

export class FilterSize extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('size');
  }

  render(): HTMLElement {
    this.renderButtons(buttonsSize, selectedSizes, 'size', this.container);
    this.setFilterToys(selectedSizes, 'size', 'selectedSizes');
    return this.container;
  }
}

