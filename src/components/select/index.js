import React, { useState, Fragment, useEffect, useCallback } from "react";
import "./index.css";
import { checkForValue, findValue } from "../../utils/";

const Select = ({ multiple }) => {
  const [defaultArrItem] = useState([1, 2, 3, 4]);
  const [selectArrItem, setSelectArrItem] = useState([]);
  const handleSelect = ({ target }) => {
    // setSelectArrItem((prevValue) => [
    //   // avoid creating duplicates
    //   ...new Set([...prevValue, target.innerText]),
    // ]);
    const targetValue = target.innerText;
    if (checkForValue(targetValue, selectArrItem)) {
      let targetIdx = findValue(targetValue, selectArrItem);
      setSelectArrItem((prevValue) => [
        ...prevValue.slice(0, targetIdx),
        ...prevValue.slice(targetIdx + 1, prevValue.length),
        prevValue[targetIdx],
      ]);
    } else {
      setSelectArrItem((prevValue) => [...prevValue, target.innerText]);
    }
  };
  const deleteItem = (_, idx) => {
    setSelectArrItem((prevValue) => [
      ...prevValue.slice(0, idx),
      ...prevValue.slice(idx + 1, prevValue.length),
    ]);
  };
  const deleteAllItems = () => {
    setSelectArrItem([]);
  };
  return (
    <section className="select">
      <h1 className="select__first-text">Building a custom select component</h1>
      <br />
      <details className="select__details">
        <summary className="select__details__summary">
          Some details&nbsp;
          {!multiple
            ? selectArrItem.map((el, idx) => (
                <Fragment key={el}>
                  <span>
                    {el}
                    <sup
                      className="select__times"
                      onClick={(evt) => deleteItem(evt, idx)}
                    >
                      &times;
                    </sup>
                  </span>
                  &nbsp;
                </Fragment>
              ))
            : // if any element in the array exists, show the spans
              selectArrItem[0] &&
              (() => (
                <>
                  <span>{selectArrItem.at(-1)}</span>
                  <span
                    onClick={deleteAllItems}
                    className="select__delete-all-times"
                  >
                    &times;
                  </span>
                </>
              ))()}
        </summary>
        <hr />
        <ul className="select__list" onClick={handleSelect}>
          {defaultArrItem.map((item, idx) => (
            <li key={item} tabIndex={idx + 1}>
              hello{item}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
};

export default Select;
