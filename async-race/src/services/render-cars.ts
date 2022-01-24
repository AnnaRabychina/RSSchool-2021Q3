import { ICar } from '../api/api';
import { createItemCar } from './create-car';

export const renderCars = (arrCars: ICar[]): string => {
  let carsContainerHTML = '';
  arrCars.forEach((carsItem) => {
    carsContainerHTML += createItemCar(carsItem.name, carsItem.color, carsItem.id);
  });
  return carsContainerHTML;
};

export default renderCars;
