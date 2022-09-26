import React from "react";

import styles from "./EventCard.module.css";

const EventCard = ({ img, isPrevious }) => {
  return (
    <div className={styles.events__card}>
      <div className={styles.events__card__img}>
        <img src={img} width="100%" alt="" />
      </div>
      <div className={styles.events__card__content}>
        <h6>UEFA Champions League</h6>
        <small>Date: March 17 2022</small>
      </div>
    </div>
  );
};

export default EventCard;
