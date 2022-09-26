import { display } from "@mui/system";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import profile1 from "../../Assets/schedule_img_5.jpg";
import profile2 from "../../Assets/profile-img-1.jpg";
import profile3 from "../../Assets/profile-img-3.jpg";
import profile4 from "../../Assets/profile-img-4.jpg";
import profile5 from "../../Assets/profile-img.jpg";

import styles from "./CalanderCard.module.css";
import { List, Card } from "antd";
import ScheduleModal from "../scheduleModal/ScheduleModal";

const data = [
  {
    title: "Title 1",
    userName: "John Dave",
    description: "Football Training Lorem Ipsum net",
    image: profile5,
    tag: "C",
  },
  {
    title: "Title 2",
    userName: "Stacy Doe",
    description: "Football Training Lorem Ipsum net",
    image: profile2,
    tag: "P",
  },
  {
    title: "Title 3",
    userName: "Steve Smith",
    description: "Football Training Lorem Ipsum net",
    image: profile3,
    tag: "P",
  },
  {
    title: "Title 4",
    userName: "Micheal Clark",
    description: "Football Training Lorem Ipsum net",
    image: profile4,
    tag: "C",
  },
  // {
  //     title: 'Title 5',
  //     userName: 'John Dave',
  //     description: 'Football Training Lorem Ipsum net',
  // },
  // {
  //     title: 'Title 6',
  //     userName: 'John Dave',
  //     description: 'Football Training Lorem Ipsum net',
  // },
];

const CalanderMainCard = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={styles.CalanderCard}>
      <div className={styles.CalanderCardList}>
        <div className={styles.calender__viewBtn}>
          <p
            onClick={() => {
              history.push("/schedule");
            }}
          >
            View all
          </p>
        </div>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <div className={styles.dataCardPlayerMain} onClick={handleShow}>
                <div>
                  <div
                    style={{
                      backgroundColor:
                        item.tag == "P"
                          ? "var(--primary-color)"
                          : item.tag == "C"
                          ? "var(--secondary-color)"
                          : null,
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      borderRadius: 20,
                      padding: 15,
                      margin: "-10px -10px",
                    }}
                  >
                    <text style={{ color: "var(--white-color)" }}>
                      {item.tag}
                    </text>
                  </div>
                  <img src={item.image} width="80" alt="" />
                </div>
                <div className={styles.dataCardPlayerInfo}>
                  <text style={{ fontWeight: "bold" }}>{item.userName}</text>
                  <text style={{ color: "var(--light-grey)" }}>
                    {item.description}
                  </text>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
      <ScheduleModal show={show} onHide={handleClose} onShow={handleShow} />
    </div>
  );
};

export default CalanderMainCard;
