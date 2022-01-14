import Page from "../templates/page";

class PageGarage extends Page {
    constructor(id: string) {
      super(id);
    }

    render(): HTMLElement {
      return this.container;
    }
  }
  
  export default PageGarage;
