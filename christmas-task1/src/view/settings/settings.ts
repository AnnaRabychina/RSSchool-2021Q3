import { SortList } from '../sorting/sorting';

export class SettingsContainer {
  selectSortList: HTMLElement;
  sortList: SortList;
  constructor() {
    this.selectSortList = document.querySelector('.settings-container') as HTMLElement;
    this.sortList = new SortList()
  }
}

const countRange1 = document.getElementById('count-range1') as HTMLInputElement;
const countRange2 = document.getElementById('count-range2') as HTMLInputElement;
const countMin = document.querySelector('.count-min') as HTMLOutputElement;
const countMax= document.querySelector('.count-max') as HTMLOutputElement;
const yearRange1 = document.getElementById('year-range1') as HTMLInputElement;
const yearRange2 = document.getElementById('year-range2') as HTMLInputElement;
const yearMin = document.querySelector('.year-min') as HTMLOutputElement;
const yearMax= document.querySelector('.year-max') as HTMLOutputElement;

countRange1.addEventListener('input', (e:Event) => {
  let step: number = 1;
  if (+countRange1.value >= +countRange2.value) {
    countRange1.value = String(+countRange2.value - step)
  } 
  countMin.value = countRange1.value
})

countRange2.addEventListener('input', (e) =>{
  let step: number = 1;
  if (+countRange2.value <= +countRange1.value){
    countRange2.value = String(+countRange1.value + step)
  }
  countMax.value = countRange2.value
})

yearRange1.addEventListener('input', (e) => {
  let step: number = 10;
  if (+yearRange1.value >= +yearRange2.value) {
    yearRange1.value = String(+yearRange2.value - step)
  } 
  yearMin.value = yearRange1.value
})

yearRange2.addEventListener('input', (e) =>{
  let step: number = 10;
  if (+yearRange2.value <= +yearRange1.value){
    yearRange2.value = String(+yearRange1.value + step)
  }
  yearMax.value = yearRange2.value
})

