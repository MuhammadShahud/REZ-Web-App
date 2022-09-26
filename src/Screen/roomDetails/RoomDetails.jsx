import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Heading, RezNavbar, Button } from "../../Components";
import { Footer } from "../../Containers";
import styles from "./roomDetails.module.css";

const RoomDetails = () => {
  const history = useHistory();
  const roomDetaildata = {
    img: require("../../Assets/events_img_5.jpg"),
    roomName: "Football",
    sportsType: "Soccer",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
     unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting,
     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
     like Aldus PageMaker including versions of Lorem Ipsum.
     Johndoe", "Stacy keibler", "Johndoe", "Stacy keibler"],
     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
     unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting,
     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
     like Aldus PageMaker including versions of Lorem Ipsum.`,
  };
  return (
    <div className={styles.rooms__mainDiv}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading
          text={roomDetaildata.roomName}
          style={{ alignItems: "center" }}
        />
      </div>
      <Container className={styles.rooms__mainDiv}>
        <div className={styles.room__box}>
          <div className={styles.room__img__box}>
            <img className={styles.room__img} src={roomDetaildata.img} alt="" />
          </div>
          <div className={styles.room__main__heading}>
            <h1>Basic Information</h1>
            <div className={styles.room__detail}>
              <div className={styles.room__heading}>
                <h6>Room Name: &nbsp;</h6>
              </div>
              <div>
                <p>{roomDetaildata.roomName}</p>
              </div>
            </div>
            <div className={styles.room__detail}>
              <div className={styles.room__heading}>
                <h6>Sports Type: &nbsp;</h6>
              </div>
              <div className={styles.sub__room__p}>
                <p>{roomDetaildata.sportsType}</p>
              </div>
            </div>
            <div className={styles.room__heading}>
              <h6>Description: </h6>
              <p>{roomDetaildata.description}</p>
            </div>
          </div>
          <div style={{ margin: "5% 0%" }}>
            <Button
              text={"SUBROOM"}
              onClick={() => history.push("/subrooms")}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default RoomDetails;
