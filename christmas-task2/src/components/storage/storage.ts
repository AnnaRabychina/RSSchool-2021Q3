export function getLocalStorage(key: string) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key) || '');
  }
}

export function setLocalStorage(key: string, value: string | object) {
  localStorage.setItem(key, JSON.stringify(value));
}
