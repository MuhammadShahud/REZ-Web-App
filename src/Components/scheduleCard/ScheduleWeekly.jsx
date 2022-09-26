import { display } from "@mui/system";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ScheduleModal from "../scheduleModal/ScheduleModal";
import Schedule1 from "../../Assets/schedule_img_1.jpg";
import styles from "./ScheduleCard.module.css";
import InputField from "../inputField/InputField";

const ScheduleWeekly = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  return (
    <div className={`${styles.scheduleCard}`}>
      <div className="d-flex justify-content-center align-item-center w-100 my-2">
        <div>
        <InputField type={'date'} style={{width:'100%'}}/>
        </div>
      </div>
      <h4 className="gradient__text text-center">Week 1</h4>
      <div
        style={{
          margin: "0 10px",
        }}
      >
        <h1 className="gradient__text" style={{ fontWeight: "bold" }}>
          3
        </h1>
        <h2>Wednesday</h2>
      </div>

      <section className={styles.scheduleCard__box}>
        <section
        onClick={handleShow}
          className={styles.scheduleCard__wrapper}
          // onClick={() => {
          //   history.push("/bookappointment");
          // }}
        >
          <section>
            <img src={Schedule1} width="80" alt="" />
          </section>
          <section className={styles.scheduleCard__content}>
            <h6>8:00 - 9:00 PM</h6>
            <p>Football Training</p>
            <p>Lorem, ipsum dolor.</p>
          </section>
        </section>
        <section
          className={styles.scheduleCard__wrapper}
          onClick={handleShow}
        >
          <section>
            <img src={Schedule1} width="80" alt="" />
          </section>
          <section className={styles.scheduleCard__content}>
            <h6>8:00 - 9:00 PM</h6>
            <p>Football Training</p>
            <p>Lorem, ipsum dolor.</p>
          </section>
        </section>
      </section>
      <ScheduleModal show={show} onShow={handleShow} onHide={handleClose}  />
    </div>
  );
};

export default ScheduleWeekly;
