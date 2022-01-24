import { renderInput } from '../services/services';

abstract class ControlItem {
  protected container: HTMLElement;

  inputText: HTMLInputElement;

  inputColor: HTMLInputElement;

  constructor() {
    this.container = document.createElement('div');
    this.inputText = renderInput('input-text', 'text', '');
    this.inputColor = renderInput('input-color', 'color', '#000000');
  }

  setValues(text: string, color: string): void {
    this.inputColor.value = color;
    this.inputText.value = text;
  }

  render(): HTMLElement {
    return this.container;
  }
}

export default ControlItem;
