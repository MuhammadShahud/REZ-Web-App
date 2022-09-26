import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <Row className="m-0">
        <Col md={5} sm={4} className=" text-center">
          <p> &copy; Copyright 2022. All Right Reserved</p>
        </Col>
        <Col md={2} sm={4} className="text-center">
          <AiFillFacebook />
          <AiOutlineInstagram />
          <AiFillYoutube />
          <AiOutlineTwitter />
        </Col>
        <Col md={5} sm={4} className="text-center">
          <p>Privacy Policy | Terms &#38; Condition</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
