import { IWinner, getWinners, getCar } from '../api/api';
import { MAX_WINNERS_PER_PAGE, WINNERS_TABLE_HEADER } from '../options/options';
import { createItemWinner } from './create-winner';

export const renderWinners = async (): Promise<HTMLTableElement> => {
  const winnersContainer = document.createElement('table');
  winnersContainer.classList.add('winners-table');
  let winnersItems = <IWinner[]>(await getWinners(1, MAX_WINNERS_PER_PAGE)).items;
  let winnersContainerHTML = WINNERS_TABLE_HEADER;
  winnersItems.forEach(async (winnerItem) => {
    const car = await getCar(winnerItem.id);
    winnersContainerHTML += createItemWinner(
      winnerItem.id,
      car.name,
      car.color,
      winnerItem.wins,
      winnerItem.time
    );
    winnersContainer.innerHTML = winnersContainerHTML;
  });
  return winnersContainer;
};
