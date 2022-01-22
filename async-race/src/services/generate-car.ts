import { createCar } from '../api/api';
import { countOfCars } from '../options/options';
import PageGarage from '../view/garage';
import { createRandomCars } from './services';

const generateCars = async () => {
  const cars = createRandomCars(countOfCars);
  await Promise.all(cars.map(async car => createCar(car)));
  await PageGarage.carsContainer.render();
};

export default generateCars;
