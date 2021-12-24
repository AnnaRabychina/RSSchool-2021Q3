abstract class Page{
  protected container: HTMLElement;
  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.classList.add('main');
    this.container.id = id;
   }

  render(): HTMLElement {
    return this.container;
  }
}

export default Page;