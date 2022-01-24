import { getCarImage } from './get-img-car';

export const createItemCar = (name: string, color: string, id: number): string => {
  const car = `
  <li class="garage-car">
    <div class="car-header">
      <button class="btn btn-control btn-select" data-select=${id}> select </button>
      <button class="btn btn-control btn-remove" data-remove=${id}> remove </button>
      <h3 class="page-subtitle car-title">${name}</h3>
    </div>
    <div class="car-race">
      <div class="car-control">
        <button class="btn btn-start" data-start=${id}> start </button>
        <button class="btn btn-stop" data-stop=${id}> stop </button>
      </div>
      <div class="car-box" data-car=${id}>
        ${getCarImage(color)}
      </div>
    <img class="flag" src="./../assets/svg/flag.svg" alt="flag">
  </div>
</li>`;
  return car;
};
