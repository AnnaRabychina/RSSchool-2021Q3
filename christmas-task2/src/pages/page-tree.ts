import { insertElement } from '../components/cards/cards';
import { FavoritesCards } from '../components/favorites/favorites';
import { SettingsMenuContainer } from '../components/settings-tree/settingsTree';
import { TreeContainer } from '../components/tree/tree';
import Page from '../templates/page';

export class PageTree extends Page {
  private favoritesCards: FavoritesCards;
  private settingsMenu: SettingsMenuContainer;
  private static treeContainer: TreeContainer;
  
  constructor(id: string) {
    super(id);
    this.settingsMenu = new SettingsMenuContainer();
    PageTree.treeContainer = new TreeContainer()
    this.favoritesCards = new FavoritesCards();
  }

  createPageTree() {
    const pageTree = document.createElement('div');
    pageTree.classList.add('page-container');
    /*
    pageTree.innerHTML = `
       <div class="snow-audio-container menu-container">
        <div class="audio-control menu-item"></div>
        <div class="snow-control menu-item"></div>
      </div>
      <div class="garland-container menu-container">          
        <div class="garland-btns">
          <button class="color-btn multicolor-btn" data-color="multicolor"></button>
          <button class="color-btn red-btn" data-color="red"></button>
          <button class="color-btn blue-btn" data-color="blue"></button>
          <button class="color-btn yellow-btn" data-color="yellow"></button>
          <button class="color-btn green-btn" data-color="green"></button>
        </div>
        <div class="on-switch">
          <input type="checkbox" name="on-switch" class="on-switch-checkbox" id="on-switch" checked>
          <label class="on-switch-label" for="on-switch">
              <div class="on-switch-inner"></div>
              <div class="on-switch-switch"></div>
          </label>
        </div>
      </div>
    <div class="main-tree-container">
      <img src="assets/tree/1.png" class="main-tree" alt="tree">
    </div>
    `;*/
  
    return pageTree;
  }

  static renderNewTreeContainer() {
    PageTree.treeContainer.render();
  }

  render(): HTMLElement {
    const page = insertElement('div', ['page', 'page-tree'], '', this.container);
    const pageContainer = insertElement('div', ['page-container'], '', page);
    pageContainer.append(this.settingsMenu.render());
    pageContainer.append(PageTree.treeContainer.render());
    const favoritesContainer = insertElement('div', ['favorites-aside'], '', pageContainer);
    favoritesContainer.append(this.favoritesCards.render());

    return this.container;
  }
}
