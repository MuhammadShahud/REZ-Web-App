import React from "react";
import { Col, Row } from "react-bootstrap";

import { Heading } from "../../../Components";
import HighlightImg from "../../../Assets/highlights.jpg";
import styles from "./Hightlights.module.css";

const Highlights = () => {
  return (
    <div className={`container my-3`}>
      <section className="container">
        <Heading text="HIGHLIGHTS" />
      </section>

      <Row className="d-flex justify-content-center align-items px-3">
        <Col md={6} className=" p-0 d-flex flex-column justify-content-center ">
          <ul className={`${styles.highlight__list}`}>
            <li>
              Schneiderlin On Baningime's <br /> 'Desire To Learn'
              <small>19 Feb 2022</small>
            </li>
            <li>
              Baines: Confident Keane Is <br /> 'Huge Positive' For Blues
              <small>10 Feb 2022</small>
            </li>
            <li>
              Pickford Will Get 'Even Better' <br /> Working With 'Fantastic'
              Margetson
              <small>31 Jan 2022</small>
            </li>
            <li>
              WATCH: Youngsters Meet <br /> First-Team Stars At Academy Day
              <small>24 Apr 2022</small>
            </li>
          </ul>
        </Col>
        <Col md={6} className="p-0">
          <img src={HighlightImg} className="img-fluid" alt="hightlight" />
        </Col>
      </Row>
    </div>
  );
};

export default Highlights;
