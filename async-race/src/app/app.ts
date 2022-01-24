import PageGarage from '../view/garage';
import PageWinners from '../view/winners';
import Page from '../templates/page';
import Footer from '../components/footer';
import Header from '../components/header';
import { PageIds } from '../options/options';

export class App {
  private static container: HTMLElement = document.body;

  private defaultPageId = 'current-page';

  static header: Header;

  static footer: Footer;

  async renderNewPage(idPage: string): Promise<void> {
    const currentPageHTML = document.querySelector(`#${this.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
      document.body.innerHTML = '';
    }

    let page: Page | null = null;
    if (idPage === PageIds.PageGarage) {
      page = new PageGarage(idPage);
    } else if (idPage === PageIds.PageWinners) {
      page = new PageWinners(idPage);
    }

    if (page) {
      const headerHTML = new Header('header', ['header']);
      const pageHTML = page.render();
      (await (pageHTML)).id = this.defaultPageId;
      const footerHTML = new Footer('footer', ['footer']);
      App.container.append(headerHTML.render(), await pageHTML, footerHTML.render());
    }
  }

  private enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      this.renderNewPage(hash);
    });
  }

  start(): void {
    this.renderNewPage(PageIds.PageGarage);
    this.enableRouteChange();
  }
}
