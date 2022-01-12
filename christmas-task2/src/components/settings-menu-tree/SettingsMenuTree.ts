import './settingsMenuTree.css';
import { PageTree } from "../../pages/page-tree";
import { insertElement } from "../../services/services";
import { TreeContainer } from "../tree/tree";
import { SettingsAudioAndSnow } from '../settings-tree-container/SettingsAudioAndSnow';
import { SettingsBg } from '../settings-tree-container/settingsBg';
import { SettingsGarland } from '../settings-tree-container/SettingsGarland';
import { SettingsTree } from '../settings-tree-container/settingsTree';


export class SettingsMenuTreeContainer {
  private container: HTMLElement;
  private settingsAudioAndSnow: SettingsAudioAndSnow;
  private settingsTree: SettingsTree;
  private settingsBg: SettingsBg;
  private settingsGarland: SettingsGarland;
  private resetButton: HTMLButtonElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('settings-tree-menu');
    this.settingsAudioAndSnow = new SettingsAudioAndSnow();
    this.settingsTree = new SettingsTree();
    this.settingsBg = new SettingsBg();
    this.settingsGarland = new SettingsGarland();
    this.resetButton = <HTMLButtonElement>insertElement('button', ['reset-button'], 'Сброс настроек');
    this.resetButton.onclick = () => {
      this.resetSettings();
    };
  }

  resetSettings(): void {
    localStorage.removeItem('numBgTree');
    localStorage.removeItem('numImgTree');
    PageTree.treeContainer.render();
    TreeContainer.garlandContainer.clear();
    TreeContainer.snowContainer.classList.add('hide');
    PageTree.favoritesCards.render();
  }

  render(): HTMLElement {
    const settingsAudioAndSnowHTML = this.settingsAudioAndSnow.render();
    const settingsTreeHTML = this.settingsTree.render();
    const settingsBgHTML = this.settingsBg.render();
    const settingsGarlandHTML = this.settingsGarland.render();
    this.container.append(settingsAudioAndSnowHTML, settingsTreeHTML, 
      settingsBgHTML, settingsGarlandHTML, this.resetButton);
    return this.container;
  }
}