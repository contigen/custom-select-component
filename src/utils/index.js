export function checkForValue(query, Arr) {
  return Arr.includes(query);
}
export function findValueIndex(query, Arr) {
  return Arr.findIndex((el) => query === el);
}
