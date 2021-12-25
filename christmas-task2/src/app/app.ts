import cardsData from "../components/cards/cardData";
import { setLocalStorage } from "../components/storage/storage";
import { PageToys } from "../pages/page-toys";

setLocalStorage('currentData', [...cardsData]);

export class App {
  private container: HTMLElement;
  private toysPage: PageToys;

  constructor() {
    this.container = document.body;
    this.toysPage = new PageToys('page-toys');
  }

  private createHeader() {
    const header: HTMLElement = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `<div class="container">
     <div class="header-row">
       <nav class="nav">
         <a class="logo btn-page-start" href="#"> </a>
         <a class="nav-link btn-page-toys" href="#">игрушки</a>
         <a class="nav-link btn-page-tree" href="#">ёлка</a>
       </nav>
       <div class="header-controls">
         <input type="search" class="search" autocomplete="off" autofocus placeholder="Введите текст для поиска" />
         <div class="select-toys">
           <span>0</span>
         </div>
       </div>
     </div>
   </div>
   `;
    return header;
  }

  private createFooter() {
    const footer: HTMLElement = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = `     <div class="container">
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
  </div>
 `;
    return footer;
  }
  start() {
    const header = this.createHeader();
    this.container.append(header);
    const toysPageHTML = this.toysPage.render();
    this.container.append(toysPageHTML);
    const footer = this.createFooter();
    this.container.append(footer);
  }
}

export function insertElement(
  tagName: keyof HTMLElementTagNameMap,
  className: string[],
  content: string | undefined,
  parentNode?: HTMLElement | null
): HTMLElement {
  const el = document.createElement(tagName);
  el.classList.add(...className);
  if (content) {
    el.innerHTML = content;
  }
  if (parentNode) {
    parentNode.append(el);
  }
  return el;
}
