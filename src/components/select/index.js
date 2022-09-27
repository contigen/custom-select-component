import React, {
  useState,
  Fragment,
  useRef,
  useEffect,
  useCallback,
} from "react";
import "./index.css";
import useArray from "./../../hooks/useArray";
import PropTypes from "prop-types";

//@todo add keyboard functionality, and ARIA attrs

const Select = ({ autoselect, multiple, defaultArr }) => {
  const [defaultArrItem] = useState(defaultArr);
  const detailsRef = useRef();
  const {
    arrayState: selectArrItem,
    updateArrayItem,
    deleteArrayItem,
    clearArray,
  } = useArray();
  //  event delegation
  const handleSelect = ({ target }) => {
    // neglect clicks outside LI elements
    if (target.tagName !== `LI`) return;
    const targetValue = target.innerText;
    updateArrayItem(targetValue);
  };
  const deleteItem = (idx) => deleteArrayItem(idx);
  const deleteAllItems = () => clearArray();
  const handleFocusedItem = useCallback(
    (evt) => {
      const mainElement = evt.srcElement;
      document.activeElement.addEventListener("keyup", (evt) => {
        if (evt.target.tagName !== `LI`) return;
        if (evt.key === `Enter` || autoselect) mainElement.click();
      });
    },
    [autoselect]
  );
  const triggerCloseState = useCallback((evt) => {
    if (evt.key !== `Escape`) return;
    if (detailsRef.current.open) {
      detailsRef.current.open = false;
    }
  }, []);
  useEffect(() => {
    detailsRef.current.addEventListener(`keyup`, triggerCloseState);
    detailsRef.current.addEventListener(`focusin`, handleFocusedItem);
    return () => {
      document.removeEventListener(`keyup`, triggerCloseState);
      document.removeEventListener(`focusin`, triggerCloseState);
    };
  }, [handleFocusedItem, triggerCloseState]);

  return (
    <section className="select">
      <h1 className="select__first-text">Building a custom select component</h1>
      <br />
      <details className="select__details" ref={detailsRef}>
        <summary className="select__details__summary">
          Some details&nbsp;
          {multiple
            ? selectArrItem.map((el, idx) => (
                <Fragment key={el}>
                  <span>
                    {el}
                    <button
                      className="select__times"
                      onClick={() => deleteItem(idx)}
                    >
                      &times;
                    </button>
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
              {multiple ? `clear all` : `clear`}
            </button>
          )}
        </summary>
        <hr />
        <ul className="select__list" onClick={handleSelect}>
          {defaultArrItem.map((item, idx) => (
            <li key={item} tabIndex={0}>
              hello{item}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
};
Select.defaultProps = {};

Select.propTypes = {
  autoselect: PropTypes.bool,
  multiple: PropTypes.bool,
  defaultArr: PropTypes.array.isRequired,
};
export default Select;
