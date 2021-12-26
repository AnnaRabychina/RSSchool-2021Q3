import { setLocalStorage } from '../components/storage/storage';
import { PageTree } from '../pages/page-tree';

abstract class SettingsMenu {
  protected container: HTMLElement;
  constructor() {
    this.container = document.createElement('div');
  }

  renderItems(itemSize: number, className: string[], field: string, parentNode?: HTMLElement | null) {
    for (let i = 1; i <= itemSize; i++) {
      const itemMenu: HTMLElement = document.createElement('div');
      itemMenu.dataset[field] = String(i);
      itemMenu.classList.add(...className);
      if (parentNode) {
        parentNode.append(itemMenu);
      }
    }
  }

  setSettings(setting: string, keyStorage: string) {
    this.container.addEventListener('click', (event) => {
      let target = event.target as HTMLElement,
        settingNum = target.dataset[setting];
      if (settingNum) {
        setLocalStorage(keyStorage, settingNum);
        PageTree.renderNewTreeContainer();
      }
    });
  }

  render(): HTMLElement {
    return this.container;
  }
}

export default SettingsMenu;
