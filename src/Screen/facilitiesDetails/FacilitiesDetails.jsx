import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useLocation } from "react-router-dom";

import { Button, Heading, RezNavbar } from "../../Components";
import Details from "../../Assets/e-classes-details_img.jpg";
import styles from "./FacilitiesDetails.module.css";
import facilityDetail1 from "../../Assets/facilities-details_img.jpg";
import { Footer } from "../../Containers";

import { Button as BootsrapBut, Modal } from "react-bootstrap";

const FacilitiesDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <div className="my-3">
        <Heading text="FACILITIES DETAILS" style={{ alignItems: "center" }} />
      </div>

      <section className="container">
        <div className={styles.details__wallpaper}>
          <img src={facilityDetail1} alt="detailsPic" />
        </div>
        <div className={styles.details__content}>
          <h4>Football</h4>
          <h6>Details</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            error consectetur blanditiis laboriosam, quibusdam sequi aliquam
            iure repudiandae hic doloribus rem eius architecto saepe accusantium
            iusto tempore porro quos cumque libero officia inventore. Beatae
            nostrum, delectus mollitia architecto facilis in explicabo officia
            voluptate, aperiam nesciunt culpa laborum nisi ipsum inventore.
          </p>
        </div>

        <section className={styles.details__schedule}>
          <div>
            <BiCalendar />
            <small>March 17 2022</small>
          </div>
          <div>
            <AiOutlineClockCircle />
            <small>March 17 2022</small>
          </div>
          <div>
            <MdLocationOn />
            <small>New York, U</small>
          </div>
        </section>
        <section className={styles.details__time}>
          <div>
            <small>Time Interval:</small>
            <p>50</p>
          </div>
          <h6>$10</h6>
        </section>

        <div className="d-flex justify-content-center my-5">
          <Button text="SELECT TIME SLOT" onClick={handleShow} />
        </div>
      </section>
      <TimeSlot show={show} handleClose={handleClose} />
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

const TimeSlot = ({ handleClose, show }) => {
  return (
    <>
      <Modal
        show={show}
        dialogClassName={styles.timeModal}
        onHide={handleClose}
        contentClassName={styles.modalContent}
        className={styles.timeModalBac}
      >
        <Modal.Body className={styles.timeSlotBody}>
          <section>
            <h5>Select avaiable time slot</h5>
          </section>
          <section>
            <div className="d-flex justify-content-center">
              <Button text="18:00" />
              <Button text="19:00" />
              <Button text="20:00" />
            </div>
            <div className="d-flex justify-content-center">
              <Button text="21:00" />
              <Button text="22:00" />
              <Button text="23:00" />
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FacilitiesDetails;
