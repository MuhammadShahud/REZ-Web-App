import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Heading } from "../../../Components";

import styles from "./ClubBanner.module.css";

const ClubBanner = () => {
  const history = useHistory();
  return (
    <div className={`my-5 ${styles.home__club}`}>
      <section className="container">
        <div>
          <h6>Join Team</h6>
          <Heading text="FOOTBALL CLUB" />
        </div>

        <div className={`${styles.club__box__wrapper}`}>
          <section className={`${styles.club__box}`}>
            <p>No. Players</p>
            <h1>15</h1>
          </section>
          <section className={`${styles.club__box}`}>
            <p>Rank</p>
            <h1>05</h1>
          </section>
          <section className={`${styles.club__box}`}>
            <p>Level</p>
            <h1>02</h1>
          </section>
        </div>
        <Button
          style={{ width: "180px", margin: "15px 0" }}
          text="REQUEST JOIN TEAM"
          onClick={() => {
            history.push("/signup");
          }}
        />
      </section>
    </div>
  );
};

export default ClubBanner;
