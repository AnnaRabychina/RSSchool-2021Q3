import { buttonsShape } from "../../options/options";
import { createSet } from "../../services/services";
import FilterToys from "../../templates/filterToys";

const selectedShapes = createSet('selectedShapes');

export class FilterShape extends FilterToys {
  constructor() {
    super();
    this.container.classList.add('shape');
  }

  render(): HTMLElement {
    this.renderButtons(buttonsShape, selectedShapes, 'shape', this.container);
    this.setFilterToys(selectedShapes, 'shape', 'selectedShapes');
    return this.container;
  }
}