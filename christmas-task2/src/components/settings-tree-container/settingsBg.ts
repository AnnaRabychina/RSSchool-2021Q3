import { bg } from "../../options/options";
import SettingsMenu from "../../templates/settingsMenu";

export class SettingsBg extends SettingsMenu {
  constructor() {
    super();
    this.container.classList.add('bg-container', 'menu-container');
  }

  render(): HTMLElement {
    this.setSettings('bg', 'numBgTree');
    this.renderItems(bg, this.container);
    return this.container;
  }
}
