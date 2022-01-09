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
  stiles: string[], 
  min: string, 
  max: string, 
  step: string, 
  value: string
}

export const countRange1 = {
  stiles: ['count-range1'],
  min: '1',
  max: '12',
  step: '1',
  value: '1',
};

export const countRange2 = {
  stiles: ['count-range2'],
  min: '1',
  max: '12',
  step: '1',
  value: '12',
};

export const yearRange1 = {
  stiles: ['year-range1'],
  min: '1940',
  max: '2020',
  step: '10',
  value: '1940',
};

export const yearRange2 = {
  stiles: ['year-range2'],
  min: '1940',
  max: '2020',
  step: '10',
  value: '2020',
};

export const buttonsGarland = ['red', 'blue', 'yellow', 'green', 'multicolor'];