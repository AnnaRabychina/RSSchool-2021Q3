import { Buttons, headerHTMLContent } from '../../options/options';
import Component from '../../templates/component';

class Header extends Component {
  constructor(tagName: keyof HTMLElementTagNameMap, className: string[]) {
    super(tagName, className);
  }

  renderHeaderButtons(): HTMLElement {
    const headerButtons = document.createElement('nav');
    headerButtons.classList.add('nav');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.classList.add(...button.class);
      buttonHTML.innerText = button.text;
      headerButtons.append(buttonHTML);
    });
    return headerButtons;
  }

  createHeaderControls(): HTMLElement {
    const headerControls = document.createElement('div');
    headerControls.classList.add('header-controls');
    headerControls.innerHTML = headerHTMLContent;
    return headerControls;
  }

  render(): HTMLElement {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-row');
    headerContainer.append(this.renderHeaderButtons(), this.createHeaderControls());
    this.container.append(headerContainer);
    return this.container;
  }
}

export default Header;
