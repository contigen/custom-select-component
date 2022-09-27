import React from "react";
import { checkForValue, findValueIndex } from "../utils";

export default function useArray(initialState) {
  const [arrayState, setArrayState] = React.useState(() => initialState || []);
  const addArrayItem = (newItem) => {
    setArrayState((prevValue) => [...prevValue, newItem]);
  };
  const updateArrayItem = (item) => {
    // no need to update first and last array items
    if (
      (arrayState.length === 1 && item === arrayState[0]) ||
      item === arrayState.at(-1)
    )
      return;
    // if item already exists, delete it and re-add to make it the last item
    if (checkForValue(item, arrayState)) {
      const idx = findValueIndex(item, arrayState);
      deleteArrayItem(idx);
    }
    addArrayItem(item);
  };
  const deleteArrayItem = (idx) => {
    setArrayState((prevValue) => [
      ...prevValue.slice(0, idx),
      ...prevValue.slice(idx + 1, prevValue.length),
    ]);
  };
  const clearArray = () => setArrayState([]);
  return {
    arrayState,
    setArrayState,
    updateArrayItem,
    deleteArrayItem,
    clearArray,
  };
}
