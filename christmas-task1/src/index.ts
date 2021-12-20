import './global.css';
import {ToyPage} from './app/app'
import { getLocalStorage } from './view/storage/storage';
import { changeProperty } from './view/cards/cards';

window.onload = () => {
    const app = new ToyPage()
    app.start();
   }


