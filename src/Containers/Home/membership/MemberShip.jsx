import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Button, Heading, MemberShipCard } from "../../../Components";
import styles from "./MemberShip.module.css";


const MemberShip = () => {
  const history = useHistory();

  return (
    <div className={`container`}>
      <div className={`my-3 ${styles.memberShip__heading}`}>
        <h6>Join us in Just</h6>
        <Heading text="MEMBERSHIP" style={{ alignItems: "center" }} />
      </div>

      <Row className="d-flex justify-content-center my-3">
        <Col md={4}>
          <MemberShipCard>
            <div>
              <h6>Gold</h6>
              <h3>MEMBERSHIP</h3>
            </div>
            <h1 className="gradient__text">$250</h1>
            <ul>
              <li>All You Need to know</li>
              <li>Adults</li>
              <li>International</li>
              <li>Young Blues (5-17)</li>
              <li>Infants (0-4)</li>
              <li>Term and Condition</li>
            </ul>
            <Button text="BUY NOW"
              onClick={() => {
                history.push("/payment");
              }} />
          </MemberShipCard>
        </Col>
        <Col md={4}>
          <MemberShipCard>
            <div>
              <h6>Gold</h6>
              <h3>MEMBERSHIP</h3>
            </div>
            <h1 className="gradient__text">$250</h1>
            <ul>
              <li>All You Need to know</li>
              <li>Adults</li>
              <li>International</li>
              <li>Young Blues (5-17)</li>
              <li>Infants (0-4)</li>
              <li>Term and Condition</li>
            </ul>
            <Button text="BUY NOW"
              onClick={() => {
                history.push("/payment");
              }} />
          </MemberShipCard>
        </Col>
      </Row>
    </div>
  );
};

export default MemberShip;
