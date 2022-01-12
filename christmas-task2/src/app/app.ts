import cardsData from '../components/cards/cardData';
import Header from '../components/header/header';
import { footerHTMLContent, PageIds } from '../options/options';
import PageStart from '../pages/page-start';
import PageToys from '../pages/page-toys';
import { PageTree } from '../pages/page-tree';
import { setLocalStorage } from '../services/storage';
import Page from '../templates/page';

setLocalStorage('currentData', [...cardsData]);

export class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId = 'current-page';
  static header: Header;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
      document.body.innerHTML = '';
    }

    let page: Page | null = null;

    if (idPage === PageIds.PageStart) {
      page = new PageStart(idPage);
    } else if (idPage === PageIds.PageToys) {
      page = new PageToys(idPage);
    } else if (idPage === PageIds.PageTree) {
      page = new PageTree(idPage);
    }

    if (page) {
      const headerHTML = new Header('header', ['header']);
      App.container.append(headerHTML.render());
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML, App.createFooter());
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  static createFooter(): string | Node {
    const footer: HTMLElement = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = footerHTMLContent;
    return footer;
  }

  start() {
    App.renderNewPage('page-start');
    this.enableRouteChange();
  }
}
