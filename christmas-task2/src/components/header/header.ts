import { PageIds } from "../../app/app";
import Component from "../../templates/component";

const Buttons = [
    {
      id: PageIds.PageStart,
      text: '',
      class: ['logo', 'btn-page-start'],
    },
    {
      id: PageIds.PageToys,
      text: 'игрушки',
      class: ['nav-link', 'btn-page-toys'],
    },
    {
      id: PageIds.PageTree,
      text: 'ёлка',
      class: ['nav-link', 'btn-page-tree'],
    },
  ];
  
  class Header extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap, className: string[]) {
      super(tagName, className);
    }
  
    renderHeaderButtons() {
      const headerButtons = document.createElement('nav');
      headerButtons.classList.add('nav')

      Buttons.forEach((button) => {
        const buttonHTML = document.createElement('a');
        buttonHTML.href = `#${button.id}`;
        buttonHTML.classList.add(...button.class);
        buttonHTML.innerText = button.text;
        headerButtons.append(buttonHTML);
      });
      return (headerButtons);
    }

    createHeaderControls() {
      const headerControls = document.createElement('div');
      headerControls.classList.add('header-controls');
      headerControls.innerHTML = `
      <input type="search" class="search" autocomplete="off" autofocus placeholder="Введите текст для поиска" />
      <div class="select-toys">
        <span>0</span>
      </div>
      `
      return headerControls;
    }
  
    render() {
      const headerContainer = document.createElement('div');
      headerContainer.classList.add('header-row')
      headerContainer.append(this.renderHeaderButtons());
      headerContainer.append(this.createHeaderControls());
      this.container.append(headerContainer);
      return this.container;
    }
  }
  
  export default Header;