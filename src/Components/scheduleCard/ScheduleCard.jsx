import { display } from "@mui/system";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ScheduleModal from "../scheduleModal/ScheduleModal";
import Schedule1 from "../../Assets/schedule_img_1.jpg";
import styles from "./ScheduleCard.module.css";
import InputField from "../inputField/InputField";
const ScheduleCard = ({ scheduleObj}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  return (
    <div className={`${styles.scheduleCard}`}>
      <div className="d-flex justify-content-center align-item-center w-100">
        <div>
        <InputField type={'date'} style={{width:'100%'}}/>
        </div>
      </div>
      
      {scheduleObj?.map((obj, ind) => {
        return (
          <div key={ind * 55}>
            <div
              key={ind * 5}
              style={{
                margin: "0 10px",
              }}
            >
              <h1 className="gradient__text" style={{ fontWeight: "bold" }}>
                {obj.date}
              </h1>
              <h2>{obj.day}</h2>
            </div>
            {obj?.data?.length !== 0 ? (
              <section className={styles.scheduleCard__box}>
                {obj?.data?.map((data, index) => {
                  return (
                    <section
                    onClick={handleShow}
                      key={index}
                      className={styles.scheduleCard__wrapper}
                      // onClick={() => {
                      //   history.push("/bookappointment");
                      // }}
                    >
                      <section>
                        <img src={data.img} width="80" alt=""  />
                      </section>
                      <section className={styles.scheduleCard__content}>
                        <h6>8:00 - 9:00 PM</h6>
                        <p>Football Training</p>
                        <p>Lorem, ipsum dolor.</p>
                      </section>
                    </section>
                  );
                })}
              </section>
            ) : (
              <p key={ind} className={styles.noPara}>
                No Schedule
              </p>
            )}
          </div>
        );
      })}
      <ScheduleModal show={show} onShow={handleShow} onHide={handleClose}  />
    </div>
    // {/* <div>
    //    <div className={`${styles.scheduleCard}`}>
    //        <div
    //          style={{
    //            margin: "0 10px",
    //          }}
    //        >
    //          <h1 className="gradient__text" style={{ fontWeight: "bold" }}>
    //            23
    //          </h1>
    //          <h2>Wednesday</h2>
    //        </div>

    //        <section className={styles.scheduleCard__box}>
    //          <section className={styles.scheduleCard__wrapper}>
    //            <section>
    //              <img src={Schedule1} width="80" alt="" />
    //            </section>
    //            <section className={styles.scheduleCard__content}>
    //              <h6>8:00 - 9:00 PM</h6>
    //              <p>Football Training</p>
    //              <p>Lorem, ipsum dolor.</p>
    //            </section>
    //          </section>
    //          <section className={styles.scheduleCard__wrapper}>
    //            <section>
    //              <img src={Schedule1} width="80" alt="" />
    //            </section>
    //            <section className={styles.scheduleCard__content}>
    //              <h6>8:00 - 9:00 PM</h6>
    //              <p>Football Training</p>
    //              <p>Lorem, ipsum dolor.</p>
    //            </section>
    //          </section>

    //        </section>
    //      </div> */}
  );
};

export default ScheduleCard;
