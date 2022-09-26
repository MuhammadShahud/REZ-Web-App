import React from "react";

import styles from "./StoreCard.module.css";
import Button from "../button/Button";
import { useHistory } from "react-router-dom";

const StoreCard = ({ img, price, title }) => {
  const history = useHistory();
  return (
    <section className="text-center">
      <div className={`${styles.store__card}`}>
        <img src={img} className="img-fluid" alt="" />
        <div>
          <h6>{title}</h6>
          <h6>${price}</h6>
        </div>
      </div>
      <Button
        onClick={() => {
          history.push("/signup");
        }}
        text="Buy Now"
      />
    </section>
  );
};

export default StoreCard;
