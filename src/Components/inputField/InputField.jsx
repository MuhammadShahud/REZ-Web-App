import React from "react";
import styles from "./InputField.module.css";

const InputField = ({
  style,
  placeholder,
  label,
  type,
  labelStyle,
  value,
  onChange,
  disabled,
  ...props
}) => {
  return (
    <>
      {label && (
        <label className={styles.rez__label} htmlFor="" style={labelStyle}>
          {label}
        </label>
      )}
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        className={styles.rez__input}
        style={style}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default InputField;
