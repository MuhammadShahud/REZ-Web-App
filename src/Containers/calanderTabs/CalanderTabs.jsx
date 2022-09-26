import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import classes from "./CalanderTabs.module.css";
import "./CalanderTabs.module.css";
import {
  CalanderMainCard,
  CalanderPlayerCard,
  Button,
  CreateLeagueModal,
  DropDown,
  ScheduleModal,
} from "../../Components";
import Schedule1 from "../../Assets/schedule_img_1.jpg";
import Schedule2 from "../../Assets/schedule_img_2.jpg";
import Schedule3 from "../../Assets/schedule_img_3.jpg";
import Schedule4 from "../../Assets/schedule_img_4.jpg";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import Grid from "@mui/material/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CalanderTabs() {
  const [value, setValue] = React.useState(0);
  const [date, setDate] = React.useState(new Date());
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterOptions = ["Steve Smith", "Jason bond"];
  const filterTrainingOptions = [
    "Gym Training",
    "Trainee",
    "Testing 1",
    "Test",
  ];
  const filterParentOptions = ["All Children"];
  return (
    <>
      <Box sx={{ width: "100%" }} className="schedule__tab__wrapper">
        <Box sx={{ width: "15%", margin: "2% 0%" }}>
          {/* <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Player" {...a11yProps(0)} />
            <Tab label="Coach" {...a11yProps(1)} />
            <Tab label="Main" {...a11yProps(2)} />
            <Tab label="Monthly" {...a11yProps(3)} />
          </Tabs> */}
          {auth && auth[0]?.userRole === "facility" ? (
            <div className={classes.calander__facilityDropdown}>
              <div className={classes.calander__trainingDropdown}>
                <DropDown options={filterTrainingOptions} />
              </div>
              <div className={classes.calander__filterDropdown}>
                <DropDown options={filterOptions} />
              </div>
            </div>
          ) : null}
          {auth && auth[0]?.userRole === "parent" ? (
            <DropDown
              placeholder={"Select an option"}
              width={100}
              options={filterParentOptions}
            />
          ) : null}
        </Box>
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
        {auth && auth[0].userRole === "facility" ? (
          <Button
            text={"ADD NEW LEAGUE"}
            style={{ marginBottom: "5%" }}
            onClick={showModal}
          />
        ) : null}
        {/* <TabPanel
          className="schedule__tab__content w-100"
          value={value}
          index={0}
        >
          <CalanderPlayerCard scheduleObj={dailyHourSchedule} />
        </TabPanel>
        <TabPanel
          className="schedule__tab__content w-100 "
          value={value}
          index={1}
        >
          <CalanderPlayerCard scheduleObj={dailySchedule} />
        </TabPanel>
        <TabPanel
          className="schedule__tab__content w-100"
          value={value}
          index={2}
        >
          <CalanderMainCard />
        </TabPanel> */}
        {/* <TabPanel
                className="schedule__tab__content w-100"
                value={value}
                index={3}
            >
                <CalanderMainCard />
            </TabPanel> */}
        <CalanderMainCard />
      </Box>
      <CreateLeagueModal
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
      />
    </>
  );
}

const dailySchedule = [
  {
    date: 23,
    day: "Wednesday",
    data: [
      {
        img: Schedule1,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule2,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule3,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule4,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
    ],
  },
  {
    date: 24,
    day: "Thursday",
    data: [],
  },
  {
    date: 25,
    day: "Friday",
    data: [
      {
        img: Schedule1,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule2,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule3,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule4,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
    ],
  },
  {
    date: 26,
    day: "Saturday",
    data: [],
  },
];

const dailyHourSchedule = [
  {
    date: 23,
    day: "Wednesday",
    data: [
      {
        img: Schedule4,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule2,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule1,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule3,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
    ],
  },
  {
    date: 24,
    day: "Thursday",
    data: [],
  },
  {
    date: 25,
    day: "Friday",
    data: [
      {
        img: Schedule1,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule2,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule3,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
      {
        img: Schedule4,
        time: "8:00 - 9:00 PM",
        eventName: "Football Training",
        details: "lorem ipsum dolor",
      },
    ],
  },
  {
    date: 26,
    day: "Saturday",
    data: [],
  },
];
