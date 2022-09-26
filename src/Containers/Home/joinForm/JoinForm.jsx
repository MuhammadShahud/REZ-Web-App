import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Button, InputField } from "../../../Components";
import styles from "./JoinForm.module.css";

const JoinForm = () => {
  const history = useHistory();
  return (
    <section className={`container ${styles.joinForm}`}>
      <Row className="d-flex align-items-center ">
        <Col
          md={3}
          className={`d-flex flex-column align-items-center  ${styles.joinForm__title}`}
        >
          <h6>JOIN E-CLASSES</h6>
          <small>Register Now!</small>
        </Col>
        <Col md={6} className="d-flex flex-wrap my-3   justify-content-center ">
          <div className="mx-3">
            <InputField
              style={{
                border: "1px solid var(--light-grey) ",
                background: "transparent",
              }}
              placeholder="Your Name"
              label="YOUR NAME"
            />
          </div>
          <div className="mx-3">
            <InputField
              style={{
                border: "1px solid var(--light-grey) ",
                background: "transparent",
              }}
              placeholder="Your e-mail address..."
              label="YOUR EMAIL"
            />
          </div>
        </Col>
        <Col
          md={3}
          className={`d-flex flex-column align-items-center ${styles.joinForm__btn}`}
        >
          <Button
            onClick={() => {
              history.push("/signup");
            }}
          />
        </Col>
      </Row>
    </section>
  );
};

export default JoinForm;
