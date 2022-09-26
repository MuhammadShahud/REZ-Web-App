import React from "react";
import { Col, Row,Container } from "react-bootstrap";

import {
  CoachesCard,
  Heading,
  RezNavbar,
  Button,
  EClassesCard,
} from "../../Components";
import { Footer } from "../../Containers";
import Classes1 from "../../Assets/e-classes-history_img_1.jpg";
import Classes2 from "../../Assets/e-classes-history_img_2.jpg";
import Classes3 from "../../Assets/e-classes-history_img_3.jpg";
import Classes4 from "../../Assets/e-classes-history_img_4.jpg";
import Classes5 from "../../Assets/e-classes-details_img.jpg";

import styles from "./E-Classes.module.css";
import { useHistory } from "react-router-dom";
import SearchBar from "../../Components/searchBar/searchBar";

const EClasses = () => {
  const history = useHistory();
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />
      <div className="my-3">
        <Heading text="E-CLASSES" style={{ alignItems: "center" }} />
      </div>
      <Container>
        <SearchBar placeholder={"Search Now"} />
      </Container>
      <section className={styles.cards__wrapper}>
        <section className="container">
          <Row>
            {coachesObj.map((val, ind) => {
              return (
                <Col
                  md={3}
                  key={ind}
                  onClick={() =>
                    history.push("/classesdetails", {
                      data: val,
                    })
                  }
                >
                  <EClassesCard dataObj={val} />
                </Col>
              );
            })}
          </Row>
        </section>
      </section>

      <div className="d-flex justify-content-center my-4">
        <Button text="Load More" />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

const coachesObj = [
  {
    img: Classes5,
    name: "Gym Session 1",
  },
  {
    img: Classes2,
    name: "Stamina Lessons",
  },
  {
    img: Classes3,
    name: "Online Classes",
  },
  {
    img: Classes4,
    name: "Gym Session 2",
  },
  {
    img: Classes1,
    name: "Gym Session 1",
  },
  {
    img: Classes2,
    name: "Stamina Lessons",
  },
  {
    img: Classes3,
    name: "Online Classes",
  },
  {
    img: Classes4,
    name: "Gym Session 2",
  },
  {
    img: Classes1,
    name: "Gym Session 1",
  },
  {
    img: Classes2,
    name: "Stamina Lessons",
  },
  {
    img: Classes3,
    name: "Online Classes",
  },
  {
    img: Classes4,
    name: "Gym Session 2",
  },
];

export default EClasses;
