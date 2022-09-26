import { Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

import { RezNavbar, Heading, Button } from "../../Components";
import { Footer } from "../../Containers";
import styles from "./leagues.module.css";
import "./leagues.css";

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

const Leagues = () => {
  const [value, setValue] = useState(0);

  const upCommingLeaguesData = [
    {
      team1: {
        img: require("../../Assets/league-logo-1.jpg"),
        name: "Soccer Club",
      },
      team2: {
        img: require("../../Assets/league-logo-2.jpg"),
        name: "Football Club",
      },
      daysremaining: "2 days",
      leaguename: "UEFA Champions League",
      date: "sept 21",
      time: "12 pm",
      join: true,
    },
    {
      team1: {
        img: require("../../Assets/league-logo-1.jpg"),
        name: "Soccer Club",
      },
      team2: {
        img: require("../../Assets/league-logo-2.jpg"),
        name: "Football Club",
      },
      daysremaining: "2 days",
      leaguename: "UEFA Champions League",
      date: "sept 21",
      time: "12 pm",
      join: false,
    },
    {
      team1: {
        img: require("../../Assets/league-logo-1.jpg"),
        name: "Soccer Club",
      },
      team2: {
        img: require("../../Assets/league-logo-2.jpg"),
        name: "Football Club",
      },
      daysremaining: "2 days",
      leaguename: "UEFA Champions League",
      date: "sept 21",
      time: "12 pm",
      join: true,
    },
  ];

  const previousLeaguesData = [
    {
      team1: {
        img: require("../../Assets/league-logo-1.jpg"),
        name: "Soccer Club",
        goals: 5,
      },
      team2: {
        img: require("../../Assets/league-logo-2.jpg"),
        name: "Football Club",
        goals: 5,
      },
      leaguename: "UEFA Champions League",
      date: "sept 21",
      time: "12 pm",
    },
    {
      team1: {
        img: require("../../Assets/league-logo-1.jpg"),
        name: "Soccer Club",
        goals: 5,
      },
      team2: {
        img: require("../../Assets/league-logo-2.jpg"),
        name: "Football Club",
        goals: 5,
      },
      leaguename: "UEFA Champions League",
      date: "sept 21",
      time: "12 pm",
    },
    {
      team1: {
        img: require("../../Assets/league-logo-1.jpg"),
        name: "Soccer Club",
        goals: 5,
      },
      team2: {
        img: require("../../Assets/league-logo-2.jpg"),
        name: "Football Club",
        goals: 5,
      },
      leaguename: "UEFA Champions League",
      date: "sept 21",
      time: "12 pm",
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"LEAGUES"} style={{ alignItems: "center" }} />
      </div>
      <div style={{ margin: "2% 0%" }}>
        <Container>
          <Box sx={{ width: "100%" }} className="leagues__tab__wrapper">
            <div className="leagues__tabs__wrapper">
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Upcoming Leagues" />
                  <Tab label="Previous Leagues" />
                </Tabs>
              </Box>
            </div>

            <TabPanel
              className="leagues__tab__content w-100"
              value={value}
              index={0}
            >
              {upCommingLeaguesData.map((leagueData) => (
                <div className={styles.upcomming_lg_box}>
                  <div className={styles.upcomming_lg_team_box}>
                    <div>
                      <img
                        className={styles.lg_teams_img}
                        src={leagueData.team1.img}
                        alt=""
                      />
                    </div>
                    <div>
                      <text>{leagueData.team1.name}</text>
                    </div>
                  </div>
                  <div className={styles.upcomming_lg_dtail_box}>
                    <div>
                      <h4>{leagueData.daysremaining}</h4>
                    </div>
                    <div>
                      <text>Remaining</text>
                    </div>
                    <div>
                      <h6>{leagueData.leaguename}</h6>
                    </div>
                    <div>
                      <text>
                        {leagueData.date} at {leagueData.time}
                      </text>
                    </div>
                    <div>
                      {leagueData.join ? (
                        <Button
                          text="JOIN"
                          style={{ background: "var(--secondary-color)" }}
                        />
                      ) : (
                        <Button text="INVITE" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className={styles.upcomming_lg_team_box}>
                      <div>
                        <img
                          className={styles.lg_teams_img}
                          src={leagueData.team2.img}
                          alt=""
                        />
                      </div>
                      <div>
                        <text>{leagueData.team2.name}</text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
            <TabPanel
              className="leagues__tab__content w-100 "
              value={value}
              index={1}
            >
              {previousLeaguesData.map((leagueData) => (
                <div className={styles.upcomming_lg_box}>
                  <div className={styles.upcomming_lg_team_box}>
                    <div>
                      <img
                        className={styles.lg_teams_img}
                        src={leagueData.team1.img}
                        alt=""
                      />
                    </div>
                    <div>
                      <text>{leagueData.team1.name}</text>
                    </div>
                  </div>
                  <div className={styles.upcomming_lg_dtail_box}>
                    <div>
                      <h4>
                        {leagueData.team1.goals} - {leagueData.team2.goals}
                      </h4>
                    </div>
                    <div>
                      <h6>{leagueData.leaguename}</h6>
                    </div>
                    <div>
                      <text>
                        {leagueData.date} at {leagueData.time}
                      </text>
                    </div>
                  </div>
                  <div>
                    <div className={styles.upcomming_lg_team_box}>
                      <div>
                        <img
                          className={styles.lg_teams_img}
                          src={leagueData.team2.img}
                          alt=""
                        />
                      </div>
                      <div>
                        <text>{leagueData.team2.name}</text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
          </Box>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Leagues;
