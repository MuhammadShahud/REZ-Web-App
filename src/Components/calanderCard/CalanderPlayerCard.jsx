import { display } from "@mui/system";
import React from "react";
import { Col, Row } from "react-bootstrap";

import profile1 from "../../Assets/schedule_img_5.jpg";
import profile2 from "../../Assets/profile-img-1.jpg";
import profile3 from "../../Assets/profile-img-3.jpg";
import profile4 from "../../Assets/profile-img-4.jpg";
import profile5 from "../../Assets/profile-img.jpg";
import styles from "./CalanderCard.module.css";
import { List, Card } from "antd";

const data = [
  {
    title: "Title 1",
    userName: "John Dave",
    description: "Football Training Lorem Ipsum net",
    image: profile5,
  },
  {
    title: "Title 2",
    userName: "Stacy Doe",
    description: "Football Training Lorem Ipsum net",
    image: profile2,
  },
  {
    title: "Title 3",
    userName: "Steve Smith",
    description: "Football Training Lorem Ipsum net",
    image: profile3,
  },
  {
    title: "Title 4",
    userName: "Micheal Clark",
    description: "Football Training Lorem Ipsum net",
    image: profile4,
  },
  {
    title: "Title 5",
    userName: "John Dave",
    description: "Football Training Lorem Ipsum net",
    image: profile5,
  },
  {
    title: "Title 6",
    userName: "John Dave",
    description: "Football Training Lorem Ipsum net",
    image: profile1,
  },
];

const CalanderPlayerCard = () => {
  return (
    <div className={styles.CalanderCard}>
      <div className={styles.CalanderCardList}>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <div className={styles.dataCardPlayerMain}>
                <img src={item.image} width="80" alt="" />
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
    </div>
  );
};

export default CalanderPlayerCard;
