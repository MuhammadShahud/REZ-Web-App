import React from "react";

import styles from "./DropDown.module.css";

const DropDown = ({ values, options, onClick, dropdownValue, placeholder, style }) => {
  return (
    <>
      <select
        value={dropdownValue}
        onChange={onClick}
        className={styles.rez__dropDown}
        style={style}
      >
        <option value="#" disabled>
          {placeholder}
        </option>
        {
          values && options ?
            options?.map((option, index) => {
              return (
                <option value={values[index]} key={index}>
                  {option}
                </option>
              );
            })
            :
            options?.map((option, index) => {
              return (
                <option value={option} key={index}>
                  {option}
                </option>
              );
            })
        }

      </select>
    </>
  );
};

export default DropDown;
