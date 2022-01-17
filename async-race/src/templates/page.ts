abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('main');
    this.container.classList.add('main');
    this.container.id = id;
  }

  protected createTitle(text: string) {
    const title = document.createElement('h2');
    title.innerText = text;
    return title;
  }

  render(): HTMLElement {
    return this.container;
  }
}

export default Page;
