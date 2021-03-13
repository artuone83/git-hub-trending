export const getFromLocalStorage = (key: string): string | null => {
  const storedItem = window.localStorage.getItem(key);

  if (storedItem) {
    return storedItem;
  }

  return null;
};
