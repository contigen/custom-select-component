import React, { useState, Fragment } from "react";
import "./index.css";
import useArray from "./../../hooks/useArray";

const Select = ({ multiple }) => {
  const [defaultArrItem] = useState([1, 2, 3, 4]);
  const {
    arrayState: selectArrItem,
    updateArrayItem,
    deleteArrayItem,
    clearArray,
  } = useArray();
  const handleSelect = ({ target }) => {
    // neglect clicks outside LI elements
    if (target.tagName !== `LI`) return;
    const targetValue = target.innerText;
    updateArrayItem(targetValue);
  };
  const deleteItem = (_, idx) => {
    deleteArrayItem(idx);
  };
  const deleteAllItems = () => {
    clearArray();
  };
  return (
    <section className="select">
      <h1 className="select__first-text">Building a custom select component</h1>
      <br />
      <details className="select__details">
        <summary className="select__details__summary">
          Some details&nbsp;
          {multiple
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
            : selectArrItem[0] && <span>{selectArrItem.at(-1)}</span>}
          {selectArrItem[0] && (
            <button
              onClick={deleteAllItems}
              className="select__delete-all-times"
            >
              clear all
            </button>
          )}
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
