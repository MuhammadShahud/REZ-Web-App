import React, { useState } from "react";
import {
  Heading,
  RezNavbar,
  Button,
  InputField,
  DropDown,
  CreateLeagueModal,
} from "../../Components";
import { CalanderTabs, Footer } from "../../Containers";
import styles from "./calander.module.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import Grid from "@mui/material/Grid";
import { Tabs } from "antd";
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

const minDate = new Date("2020-01-01T00:00:00.000");
const maxDate = new Date("2034-01-01T00:00:00.000");

const Calander = () => {
  const [privacyValue, setPrivacyValue] = useState("#");
  const [date, setDate] = React.useState(new Date());
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));

  const history = useHistory();

  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <Heading
        text={"Calendar"}
        style={{ alignItems: "center", margin: "40px 0" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => history.push("/meshCalendar")}
          style={{
            backgroundColor: "white",
            border: "none",
            color: "var( --secondary-color)",
            fontWeight: "bold",
          }}
        >
          Mesh
        </button>
        {/* <text onClick={() => history.push("/meshCalendar")} style={{fontWeight:'bold',color:'var( --secondary-color)'}}>Mesh</text> */}
      </div>
      <CalanderTabs />

      {/* <h6 style={{ textAlign: 'center' }}>Calender</h6> */}
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
                    </Grid>
                </Grid>
            </LocalizationProvider> */}

      <Footer />
    </div>
  );
};

export default Calander;
