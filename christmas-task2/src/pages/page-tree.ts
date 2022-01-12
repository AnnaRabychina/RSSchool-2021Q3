import { FavoritesCards } from '../components/favorites/favorites';
import { SettingsMenuTreeContainer } from '../components/settings-menu-tree/SettingsMenuTree';
import { TreeContainer } from '../components/tree/tree';
import { insertElement } from '../services/services';
import Page from '../templates/page';

export class PageTree extends Page {
  static favoritesCards: FavoritesCards;
  private settingsMenu: SettingsMenuTreeContainer;
  static treeContainer: TreeContainer;
  static snowInterval: NodeJS.Timer;

  constructor(id: string) {
    super(id);
    this.settingsMenu = new SettingsMenuTreeContainer();
    PageTree.treeContainer = new TreeContainer();
    PageTree.favoritesCards = new FavoritesCards();
  }

  render(): HTMLElement {
    const page = insertElement('div', ['page', 'page-tree'], '', this.container);
    const pageContainer = insertElement('div', ['page-container'], '', page);
    pageContainer.append(this.settingsMenu.render());
    pageContainer.append(PageTree.treeContainer.render());
    const favoritesContainer = insertElement('div', ['favorites-aside'], '', pageContainer);
    favoritesContainer.append(PageTree.favoritesCards.render());

    return this.container;
  }
}
