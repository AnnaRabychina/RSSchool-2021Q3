import { getWinners } from '../api/api';
import { renderWinners } from '../services/render-winners';
import { createTitle, createPagination } from '../services/services';
import Page from '../templates/page';

class PageWinners extends Page {
  page: HTMLElement;

  constructor(id: string) {
    super(id);
    this.page = document.createElement('div');
    this.page.classList.add('winners');
  }

  async render() {
    const count = (await getWinners()).count;
    const title = createTitle(`winners (${count})`);
    this.page.append(title, createPagination(), await renderWinners());
    this.container.append(this.page);
    return this.container;
  }
}

export default PageWinners;
