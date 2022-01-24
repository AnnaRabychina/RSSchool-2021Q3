/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export enum PageIds {
  PageGarage = 'garage',
  PageWinners = 'winners',
}

export const buttonsPage = [
  {
    id: PageIds.PageGarage,
    label: 'Garage',
    class: ['nav-link']
  },
  {
    id: PageIds.PageWinners,
    label: 'Winners',
    class: ['nav-link']
  }
];

export const VALUE_FOR_COLOR = '0123456789ABCDEF';
export const LENGTH_COLOR_HEX = 7;
export const COUNT_OF_CARS = 100;
export const MAX_CARS_PER_PAGE = 7;
export const MAX_WINNERS_PER_PAGE = 10;

export const FOOTER_CONTENT_HTML = `
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

export const WINNERS_TABLE_HEADER = `
<tr class="table-head">
  <th>№</th>
  <th>car</th>
  <th>name</th>
  <th>total wins</th>
  <th>best time</th>
</tr>
`;
