import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, EventCard, Heading, RezNavbar } from "../../Components";
import { Footer } from "../../Containers";
import styles from "./Event.module.css";
import { Col, Row } from "react-bootstrap";
import Event1 from "../../Assets/events_img_1.jpg";
import Event2 from "../../Assets/events_img_2.jpg";
import Event3 from "../../Assets/events_img_3.jpg";
import Event4 from "../../Assets/events_img_4.jpg";
import Event5 from "../../Assets/events_img_5.jpg";
import Event6 from "../../Assets/events_img_6.jpg";
import Event7 from "../../Assets/events_img_7.jpg";
import Event8 from "../../Assets/events_img_8.jpg";
import Event9 from "../../Assets/events_img_9.jpg";
import Event10 from "../../Assets/events_img_10.jpg";

const Event = () => {
  const history = useHistory();

  const [historyToggler, setHistoryToggler] = useState(true);

  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <div className="my-3">
        <Heading text="EVENTS" style={{ alignItems: "center" }} />
      </div>

      <div className="d-flex justify-content-center">
        <Button
          text="UPCOMING EVENTS"
          style={
            historyToggler ? {} : { background: "transparent", color: "black" }
          }
          onClick={() => setHistoryToggler(true)}
        />
        <Button
          text="PREVIOUS EVENTS"
          style={
            historyToggler ? { background: "transparent", color: "black" } : {}
          }
          onClick={() => setHistoryToggler(false)}
        />
      </div>

      <section className="container my-5">
        <Row className="m-0">
          {historyToggler
            ? eventDetails.map((data, index) => {
                return (
                  <Col
                    sm="6"
                    md="6"
                    onClick={() => history.push("/eventdetails")}
                    key={index}
                  >
                    <EventCard img={data.img} />
                  </Col>
                );
              })
            : previousEventDetails.map((data, index) => {
                return (
                  <Col
                    sm="6"
                    md="6"
                    onClick={() => history.push("/eventdetails")}
                    key={index}
                  >
                    <EventCard img={data.img} />
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

const eventDetails = [
  {
    img: Event1,
  },
  {
    img: Event2,
  },
  {
    img: Event3,
  },
  {
    img: Event4,
  },
  {
    img: Event5,
  },
  {
    img: Event6,
  },
  {
    img: Event7,
  },
  {
    img: Event8,
  },
  {
    img: Event9,
  },
  {
    img: Event10,
  },
];

const previousEventDetails = [
  {
    img: Event5,
  },

  {
    img: Event3,
  },
  {
    img: Event10,
  },
  {
    img: Event4,
  },

  {
    img: Event1,
  },
  {
    img: Event6,
  },
  {
    img: Event8,
  },
  {
    img: Event7,
  },

  {
    img: Event9,
  },

  {
    img: Event2,
  },
];

export default Event;
