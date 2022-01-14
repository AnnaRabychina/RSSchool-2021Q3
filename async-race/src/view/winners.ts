import Page from "../templates/page";

class PageWinners extends Page {
    constructor(id: string) {
      super(id);
    }

    render(): HTMLElement {
      return this.container;
    }
  }
  
  export default PageWinners;

