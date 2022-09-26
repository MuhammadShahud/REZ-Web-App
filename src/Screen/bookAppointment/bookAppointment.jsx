import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Heading,
  RezNavbar,
  Button,
  InputField,
  DropDown,
} from "../../Components";
import { Footer } from "../../Containers";
import styles from "./bookAppointment.module.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { MonthPicker } from "@mui/x-date-pickers/MonthPicker";
import { YearPicker } from "@mui/x-date-pickers/YearPicker";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";

const minDate = new Date("2020-01-01T00:00:00.000");
const maxDate = new Date("2034-01-01T00:00:00.000");

const BookAppointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [privacyValue, setPrivacyValue] = useState("#");
  const [date, setDate] = React.useState(new Date());
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user[0].userRole === "store") {
      history.replace("/");
    }
  }, []);

  console.log(user);
  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <Heading
        text={"Book Appointment"}
        style={{ alignItems: "center", margin: "40px 0" }}
      />

      <h6 style={{ textAlign: "center" }}>Calendar</h6>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <CalendarPicker
              date={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>

      <div className={styles.bookAppointment__Fields}>
        <div className={styles.bookAppointment__inputFieldsCenter}>
          <div className={styles.bookAppointment__inputFields}>
            <div className="w-100 mx-2">
              <InputField placeholder={"April 18,2022"} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"New Mexico"} />
            </div>
          </div>
        </div>

        <div className={styles.bookAppointment__inputFieldsCenter}>
          <text
            style={{
              textAlign: "left",
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Time
          </text>
          <div className={`d-flex ${styles.bookAppointment__inputFields}`}>
            <div className="w-100 mx-2">
              <InputField placeholder={"11:50 AM"} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"12:50 PM"} />
            </div>
          </div>
        </div>

        <div className={styles.bookAppointment__inputFieldsCenter}>
          <text
            style={{
              textAlign: "left",
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Privacy
          </text>
          <div className={styles.bookAppointment__inputFields}>
            <DropDown
              onClick={(e) => setPrivacyValue(e.target.value)}
              dropdownValue={privacyValue}
              options={["Public", "Private", "Invite"]}
              placeholder="Select Privacy"
            />
            <InputField placeholder={"Add Notes here.."} />
          </div>
        </div>
      </div>

      <div className={styles.bookAppointment__buttonCenter}>
        <Button
          text="Book Now"
          onClick={() => {
            history.push("/selectAvailableTimeSlot");
          }}
          style={{ alignItems: "center" }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default BookAppointment;
