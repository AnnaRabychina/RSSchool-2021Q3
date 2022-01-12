import { IMenuSettings } from '../options/options';
import { PageTree } from '../pages/page-tree';
import { setLocalStorage } from '../services/storage';

abstract class SettingsMenu {
  protected container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
  }

  renderItems(settingItem: IMenuSettings, parentNode?: HTMLElement | null): void {
    for (let i = 1; i <= settingItem.quantity; i++) {
      const itemMenu: HTMLElement = document.createElement('div');
      itemMenu.dataset[settingItem.field] = String(i);
      itemMenu.classList.add(...settingItem.stiles);
      if (parentNode) {
        parentNode.append(itemMenu);
      }
    }
  }

  setSettings(setting: string, keyStorage: string): void {
    this.container.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const settingNum = target.dataset[setting];
      if (settingNum) {
        setLocalStorage(keyStorage, settingNum);
        PageTree.treeContainer.render();
      }
    });
  }

  render(): HTMLElement {
    return this.container;
  }
}

export default SettingsMenu;
