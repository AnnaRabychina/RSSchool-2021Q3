export interface ICard {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

export const enum PageIds {
  PageStart = 'page-start',
  PageToys = 'page-toys',
  PageTree = 'page-tree',
}

export const Buttons = [
  {
    id: PageIds.PageStart,
    text: '',
    class: ['logo', 'btn-page-start'],
  },
  {
    id: PageIds.PageToys,
    text: 'игрушки',
    class: ['nav-link', 'btn-page-toys'],
  },
  {
    id: PageIds.PageTree,
    text: 'ёлка',
    class: ['nav-link', 'btn-page-tree'],
  },
];

export const enum Sorting {
  minName = '"sort-name-min"',
  maxName = '"sort-name-max"',
  maxYear = '"sort-year-max"',
  minYear = '"sort-year-min"',
}

export const buttonsShape = ['шар', 'колокольчик', 'шишка', 'снежинка', 'фигурка'];
export const buttonsColor = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];
export const buttonsSize = ['большой', 'средний', 'малый'];

export interface IRangeSlider {
  stiles: string[];
  min: string;
  max: string;
  step: string;
  value: string;
}

export const countRangeMin = {
  stiles: ['count-range1'],
  min: '1',
  max: '12',
  step: '1',
  value: '1',
};

export const countRangeMax = {
  stiles: ['count-range2'],
  min: '1',
  max: '12',
  step: '1',
  value: '12',
};

export const yearRangeMin = {
  stiles: ['year-range1'],
  min: '1940',
  max: '2020',
  step: '10',
  value: '1940',
};

export const yearRangeMax = {
  stiles: ['year-range2'],
  min: '1940',
  max: '2020',
  step: '10',
  value: '2020',
};

export interface IMenuSettings {
  quantity: number,  
  stiles: string[],
  field: string,
}

export const tree = {
  quantity: 6,
  stiles: ['tree', 'menu-item'],
  field: 'tree',
};

export const bg = {
  quantity: 10,
  stiles: ['bg', 'menu-item'],
  field: 'bg',
};

export const sizeFavorites = 20;
export const sizeSelected = 20;

export const sortListHTMLContent = `
<option value="sort-name-max">По названию от «А» до «Я»</option>
<option value="sort-name-min">По названию от «Я» до «А»</option>
<option value="sort-year-max">Год приобретения по возрастанию</option>
<option value="sort-year-min">Год приобретения по убыванию</option>
`;

export const headerHTMLContent = `
      <input type="search" class="search" autocomplete="off" autofocus placeholder="Введите текст для поиска" />
      <div class="select-toys">
        <span>0</span>
      </div>
      `;

export const footerHTMLContent = `
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

export const labelHTMLContent = `
      <label class="on-switch-label" for="garland-on-switch">
      <div class="on-switch-inner"></div>
      <div class="on-switch-switch"></div>
      </label> 
    `;

export const buttonsGarland = ['red', 'blue', 'yellow', 'green', 'multicolor'];

export const areaCoords =
  '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664';
