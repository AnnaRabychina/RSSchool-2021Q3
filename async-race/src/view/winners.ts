import { getCar, getWinners, IWinner } from '../api/api';
import { winnersTableHeader } from '../options/options';
import Page from '../templates/page';

class PageWinners extends Page {
  page: HTMLElement;

  constructor(id: string) {
    super(id);
    this.page = document.createElement('div');
    this.page.classList.add('winners');
  }

  createItemWinner(id: number, name: string, color: string, wins: number, time: number): string {
    let winner = `
      <tr class="table-row">
        <td>${id}</td>
        <td>${this.renderCarImage(color)}</td>
        <td>${name}</td>
        <td>${wins}</td>
        <td>${time}</td>
      </tr>
    `;
    return winner;
  }

  async renderWinners() {
    const winnersContainer = document.createElement('table');
    winnersContainer.classList.add('winners-table');
    let winnersItems: IWinner[] = <IWinner[]>(await getWinners(1, 10)).items;
    let arrWinners: IWinner[] = [...winnersItems];
    let winnersContainerHTML = winnersTableHeader;
    arrWinners.forEach(async (winnerItem) => {
      const car = await getCar(winnerItem.id);
      winnersContainerHTML += this.createItemWinner(
        winnerItem.id,
        car.name,
        car.color,
        winnerItem.wins,
        winnerItem.time
      );
      winnersContainer.innerHTML = winnersContainerHTML;
    });
    return winnersContainer;
  }

  async render() {
    const count = (await getWinners()).count;
    const title = this.createTitle(`winners (${count})`);
    this.page.append(title, this.createPagination(), await this.renderWinners());
    this.container.append(this.page);
    return this.container;
  }
}

export default PageWinners;
