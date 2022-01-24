import { getCarImage } from './get-img-car';

export const createItemWinner = (
  id: number,
  name: string,
  color: string,
  wins: number,
  time: number
): string => {
  let winner = `
    <tr class="table-row">
      <td>${id}</td>
      <td>${getCarImage(color)}</td>
      <td>${name}</td>
      <td>${wins}</td>
      <td>${time}</td>
    </tr>
    `;
  return winner;
};
