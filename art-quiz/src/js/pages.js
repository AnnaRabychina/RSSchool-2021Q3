import { changeProperty } from './categories';

const buttons = document.querySelectorAll('.btn-page');
const pages = document.querySelectorAll('.page');

function openPage() {
  let nextPage = this.dataset.nextPage;
  let pageName = this.dataset.page;
  pages.forEach(page => {
    if (page.classList.contains(pageName)) {
      changeProperty(page, 'show');
      changeProperty(page, 'hide');
    }
    setTimeout(() => {
      if (page.classList.contains(nextPage)) {
        changeProperty(page, 'hide');
        changeProperty(page, 'show');
      }
    }, 500);
  });
}

buttons.forEach(btn => btn.addEventListener('click', openPage));

export {
  buttons, pages, openPage
};
