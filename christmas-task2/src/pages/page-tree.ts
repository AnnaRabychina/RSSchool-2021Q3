import { insertElement } from '../components/cards/cards';
import { FavoritesCards } from '../components/favorites/favorites';
import { SettingsMenuContainer } from '../components/settings-tree/settingsTree';
import { TreeContainer } from '../components/tree/tree';
import Page from '../templates/page';

export class PageTree extends Page {
  private favoritesCards: FavoritesCards;
  private settingsMenu: SettingsMenuContainer;
  static treeContainer: TreeContainer;
  static snowInterval: NodeJS.Timer;

  constructor(id: string) {
    super(id);
    this.settingsMenu = new SettingsMenuContainer();
    PageTree.treeContainer = new TreeContainer();
    this.favoritesCards = new FavoritesCards();
  }

  createPageTree() {
    const pageTree = document.createElement('div');
    pageTree.classList.add('page-container');
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
