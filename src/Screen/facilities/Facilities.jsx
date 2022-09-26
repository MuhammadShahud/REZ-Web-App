import React from "react";
import { useHistory } from "react-router-dom";

import { Heading, RezNavbar } from "../../Components";
import styles from "./Facilities.module.css";
import { Col, Row } from "react-bootstrap";
import Facilities1 from "../../Assets/facilities_img_1.jpg";
import Facilities2 from "../../Assets/facilities_img_2.jpg";
import Facilities3 from "../../Assets/facilities_img_3.jpg";
import Facilities4 from "../../Assets/facilities_img_4.jpg";
import { Footer } from "../../Containers";

const Facilities = () => {
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <div className="my-3">
        <Heading text="FACILITIES" style={{ alignItems: "center" }} />
      </div>

      <section className="container">
        <Row>
          {facilitiesObj.map((data, index) => {
            return (
              <Col sm="12" md="6" key={index}>
                <FacilitiesCard data={data} />
              </Col>
            );
          })}
        </Row>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const FacilitiesCard = ({ data }) => {
  const history = useHistory();
  return (
    <section
      onClick={() => history.push("/facilitiesdetails")}
      className={styles.facilitiesCard}
    >
      <div className={styles.facilitiesCard__date}>
        <h1>{data.date}</h1>
        <h3>{data.month}</h3>
      </div>
      <div className={styles.facilitiesCard__content}>
        <div className={styles.facilitiesCard__img}>
          <img src={data.image} alt="" />
        </div>
        <div className={styles.facilitiesCard__details}>
          <h4>{data.name}</h4>
          <h5>13:00 - 15:00</h5>
          <h5>$60</h5>
        </div>
      </div>
    </section>
  );
};

const facilitiesObj = [
  {
    date: 6,
    month: "Apr",
    name: "Football",
    image: Facilities1,
  },
  {
    date: 8,
    month: "Apr",
    name: "Online Classes",
    image: Facilities2,
  },
  {
    date: 11,
    month: "Apr",
    name: "Training Session",
    image: Facilities3,
  },
  {
    date: 12,
    month: "Apr",
    name: "Football",
    image: Facilities4,
  },
  {
    date: 17,
    month: "Apr",
    name: "Football",
    image: Facilities1,
  },
  {
    date: 19,
    month: "Apr",
    name: "Online Classes",
    image: Facilities2,
  },
  {
    date: 20,
    month: "Apr",
    name: "Training Session",
    image: Facilities3,
  },
  {
    date: 23,
    month: "Apr",
    name: "Football",
    image: Facilities4,
  },
];

export default Facilities;
