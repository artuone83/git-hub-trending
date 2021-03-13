export const setToLocalStorage = (name: string, value: string): void => {
  window.localStorage.setItem(name, value);
};
