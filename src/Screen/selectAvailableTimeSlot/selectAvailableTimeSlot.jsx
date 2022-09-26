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
import styles from "./selectAvailableTimeSlot.module.css";
import { List, Card } from "antd";

import cap from "../../Assets/add-to-cart_02.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaCalendarAlt, FaUnlock } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { useHistory } from "react-router-dom";

const data = [
  {
    title: "11:50:00",
  },
  {
    title: "11:54:00",
  },
  {
    title: "11:58:00",
  },
  {
    title: "12:02:00",
  },
  {
    title: "12:06:00",
  },
  {
    title: "12:10:00",
  },
  {
    title: "12:14:00",
  },
  {
    title: "12:20:00",
  },
  {
    title: "12:25:00",
  },
  {
    title: "12:30:00",
  },
  {
    title: "12:35:00",
  },
  {
    title: "12:40:00",
  },
  {
    title: "12:45:00",
  },
  {
    title: "12:50:00",
  },
  {
    title: "12:55:00",
  },
  {
    title: "1:05:00",
  },
  {
    title: "1:10:00",
  },
  {
    title: "1:15:00",
  },
];

const SelectAvailableTimeSlot = () => {
  const [visitValue, setVisitValue] = useState("#");
  const history = useHistory();

  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <Heading
        text={"Select Available Time Slot"}
        style={{ alignItems: "center", margin: "40px 0" }}
      />

      <div className={styles.selectAvailableTimeSlot__slotsMain}>
        <div className={styles.selectAvailableTimeSlot__slotsList}>
          <div style={{ display: 'flex', width: '80%',minHeight:'200px' }}>
            <List
              grid={{
                gutter: 0,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 4,
              }}
              // grid={{  column: 4 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item style={{ display: 'flex', justifyContent: 'center',margin:'5%' }}>
                  {/* <div style={{ backgroundColor: 'var( --primary-color)', width: '100%', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <text style={{ textAlign: 'center', color: 'var( --white-color)' }}>{item.title}</text>
                                </div> */}
                  <button className={styles.selectAvailableTimeSlot__slotButton}>
                    {item.title}
                  </button>
                </List.Item>
              )}
            />
          </div>
          {/* <div className={styles.selectAvailableTimeSlot__buttonCenter}>
            <Button text="NEXT" style={{ alignItems: "center" }} />
          </div> */}

          <div className={styles.selectAvailableTimeSlot__visitPlace}>
            <h6
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              DO YOU WANT COACH TO VISIT YOUR PLACE?
            </h6>
            <div className={styles.selectAvailableTimeSlot__dropdown}>
              <DropDown
                onClick={(e) => setVisitValue(e.target.value)}
                dropdownValue={visitValue}
                options={["Yes", "No"]}
                placeholder="Select an Option"
              />
            </div>

            {/* <div className={styles.selectAvailableTimeSlot__buttonCenter}>
              <Button
                text="NEXT"
                onClick={() => {
                  history.push("/bookingconfirmed");
                }}
                style={{ alignItems: "center" }}
              />
            </div> */}
          </div>

          {visitValue === 'Yes' ?
            <div className={styles.selectAvailableTimeSlot__location}>
              <h6
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                CHOOSE LOCATION
              </h6>

              <text>$5 extra service charges</text>

              {/* <div className={styles.selectAvailableTimeSlot__buttonCenter}>
                <Button text="NEXT" style={{ alignItems: "center" }} />
              </div> */}
            </div>
            : null}
          <div className={styles.selectAvailableTimeSlot__buttonCenter}>
            <Button
              text="NEXT"
              onClick={() => {
                history.push("/bookingconfirmed");
              }}
              style={{ alignItems: "center" }}
            />
          </div>


        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SelectAvailableTimeSlot;
