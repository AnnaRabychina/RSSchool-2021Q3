import './global.css';
import {ICard, Cards} from './view/cards/cards';
import cardsData from './view/cards/cardData';

const app = new Cards();
app.draw(cardsData);


