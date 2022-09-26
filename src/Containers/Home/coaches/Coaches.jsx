import React from "react";
import { Col, Row } from "react-bootstrap";

import { CoachesCard, Heading } from "../../../Components";
import styles from "./Coaches.module.css";
import card1 from "../../../Assets/couch-profile-1.jpg";
import card2 from "../../../Assets/couch-profile-2.jpg";
import card3 from "../../../Assets/couch-profile-3.jpg";
import card4 from "../../../Assets/couch-profile-4.jpg";

const Coaches = () => {
  return (
    <section className={`container my-3 ${styles.home__coaches}`}>
      <Heading text="COACHES" style={{ alignItems: "center" }} />

      <section className={`${styles.home__coaches__card}`}>
        <Row className="d-flex justify-content-center">
          <Col md={3} xs={6}>
            <CoachesCard img={card1} name="Reta Steve" />
          </Col>
          <Col md={3} xs={6}>
            <CoachesCard img={card2} name="Jack Dorsey" />
          </Col>
          <Col md={3} xs={6}>
            <CoachesCard img={card3} name="Like Nastya" />
          </Col>
          <Col md={3} xs={6}>
            <CoachesCard img={card4} name="Reta Steve" />
          </Col>
        </Row>
      </section>
    </section>
  );
};

export default Coaches;
