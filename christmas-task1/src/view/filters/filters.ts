import { ICard } from '../../options/options';
import { changeProperty, updateCardsContainer } from '../../utils/utils';
import { getLocalStorage, setLocalStorage } from '../storage/storage';

let selectedShapes = getLocalStorage('selectedShapes')
  ? new Set<string>(<string[]>getLocalStorage('selectedShapes'))
  : new Set<string>();

let selectedColors = getLocalStorage('selectedColors')
  ? new Set<string>(<string[]>getLocalStorage('selectedColors'))
  : new Set<string>();

let selectedSizes = getLocalStorage('selectedSizes')
  ? new Set<string>(<string[]>getLocalStorage('selectedSizes'))
  : new Set<string>();

export function setFilterToys(filterSet: Set<string>, filter: string, keyStorage: string): void {
  (document.querySelector(`.${filter}`) as HTMLElement).addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    const filterField = target.dataset[filter];
    changeProperty(target, 'active');
    if (target.classList.contains('active')) {
      filterSet.add(<string>filterField);
    } else {
      filterSet.delete(<string>filterField);
    }
    if ([...filterSet].length == 0) {
      localStorage.removeItem(keyStorage);
    } else {
      setLocalStorage(keyStorage, [...filterSet]);
    }
    updateCardsContainer();
  });
}

setFilterToys(selectedShapes, 'shape', 'selectedShapes');
setFilterToys(selectedColors, 'color', 'selectedColors');
setFilterToys(selectedSizes, 'size', 'selectedSizes');

(document.querySelector('.favorite-input') as HTMLElement).addEventListener('click', (e) => {
  setLocalStorage('isFavorite', (document.getElementById('checkbox') as HTMLInputElement).checked ? 'true' : '');
  updateCardsContainer();
});

export function filterData(): ICard[] | [] {
  let currentData = <ICard[] | []>getLocalStorage('currentData');
  let filterShapes = <string[] | ''>getLocalStorage('selectedShapes');
  let filterColors = <string[] | ''>getLocalStorage('selectedColors');
  let filterSizes = <string[] | ''>getLocalStorage('selectedSizes');
  let isFavorite = <string | ''>getLocalStorage('isFavorite');

  const newData = currentData.filter((el: ICard) => {
    return (
      (filterShapes && filterShapes !== [] ? filterShapes.includes(el.shape) : true) &&
      (filterColors && filterColors !== [] ? filterColors.includes(el.color) : true) &&
      (filterSizes && filterSizes !== [] ? filterSizes.includes(el.size) : true) &&
      (isFavorite ? `${el.favorite}` === isFavorite : true)
    );
  });

  return newData;
}
