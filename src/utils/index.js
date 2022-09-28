export function checkForValue(query, Arr) {
  return Arr.includes(query);
}
export function findValueIndex(query, Arr) {
  return Arr.findIndex((val) => query === val);
}
export function findElement(query, Arr) {
  return Arr.find((el) => query === el.innerText);
}
