const buttons = document.querySelectorAll('.btn-page');
const pages = document.querySelectorAll('.page');

function openPage() {
  let nextPage = this.dataset.nextPage;
  let pageName = this.dataset.page;
  pages.forEach(page => {
    if (page.classList.contains(pageName)) {
      page.classList.remove('show');
      page.classList.add('hide');
    }
    setTimeout(() =>{
      if (page.classList.contains(nextPage)) {
        page.classList.remove('hide');
        page.classList.add('show');
      }
    }, 500);
  });
}

buttons.forEach(btn => btn.addEventListener('click', openPage));

export {
  buttons, pages
};
