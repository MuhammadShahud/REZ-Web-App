import React from "react";

import { CoachesCard, Heading, RezNavbar, Button } from "../../Components";
import SearchBar from "../../Components/searchBar/searchBar";
import { Footer } from "../../Containers";
import Coache1 from "../../Assets/couch-profile-1.jpg";
import Coache2 from "../../Assets/couch-profile-2.jpg";
import Coache3 from "../../Assets/couch-profile-3.jpg";
import Coache4 from "../../Assets/couch-profile-4.jpg";
import { Col, Row , Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import classes from './Coach.module.css';
const Coach = () => {
  const history = useHistory();
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />
      <div className="my-3">
        <Heading text="COACH" style={{ alignItems: "center" }} />
      </div>
      <section className="container">
      <div className={classes.coach__search}>
          <SearchBar placeholder={"Search Now"} />
        </div>
        <Row>
          {coachesObj.map((val, ind) => {
            return (
              <Col
                md={3}
                key={ind}
                onClick={() => history.push("/userprofileschedule/1")}
              >
                <CoachesCard img={val.img} name={val.name} />
              </Col>
            );
          })}
        </Row>
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
    img: Coache1,
    name: "Reta Steve",
  },
  {
    img: Coache2,
    name: "Jack Dorsey",
  },
  {
    img: Coache3,
    name: "Like Nastya",
  },
  {
    img: Coache4,
    name: "Steve Jobs",
  },
  {
    img: Coache1,
    name: "Reta Steve",
  },
  {
    img: Coache2,
    name: "Jack Dorsey",
  },
  {
    img: Coache3,
    name: "Like Nastya",
  },
  {
    img: Coache4,
    name: "Steve Jobs",
  },
  {
    img: Coache1,
    name: "Reta Steve",
  },
  {
    img: Coache2,
    name: "Jack Dorsey",
  },
  {
    img: Coache3,
    name: "Like Nastya",
  },
  {
    img: Coache4,
    name: "Steve Jobs",
  },
];

export default Coach;
