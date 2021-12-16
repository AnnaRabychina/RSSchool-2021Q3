import './global.css';
import {ToyPage} from './app/app'
import cardsData from './view/cards/cardData';
import {CardsContainer} from './view/cards/cards';

export let currentData = cardsData;

window.onload = () => {
    const app = new ToyPage()
    console.log(app) 
    app.start()
}


