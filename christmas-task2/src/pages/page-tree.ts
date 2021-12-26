import Page from '../templates/page';

export class PageTree extends Page {
  private page: HTMLElement;
  constructor(id: string) {
    super(id);
    this.page = document.createElement('div');
    this.page.classList.add('page', 'page-tree');
  }

  createPageTree() {
    const pageTree = document.createElement('div');
    pageTree.classList.add('page-container');
    pageTree.innerHTML = `
      <div class="favorites-menu">
      <div class="snow-audio-container menu-container">
        <div class="audio-control menu-item"></div>
        <div class="snow-control menu-item"></div>          
      </div>
      <div class="tree-container menu-container">
        <div class="tree menu-item" data-tree="1"></div>
        <div class="tree menu-item" data-tree="2"></div>
        <div class="tree menu-item" data-tree="3"></div>
        <div class="tree menu-item" data-tree="4"></div>
        <div class="tree menu-item" data-tree="5"></div>
        <div class="tree menu-item" data-tree="6"></div>
      </div>
      <div class="bg-container menu-container">
        <div class="bg menu-item" data-bg="1"></div>
        <div class="bg menu-item" data-bg="2"></div>
        <div class="bg menu-item" data-bg="3"></div>
        <div class="bg menu-item" data-bg="4"></div>
        <div class="bg menu-item" data-bg="5"></div>
        <div class="bg menu-item" data-bg="6"></div>
        <div class="bg menu-item" data-bg="7"></div>
        <div class="bg menu-item" data-bg="8"></div>
        <div class="bg menu-item" data-bg="9"></div>
        <div class="bg menu-item" data-bg="10"></div>
      </div>        
      <div class="garland-container menu-container">          
        <div class="garland-btns">
          <button class="color-btn multicolor-btn" data-color="multicolor"></button>
          <button class="color-btn red-btn" data-color="red"></button>
          <button class="color-btn blue-btn" data-color="blue"></button>
          <button class="color-btn yellow-btn" data-color="yellow"></button>
          <button class="color-btn green-btn" data-color="green"></button>
        </div>
        <div class="on-switch">
          <input type="checkbox" name="on-switch" class="on-switch-checkbox" id="on-switch" checked>
          <label class="on-switch-label" for="on-switch">
              <div class="on-switch-inner"></div>
              <div class="on-switch-switch"></div>
          </label>
        </div>
      </div>
    </div>
    <div class="main-tree-container">
      <img src="assets/tree/1.png" class="main-tree" alt="tree">
    </div>
    <div class="favorites-aside">
      <div class="favorites-container">
        <div class = "favorites-card">
          <p class="favorites-count">1</p>
          <img class="favorites-card-img" src="assets/toys/1.png">
        </div>
        <div class = "favorites-card">
          <p class="favorites-count">1</p>
          <img class="favorites-card-img" src="assets/toys/1.png">
        </div>
        <div class = "favorites-card">
          <p class="favorites-count">1</p>
          <img class="favorites-card-img" src="assets/toys/1.png">
        </div>
        <div class = "favorites-card">
          <p class="favorites-count">1</p>
          <img class="favorites-card-img" src="assets/toys/1.png">
        </div>
        <div class = "favorites-card">
          <p class="favorites-count">1</p>
          <img class="favorites-card-img" src="assets/toys/1.png">
        </div>
        <div class = "favorites-card">
          <p class="favorites-count">1</p>
          <img class="favorites-card-img" src="assets/toys/1.png">
        </div>
      </div>
    </div>
    `;
    return pageTree;
  }

  render(): HTMLElement {
    const pageTreeHTML = this.createPageTree();
    this.page.append(pageTreeHTML);
    this.container.append(this.page);
    return this.container;
  }
}
