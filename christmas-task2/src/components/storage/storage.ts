export function getLocalStorage(key: string): string| object| undefined {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key) || '');
  }
}

export function setLocalStorage(key: string, value: string | object): void {
  localStorage.setItem(key, JSON.stringify(value));
}
