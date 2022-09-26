import React, { useState } from "react";
import { Heading, RezNavbar, Button } from "../../Components";
import { CalanderTabs, Footer } from "../../Containers";
import styles from "./teamRoster.module.css";
import SearchBar from "../../Components/searchBar/searchBar";
import { List, Card } from "antd";
import Profile1 from "../../Assets/profile-img.jpg";
import Profile2 from "../../Assets/profile-img-1.jpg";
import Profile3 from "../../Assets/profile-img-3.jpg";
import Profile4 from "../../Assets/profile-img-4.jpg";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const data = {
  coach: {
    name: "Stacy Doe",
    img: Profile1,
    role: "Coach",
  },
  members: [
    {
      name: "Stacy Doe",
      img: Profile1,
      role: "member",
    },
    {
      name: "Alex Dave",
      img: Profile2,
      role: "member",
    },
    {
      name: "John Dave",
      img: Profile3,
      role: "Coach",
    },
    {
      name: "Steve Dave",
      img: Profile4,
      role: "member",
    },
    {
      name: "Steve Dave",
      img: Profile4,
      role: "member",
    },
    {
      name: "Steve Dave",
      img: Profile4,
      role: "member",
    },
    {
      name: "Steve Dave",
      img: Profile4,
      role: "member",
    },
  ],
};

const TeamRoster = () => {
  const history = useHistory();
  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <Heading
        text={"TEAM ROSTER"}
        style={{ alignItems: "center", margin: "40px 0" }}
      />
      <Container>
        <div className={styles.roster__main}>
          <div
            className="d-flex align-item-center justify-content-center my-5"
            onClick={() => history.push("/coachprofile")}
          >
            <div className="d-flex align-item-center justify-content-center">
              <div style={{ width: "80px", height: "80px" }}>
                <img
                  src={data.coach.img}
                  width="100%"
                  style={{ borderRadius: 100 }}
                />
              </div>
              <div className="d-flex flex-column align-item-center justify-content-center">
                <div>
                  <text style={{ margin: "0px 20px", fontWeight: "bold" }}>
                    {data.coach.name}
                  </text>
                </div>
                <div>
                  <text style={{ margin: "0px 20px", fontWeight: "bold" }}>
                    {data.coach.role}
                  </text>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.follow__list}>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
              }}
              dataSource={data.members}
              renderItem={(item) => (
                <List.Item>
                  <div>
                    <div
                      className={styles.roster__card}
                      onClick={() => history.push("/userprofile/1")}
                    >
                      <div className={styles.roster__card_userInfo}>
                        <div style={{ width: "80px", height: "80px" }}>
                          <img
                            src={item.img}
                            width="100%"
                            style={{ borderRadius: 100 }}
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <div>
                            <text
                              style={{ margin: "0px 20px", fontWeight: "bold" }}
                            >
                              {item.name}
                            </text>
                          </div>
                          <div>
                            <text
                              style={{ margin: "0px 20px", fontWeight: "bold" }}
                            >
                              {item.role}
                            </text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default TeamRoster;
