import React from "react";
import styles from "./Heading.module.css";
const Heading = ({ text, style }) => {
  return (
    <div className={styles.home__headings} style={style}>
      <h1>{text}</h1>
      <div></div>
    </div>
  );
};

export default Heading;
