import React, { useState } from "react";
import {
  Heading,
  RezNavbar,
  PostStatus,
  PostCard,
  PostEvent,
  Button,
  InputField,
  DropDown,
  BookingConfirmedCard,
} from "../../Components";
import { Footer } from "../../Containers";
import styles from "./bookingConfirmed.module.css";
import cap from "../../Assets/add-to-cart_02.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaCalendarAlt, FaUnlock } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { useHistory } from "react-router-dom";

const BookingConfirmed = () => {
  const history = useHistory();

  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <Heading
        text={"Booking Confirmed"}
        style={{ alignItems: "center", margin: "40px 0" }}
      />

      <h6 style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Coach Details
      </h6>

      <BookingConfirmedCard
        img={cap}
        name={"Jack"}
        type={"Gym Trainer"}
        location={"New Mexico"}
        price={"20"}
      />

      <h6 style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Booking Details
      </h6>

      <div className={styles.bookingConfirmed__bookingDetailsMain}>
        <div className={styles.bookingConfirmed__bookingDetails}>
          <div className={styles.bookingConfirmed__bookingDetailsRow}>
            <FaCalendarAlt />
            <text style={{ fontWeight: "bold", marginLeft: "2px" }}>
              March 17 2022
            </text>
          </div>
          <div className={styles.bookingConfirmed__bookingDetailsRow}>
            <AiOutlineClockCircle />
            <text style={{ fontWeight: "bold", marginLeft: "2px" }}>
              8:00 - 9:00 PM
            </text>
          </div>
        </div>
        <div className={styles.bookingConfirmed__bookingDetails}>
          <div className={styles.bookingConfirmed__bookingDetailsRow}>
            <ImLocation />
            <text style={{ fontWeight: "bold", marginLeft: "2px" }}>
              New York, U.
            </text>
          </div>
          <div className={styles.bookingConfirmed__bookingDetailsRow}>
            <FaUnlock />
            <text style={{ fontWeight: "bold", marginLeft: "2px" }}>
              Public
            </text>
          </div>
        </div>
        <div className={styles.bookingConfirmed__buttonCenter}>
          <Button
            text="Change Booking Details"
            style={{ alignItems: "center", width: "180px" }}
            onClick={() => {
              history.push("/bookappointment");
            }}
          />
        </div>
      </div>

      <h6 style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Payment Details
      </h6>

      <div className={styles.bookingConfirmed__paymentDetailsMain}>
        <div className={styles.bookingConfirmed__paymentDetailsRow}>
          <text>Sub Total</text>
          <text>$20</text>
        </div>
        <div className={styles.bookingConfirmed__paymentDetailsLine}></div>
        <div className={styles.bookingConfirmed__paymentDetailsRow}>
          <text>Total</text>
          <text>$20</text>
        </div>
        <div className={styles.bookingConfirmed__buttonCenter}>
          <Button
            text="Book Appointment"
            style={{ alignItems: "center", width: "180px" }}
            onClick={() => {
              history.push("/payment");
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingConfirmed;
