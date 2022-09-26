import React from "react";
import { checkForValue, findValueIndex } from "../utils";

export default function useArray(initialState) {
  const [arrayState, setArrayState] = React.useState(() => initialState || []);
  const addArrayItem = (newItem) => {
    setArrayState((prevValue) => [...prevValue, newItem]);
  };
  const updateArrayItem = (item) => {
    // if item already exists, replace it
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
