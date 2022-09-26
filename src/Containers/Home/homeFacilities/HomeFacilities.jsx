import React from "react";
import { Col, Row } from "react-bootstrap";

import { HomeFacilitiesCard, Heading } from "../../../Components";
import styles from "./HomeFacilities.module.css";
import facilities1 from "../../../Assets/facilities-1.jpg";
import facilities2 from "../../../Assets/facilities-2.jpg";
import facilities3 from "../../../Assets/facilities-3.jpg";

const HomeFacilities = () => {
  return (
    <div className="my-5 container">
      <Heading text="FACILITIES" style={{ alignItems: "center" }} />

      <Row className="mt-5 d-flex justify-content-center">
        <Col md={3}>
          <HomeFacilitiesCard title="Hockey Rink" img={facilities1} />
        </Col>
        <Col md={3}>
          <HomeFacilitiesCard title="Football Field" img={facilities2} />
        </Col>
        <Col md={3}>
          <HomeFacilitiesCard title="Basket Court" img={facilities3} />
        </Col>
      </Row>
      {/* </section> */}
    </div>
  );
};

export default HomeFacilities;
