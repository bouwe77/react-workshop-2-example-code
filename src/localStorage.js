import { reactLocalStorage } from "reactjs-localstorage";

export const getFromLocalStorage = (key, defaultValue) => {
  const value = reactLocalStorage.get(key, defaultValue);
  return JSON.parse(value);
};

export const setToLocalStorage = (key, value) => {
  const valueAsJson = JSON.stringify(value);
  reactLocalStorage.set(key, valueAsJson);
};
