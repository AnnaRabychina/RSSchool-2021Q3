import SettingsMenu from "../../templates/settingsMenu";

export class SettingsMenuContainer {
  private settingsTree: SettingsTree;
  private settingsBg: SettingsBg;
  private container: HTMLElement;
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('favorites-menu');
    this.settingsTree = new SettingsTree();
    this.settingsBg = new SettingsBg();
  }

  render(): HTMLElement {
    const settingsTreeHTML =  this.settingsTree.render()
    this.container.append(settingsTreeHTML);
    const settingsBgHTML =  this.settingsBg.render()
    this.container.append(settingsBgHTML);
    return this.container;
  }

}

export class SettingsTree extends SettingsMenu {
  constructor() {
    super();
    this.container.classList.add('tree-container', 'menu-container');
  }

  render() {
    this.setSettings('tree', 'numImgTree');
    this.renderItems(6, ['tree', 'menu-item'], 'tree', this.container);
    return this.container;
  }
}

export class SettingsBg extends SettingsMenu {
  constructor() {
    super();
    this.container.classList.add('bg-container', 'menu-container');
  }

  render() {
    this.setSettings('bg', 'numBgTree');
    this.renderItems(10, ['bg', 'menu-item'], 'bg', this.container);
    return this.container;
  }
}
