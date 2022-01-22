import { getCars } from "../api/api";

abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('main');
    this.container.classList.add('main');
    this.container.id = id;
  }

  createTitle(text: string): HTMLElement {
    const title = document.createElement('h2');
    title.classList.add('page-title');
    title.innerText = text;
    return title;
  }

  protected createPagination(): HTMLElement {
    const pagination = document.createElement('div');
    pagination.classList.add('page-pagination');
    pagination.innerHTML = `
      <button class="btn btn-prev"> prev </button>
      <button class="btn btn-next"> next </button>
    `;
    return pagination;
  }

  async render(): Promise<HTMLElement>  {
    return this.container;
  }
}

export default Page;
