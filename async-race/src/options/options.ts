export const enum PageIds {
  Garage = 'garage',
  Winners = 'winners',
}

export const buttonsPage = [
  {
    id: PageIds.Garage,
    label: 'Garage',
    class: ['nav-link'],
  },
  {
    id: PageIds.Winners,
    label: 'Winners',
    class: ['nav-link'],
  },
];

export const footerContentHTML = `
  <div class="footer-row">
    <div class="footer-info">
      <p class="copyright">©</p>
      <time>2021</time>
      <a class="github-username" href="https://github.com/AnnaRabychina" target="_blank">Anna Rabychina</a>
    </div>
    <a
      class="footer-logo"
      src="https://rs.school/images/rs_school_js.svg"
      href="https://rs.school/js/"
      target="_blank"
    ></a>
  </div>
`;
