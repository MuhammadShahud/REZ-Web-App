import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, style, onClick, disabled }) => {
  return (
    <>
      <button disabled={disabled} style={style} onClick={onClick} className={styles.rezButton}>
        {text ? text : "JOIN US!"}
      </button>
    </>
  );
};

export default Button;
