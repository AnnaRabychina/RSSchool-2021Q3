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

export const enum Sorting {
  minName = '"sort-name-min"',
  maxName = '"sort-name-max"',
  maxYear = '"sort-year-max"',
  minYear = '"sort-year-min"',
}
