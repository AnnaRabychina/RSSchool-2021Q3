import { buttonsPage, footerContentHTML } from '../../options/options';
import Component from '../../templates/component';

class Footer extends Component {
  constructor(tagName: keyof HTMLElementTagNameMap, className: string[]) {
    super(tagName, className);
  }

  render(): HTMLElement {
    this.container.innerHTML = footerContentHTML
    return this.container;
  }
}

export default Footer;
