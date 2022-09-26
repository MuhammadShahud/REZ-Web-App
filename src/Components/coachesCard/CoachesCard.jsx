import { Rate } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./coachesCard.module.css";

const CoachesCard = ({ img, name }) => {
  const history = useHistory();

  return (
    <div
      // onClick={() => {
      //   history.push("/coachprofile");
      // }}
      className={styles.coaches__card}
    >
      <img src={img} width="100%" alt="" />
      <h6>{name}</h6>
      <p>Football Trainer</p>
      <p>Coaching: 14 Years</p>
      <small>Rank # 1</small>
      <Rate disabled defaultValue={3} />
    </div>
  );
};

export default CoachesCard;
