import { display } from "@mui/system";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ScheduleModal from "../scheduleModal/ScheduleModal";
import Schedule5 from "../../Assets/schedule_img_5.jpg";
import Schedule6 from "../../Assets/schedule_img_1.jpg";
import Schedule7 from "../../Assets/schedule_img_2.jpg";
import Schedule8 from "../../Assets/schedule_img_3.jpg";
import styles from "./ScheduleCard.module.css";
import { useHistory } from "react-router-dom";
import InputField from "../inputField/InputField";

const ScheduleMontly = () => {
  return (
    <div className={`${styles.scheduleCard}`}>
      <div className="d-flex justify-content-center align-item-center w-100 my-2">
        <div>
        <InputField type={'date'} style={{width:'100%'}}/>
        </div>
      </div>
      <ScheduleWrapper monthName="September" />
      <ScheduleWrapper monthName="October" />
    </div>
  );
};

const ScheduleWrapper = ({ monthName }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  return (
    <>
      <h4 className="gradient__text text-center">{monthName}</h4>
      <div
        style={{
          margin: "0 10px",
        }}
      >
        <h1 className="gradient__text" style={{ fontWeight: "bold" }}>
          23
        </h1>
        <h2>Wednesday</h2>
      </div>

      <section className={styles.scheduleCard__box}>
        <section
          className={styles.scheduleCard__wrapper}
          // onClick={() => {
          //   history.push("/bookappointment");
          // }}
        >
          <section onClick={handleShow}>
            <img src={Schedule5} width="80" alt="" />
          </section>
          <section className={styles.scheduleCard__content}>
            <h6>8:00 - 9:00 PM</h6>
            <p>Football Training</p>
            <p>Lorem, ipsum dolor.</p>
          </section>
        </section>
        <section
          className={styles.scheduleCard__wrapper}
          // onClick={() => {
          //   history.push("/bookappointment");
          // }}
        >
          <section onClick={handleShow}>
            <img src={Schedule6} width="80" alt="" />
          </section>
          <section className={styles.scheduleCard__content}>
            <h6>8:00 - 9:00 PM</h6>
            <p>Football Training</p>
            <p>Lorem, ipsum dolor.</p>
          </section>
        </section>
        <section
          className={styles.scheduleCard__wrapper}
          // onClick={() => {
          //   history.push("/bookappointment");
          // }}
        >
          <section onClick={handleShow}>
            <img src={Schedule7} width="80" alt="" />
          </section>
          <section className={styles.scheduleCard__content}>
            <h6>8:00 - 9:00 PM</h6>
            <p>Football Training</p>
            <p>Lorem, ipsum dolor.</p>
          </section>
        </section>
      </section>
      <div
        style={{
          margin: "0 10px",
        }}
      >
        <h1 className="gradient__text" style={{ fontWeight: "bold" }}>
          24
        </h1>
        <h2>Thursday</h2>
      </div>

      <section className={styles.scheduleCard__box}>
        <section
          className={styles.scheduleCard__wrapper}
          // onClick={() => {
          //   history.push("/bookappointment");
          // }}
        >
          <section onClick={handleShow}>
            <img src={Schedule8} width="80" alt="" />
          </section>
          <section className={styles.scheduleCard__content}>
            <h6>8:00 - 9:00 PM</h6>
            <p>Football Training</p>
            <p>Lorem, ipsum dolor.</p>
          </section>
        </section>
        <section
          className={styles.scheduleCard__wrapper}
          // onClick={() => {
          //   history.push("/bookappointment");
          // }}
        >
          <section onClick={handleShow}>
            <img src={Schedule5} width="80" alt="" />
          </section>
          <section className={styles.scheduleCard__content}>
            <h6>8:00 - 9:00 PM</h6>
            <p>Football Training</p>
            <p>Lorem, ipsum dolor.</p>
          </section>
        </section>
      </section>
      <ScheduleModal show={show} onShow={handleShow} onHide={handleClose}  />
    </>
  );
};

export default ScheduleMontly;
