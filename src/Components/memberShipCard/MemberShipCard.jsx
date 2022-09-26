import React from "react";
import Button from "../button/Button";

import styles from "./MemberShipCard.module.css";

const MemberShipCard = ({ children }) => {
  return <div className={`${styles.memberShip__card}`}>{children}</div>;
};

export default MemberShipCard;
