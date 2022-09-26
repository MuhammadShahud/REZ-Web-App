import React from "react";

import styles from "./EClasses.module.css";

const EClassesCard = ({ dataObj }) => {
  return (
    <div className={styles.eclasses__card}>
      <img src={dataObj.img} alt="" />
      <h5>{dataObj.name}</h5>
      <p className={styles.eclasses__card__price}>$12.00</p>
      <p>Date : September 15 2021</p>
      <p>Duration: 01 hour</p>
    </div>
  );
};

export default EClassesCard;
