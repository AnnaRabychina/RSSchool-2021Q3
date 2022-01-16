import Page from '../templates/page';

class PageWinners extends Page {
  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    this.container.innerHTML = `
      <div class="winners">
       <h2 class="page-title">winners</h2>
      <div class="page-pagination">
        <button class="btn btn-prev"> prev </button>
        <button class="btn btn-next"> next </button>
      </div>
      <table class="winners-table">
        <tr class="table-head">
          <th>№</th>
          <th>car</th>
          <th>name</th>
          <th>total wins</th>
          <th>best time</th>
        </tr>
        <tr class="table-row">
        <td>№</td>
        <td>car</td>
        <td>name</td>
        <td>total wins</td>
        <td>best time</td>
      </tr>
      </table>  
      `;
    return this.container;
  }
}

export default PageWinners;
