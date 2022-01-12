import { tree } from "../../options/options";
import SettingsMenu from "../../templates/settingsMenu";

export class SettingsTree extends SettingsMenu {
  constructor() {
    super();
    this.container.classList.add('tree-container', 'menu-container');
  }

  render(): HTMLElement {
    this.setSettings('tree', 'numImgTree');
    this.renderItems(tree, this.container);
    return this.container;
  }
}
