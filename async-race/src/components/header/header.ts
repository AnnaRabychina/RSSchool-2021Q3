import { buttonsPage } from '../../options/options';
import Component from '../../templates/component';

class Header extends Component {
  constructor(tagName: keyof HTMLElementTagNameMap, className: string[]) {
    super(tagName, className);
  }

  renderHeaderButtons(): HTMLElement {
    const headerButtons = document.createElement('nav');
    headerButtons.classList.add('nav');
    buttonsPage.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.classList.add(...button.class);
      buttonHTML.innerText = button.label;
      headerButtons.append(buttonHTML);
    });
    return headerButtons;
  }

  render(): HTMLElement {
    this.container.append(this.renderHeaderButtons());
    return this.container;
  }
}

export default Header;
