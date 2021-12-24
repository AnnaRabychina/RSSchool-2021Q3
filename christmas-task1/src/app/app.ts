import { PageStart } from "../pages/page-start";

export class App {
  private container: HTMLElement;
  private startPage: PageStart;

  constructor() {
    this.container = document.body;
    this.startPage = new PageStart('page-start');
   }

  private createHeader() {
    const header: HTMLElement = document.createElement('header');
    header.classList.add('header')
    header.innerHTML = 
    `<div class="container">
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
   `
    return header;
 }

 private createFooter() {
  const footer: HTMLElement = document.createElement('footer');
  footer.classList.add('footer')
  footer.innerHTML = 
  `     <div class="container">
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
 `
  return footer;
}
   start() {
    const header = this.createHeader();
    this.container.append(header)
    const startPageHTML = this.startPage.render();
    this.container.append(startPageHTML);
    const footer = this.createFooter();
    this.container.append(footer);
   }
}