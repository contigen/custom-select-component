import React, { useState, Fragment, useEffect, useCallback } from "react";
import "./index.css";

const Select = ({ multiple }) => {
  const [defaultArrItem] = useState([1, 2, 3, 4]);
  const [selectArrItem, setSelectArrItem] = useState([]);
  const handleSelect = ({ target }) => {
    setSelectArrItem((prevValue) => [
      // avoid creating duplicates
      ...new Set([...prevValue, target.innerText]),
    ]);
  };
  const deleteItem = (evt, idx) => {
    evt.stopPropagation();
    setSelectArrItem((prevValue) => [
      ...prevValue.slice(0, idx),
      ...prevValue.slice(idx + 1, prevValue.length),
    ]);
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
            : // if any element in the array exists, show the last one
              selectArrItem[0] && <span>{selectArrItem.at(-1)}</span>}
        </summary>
        <hr />
        <ul className="select__list" onClick={handleSelect}>
          {defaultArrItem.map((item) => (
            <li key={item}>hello{item}</li>
          ))}
        </ul>
      </details>
    </section>
  );
};

export default Select;
