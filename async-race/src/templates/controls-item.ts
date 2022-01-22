abstract class ControlItem {
  protected container: HTMLElement;
  inputText: HTMLInputElement;
  inputColor: HTMLInputElement;

  constructor() {
    this.container = document.createElement('div');
    this.inputText = this.renderInput('input-text', 'text', '');
    this.inputText.disabled = true;
    this.inputColor = this.renderInput('input-color', 'color', '#000000');
    this.inputColor.disabled = true;
 }

  renderInput(stiles: string, type: string, value?: string | undefined): HTMLInputElement {
    const itemInput = document.createElement('input');
    itemInput.classList.add(stiles);
    itemInput.type = type;
    if (value) {
      itemInput.value = value;
    }
    return itemInput;
  }

  render(): HTMLElement {
    return this.container;
  }
}

export default ControlItem;
