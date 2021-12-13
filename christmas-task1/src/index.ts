import './global.css';
import {Cards, selectToy} from './view/cards/cards';
import cardsData from './view/cards/cardData';

const app = new Cards();
app.draw(cardsData);
selectToy();


