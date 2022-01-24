import { createCar } from '../api/api';
import { COUNT_OF_CARS } from '../options/options';
import PageGarage from '../view/garage';
import { createRandomCars } from './services';

const generateCars = async (): Promise<void> => {
  const cars = createRandomCars(COUNT_OF_CARS);
  await Promise.all(cars.map(async car => createCar(car)));
  await PageGarage.carsContainer.render();
};

export default generateCars;
