import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../button/Button";

import styles from "./HomeFacilitiesCard.module.css";

const HomeFacilitiesCard = ({ img, title }) => {
  const history = useHistory();

  return (
    <div className={`${styles.home__facilities__card}`}>
      <img src={img} width="100%" alt="" />
      <div className={`${styles.facilities__card__button}`}>
        <Button
          text="BOOK NOW"
          style={{ position: "relative", top: "-20px" }}
          onClick={() => {
            history.push("/signup");
          }}
        />
      </div>
      <p> {title}</p>
    </div>
  );
};

export default HomeFacilitiesCard;
