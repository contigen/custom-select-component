export function checkForValue(query, Arr) {
  return Arr.includes(query);
}
export function findValueIndex(query, Arr) {
  return Arr.findIndex((val) => query === val);
}
export function findElement(query, Arr) {
  return Arr.find((el) => query === el.innerText);
}
export const addSelectedAttr = (value, Arr) => {
  const targetElement = findElement(value, Arr);
  targetElement.ariaSelected = true;
};
export const addSingleSelectedAttr = (value, Arr) => {
  // for single selection mode, need to reset the aria-selected attribute of previous selected item elements to false, and set true for the latest selected item element
  resetSelectedAttr(Arr);
  addSelectedAttr(value, Arr);
};
export const removeSelectedAttr = (value, Arr) => {
  const targetElement = findElement(value, Arr);
  targetElement.ariaSelected = false;
};
export const resetSelectedAttr = (Arr) => {
  Arr.forEach((el) => (el.ariaSelected = false));
};
