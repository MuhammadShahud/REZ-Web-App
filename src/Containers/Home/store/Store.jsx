import React from "react";
import { Col, Row } from "react-bootstrap";

import { Heading, StoreCard } from "../../../Components";
import styles from "./Store.module.css";
import Card1 from "../../../Assets/store 1.jpg";
import Card2 from "../../../Assets/store 2.jpg";
import Card3 from "../../../Assets/store 3.jpg";
const Store = () => {
  return (
    <div className={`my-5 ${styles.home__store}`}>
      <section className="container">
        <div>
          <Heading text="BUY MERCHANDISE / STORE" />
        </div>
        <Row>
          <Col md={3}>
            <StoreCard img={Card1} price="35" title="ADULTS AWAY JERSEY" />
          </Col>
          <Col md={3}>
            <StoreCard img={Card2} price="15" title="ADULTS AWAY SOCKS" />
          </Col>
          <Col md={3}>
            <StoreCard img={Card3} price="25" title="ADULTS AWAY SHORTS" />
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Store;
