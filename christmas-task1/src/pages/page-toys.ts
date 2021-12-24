import cardsData from "../view/cards/cardData";
import { CardsContainer } from "../view/cards/cards";
import { updateCardsContainer } from "../view/filters/filters";
import { SettingsContainer } from "../view/settings/settings";
import { setLocalStorage } from "../view/storage/storage";

export class PageToys {
  public cardsContainer;
  public settingsContainer;

  constructor() {
    this.cardsContainer = new CardsContainer();
    this.settingsContainer = new SettingsContainer();
    
  }

  /*        <div class="settings-container">
          <h2 class="controls-title">Сортировать</h2>
          <select class="sort-select">
            <option value="sort-name-max">По названию от «А» до «Я»</option>
            <option value="sort-name-min">По названию от «Я» до «А»</option>
            <option value="sort-year-max">Год приобретения по возрастанию</option>
            <option value="sort-year-min">Год приобретения по убыванию</option>
          </select>
          <h2 class="controls-title">Фильтры по значению</h2>
          <div class="shape">
            Форма:
            <button data-shape="шар"></button>
            <button data-shape="колокольчик"></button>
            <button data-shape="шишка"></button>
            <button data-shape="снежинка"></button>
            <button data-shape="фигурка"></button>
          </div>
          <div class="color">
            Цвет:
            <button data-color="белый"></button>
            <button data-color="желтый"></button>
            <button data-color="красный"></button>
            <button data-color="синий"></button>
            <button data-color="зелёный"></button>
          </div>
          <div class="size">
            Размер:
            <button data-size="большой"></button>
            <button data-size="средний"></button>
            <button data-size="малый"></button>
          </div>
          <div class="favorite-container">
            Только любимые:
            <input type="checkbox" class="favorite-input" id="checkbox" />
            <label for="checkbox" class="favorite-input-label"></label>
          </div>
          <h2 class="controls-title">Фильтры по диапазону</h2>
          <div class="count">
            <p>Количество экземпляров:</p>
            <div class="count-slider-container">
              <output class="count-min">1</output>
              <div class="container-slider">
                <input id="count-range1" class="count-range1" type="range" min="1" step="1" max="12" value="1" />
                <input id="count-range2" class="count-range2" type="range" min="1" step="1" max="12" value="12" />
              </div>
              <output class="count-max">12</output>
            </div>
          </div>
          <div class="year">
            <p>Год приобретения:</p>
            <div class="year-slider-container">
              <output class="year-min">1940</output>
              <div class="container-slider">
                <input id="year-range1" class="year-range1" type="range" min="1940" step="10" max="2020" value="1940" />
                <input id="year-range2" class="year-range2" type="range" min="1940" step="10" max="2020" value="2020" />
              </div>
              <div class="year-slider"></div>
              <output class="year-max">2020</output>
            </div>
          </div>
          <button class="reset">Сброс фильтров</button>
        </div>
        <div class="cards-container"></div>
      </div>
*/
  
 render() {
    setLocalStorage('currentData', [...cardsData])
    updateCardsContainer();
    this.cardsContainer.selectToy();
  }
}