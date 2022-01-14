abstract class Component {
  protected container: HTMLElement;

  constructor(tagName: keyof HTMLElementTagNameMap, className: string[]) {
    this.container = document.createElement(tagName);
    this.container.classList.add(...className);
  }

  render() {
    return this.container;
  }
}

export default Component;