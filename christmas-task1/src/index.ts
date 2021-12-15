import './global.css';
import cardsData from './view/cards/cardData';
import {CardsContainer} from './view/cards/cards';
import {sortCards, selectSortList, sortData} from './view/settings/settings'

let currentDate = cardsData;

window.onload = () => {
    const app = new CardsContainer();
    app.draw(currentDate);
    app.selectToy()

}


selectSortList.addEventListener('click', () => sortCards(selectSortList.value));