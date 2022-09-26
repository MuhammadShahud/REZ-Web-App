import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Schedule.css";
import {
  Button,
  ScheduleCard,
  ScheduleMontly,
  ScheduleWeekly,
} from "../../Components";
import Schedule1 from "../../Assets/schedule_img_1.jpg";
import Schedule2 from "../../Assets/schedule_img_2.jpg";
import Schedule3 from "../../Assets/schedule_img_3.jpg";
import Schedule4 from "../../Assets/schedule_img_4.jpg";
import ScheduleModal from "../../Components/scheduleModal/ScheduleModal";
import { useHistory } from "react-router-dom";

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

export default function ScheduleTabs() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  console.log(user);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="schedule__tab__wrapper">
      <div className="sehedule__tabs__wrapper">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {user && user[0]?.userRole === "facility"   ?  
            <Tab label="Hourly" {...a11yProps(0)} /> : null
          }
            <Tab label="Daily" {...a11yProps(1)} />
            <Tab label="Weekly" {...a11yProps(2)} />
            
            <Tab label="Monthly" {...a11yProps(3)} />
         
          </Tabs>
        </Box>
      </div>

      <TabPanel
        className="schedule__tab__content w-100"
        value={value}
        index={0}
      >
        <ScheduleCard scheduleObj={dailyHourSchedule} />
      </TabPanel>
      <TabPanel
        className="schedule__tab__content w-100 "
        value={value}
        index={1}
      >
        <ScheduleCard scheduleObj={dailySchedule} />
      </TabPanel>
      <TabPanel
        className="schedule__tab__content w-100"
        value={value}
        index={2}
      >
        <ScheduleWeekly />
        <ScheduleModal />
      </TabPanel>
      <TabPanel
        className="schedule__tab__content w-100"
        value={value}
        index={3}
      >
        <ScheduleMontly />
      </TabPanel>
      {(user && user[0]?.userRole === "team") ||
      (user && user[0]?.userRole === "coach") ||
      (user && user[0]?.userRole === "facility") ? (
        <Button
          text={"Create Schedule"}
          onClick={() => history.push("/createschedule")}
          style={{ margin: "2% 0%" }}
        />
      ) : null}
    </Box>
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
