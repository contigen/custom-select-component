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
import {
  addSelectedAttr,
  addSingleSelectedAttr,
  removeSelectedAttr,
  resetSelectedAttr,
} from "./../../utils/";

const Select = ({ autoselect, multiple, defaultArr }) => {
  const [defaultArrItem] = useState(defaultArr);
  const detailsRef = useRef();
  const listRef = useRef([]);
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
    const listRefElement = [...listRef.current?.children];
    multiple
      ? addSelectedAttr(targetValue, listRefElement)
      : addSingleSelectedAttr(targetValue, listRefElement);
  };
  const deleteItem = (idx) => deleteArrayItem(idx);

  const deleteAllItems = () => {
    clearArray();
    resetSelectedAttr([...listRef.current?.children]);
  };

  const handleFocusedItem = useCallback(
    (evt) => {
      let focusedElement = evt.srcElement;
      focusedElement.addEventListener("keyup", (evt) => {
        if (evt.target.tagName !== `LI`) return;
        if (evt.key === `Enter` || autoselect) document.activeElement.click();
        if (evt.key === `ArrowUp`) {
          if (
            !(
              document.activeElement ===
              focusedElement.parentElement.firstElementChild
            )
          ) {
            focusedElement.previousElementSibling.focus();
          }
        } else if (evt.key === `ArrowDown`) {
          if (
            !(
              document.activeElement ===
              focusedElement.parentElement.lastElementChild
            )
          ) {
            focusedElement.nextElementSibling.focus();
          }
        } else if (evt.key === `PageUp`) {
          if (
            document.activeElement ===
            focusedElement.parentElement.firstElementChild
          )
            return;
          focusedElement.parentElement.firstElementChild.focus();
        } else if (evt.key === `PageDown`) {
          if (
            document.activeElement ===
            focusedElement.parentElement.lastElementChild
          )
            return;
          focusedElement.parentElement.lastElementChild.focus();
        }
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
    listRef.current.addEventListener(`focusin`, handleFocusedItem);
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
                      onClick={() => {
                        deleteItem(idx);
                        removeSelectedAttr(el, [...listRef.current?.children]);
                      }}
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
        <ul
          className="select__list"
          onClick={handleSelect}
          role="listbox"
          aria-multiselectable={true}
          ref={listRef}
        >
          {defaultArrItem.map((item, idx) => (
            <li
              key={item}
              tabIndex={0}
              role="option"
              aria-selected={false}
              id={idx}
            >
              {item}
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
