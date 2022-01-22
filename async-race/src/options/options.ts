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

export const valueForColor = '0123456789ABCDEF';
export const lengthColorHEX = 7; 
export const countOfCars = 100; 

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

export const winnersTableHeader = `
<tr class="table-head">
  <th>№</th>
  <th>car</th>
  <th>name</th>
  <th>total wins</th>
  <th>best time</th>
</tr>
`;