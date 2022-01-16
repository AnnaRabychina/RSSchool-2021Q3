import { PageIds } from "../options/options";
import PageGarage from "../view/garage";
import PageWinners from "../view/winners";
import Page from "../templates/page";
import Footer from "../components/footer";
import Header from "../components/header";

export class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId = 'current-page';
    static header: Header;
    static footer: Footer;
  
    static renderNewPage(idPage: string) {
      const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
      if (currentPageHTML) {
        currentPageHTML.remove();
        document.body.innerHTML = '';
      }
  
      let page: Page | null = null;
      if (idPage === PageIds.Garage) {
        page = new PageGarage(idPage);
      } else if (idPage === PageIds.Winners) {
        page = new PageWinners(idPage);
      }
  
      if (page) {
        const headerHTML = new Header('header', ['header']);
        const pageHTML = page.render();
        pageHTML.id = App.defaultPageId;
        const footerHTML = new Footer('footer', ['footer']);
        App.container.append(headerHTML.render(), pageHTML, footerHTML.render());
      }
    }
  
    private enableRouteChange() {
      window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        App.renderNewPage(hash);
      });
    }
  
    start(): void {
      App.renderNewPage('garage');
      this.enableRouteChange();
    }
  }



