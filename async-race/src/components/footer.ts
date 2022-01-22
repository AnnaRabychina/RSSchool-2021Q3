import { footerContentHTML } from '../options/options';
import Component from '../templates/component';

class Footer extends Component {
  constructor(tagName: string, className: string[]) {
    super(tagName, className);
  }

  render(): HTMLElement {
    this.container.innerHTML = footerContentHTML;
    return this.container;
  }
}

export default Footer;
