import cardsData from '../components/cards/cardData';
import Header from '../components/header/header';
import { setLocalStorage } from '../components/storage/storage';
import { PageStart } from '../pages/page-start';
import { PageToys } from '../pages/page-toys';
import { PageTree } from '../pages/page-tree';
import Page from '../templates/page';

setLocalStorage('currentData', [...cardsData]);

export const enum PageIds {
  PageStart = 'page-start',
  PageToys = 'page-toys',
  PageTree = 'page-tree',
}

export class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = 'current-page';
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
      App.container.append(pageHTML);
      App.container.append(App.createFooter());
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
    footer.innerHTML = `     
    <div class="footer-row">
      <div class="footer-info">
        <p class="copyright">©</p>
        <time>2021</time>
        <a class="github-username" href="https://github.com/AnnaRabychina" target="_blank">Anna Rabychina</a>
      </div>
      <a
        class="footer-logo"
        src="https://rs.school/images/rs_school_js.svg"
        href="https://rs.school/js/"
        target="_blank"
      ></a>
    </div>
 `;
    return footer;
  }

  start() {
    App.renderNewPage('page-tree');
    this.enableRouteChange();
  }
}
