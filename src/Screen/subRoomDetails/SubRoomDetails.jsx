import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { Heading, RezNavbar, Button, CreateRoomModal } from "../../Components";
import { Footer } from "../../Containers";
import styles from "./subRoomDetails.module.css";

const SubRoomDetail = () => {
  const subRoomDetaildata = {
    img: require("../../Assets/events_img_5.jpg"),
    subRoomName: "Foot Ball",
    assignedstaff: ["Johndoe", "Stacy keibler", "Johndoe", "Stacy keibler"],
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
        <Heading text={"SUB ROOM NAME"} style={{ alignItems: "center" }} />
      </div>
      <Container className={styles.rooms__mainDiv}>
        <div className={styles.subroom__box}>
          <div className={styles.subroom__img__box}>
            <img
              className={styles.subroom__img}
              src={subRoomDetaildata.img}
              alt=""
            />
          </div>
          <div className={styles.Subroom__main__heading}>
            <h1>Basic Information</h1>
            <div className={styles.subroom__detail}>
              <div className={styles.Subroom__heading}>
                <h6>Sub Room Name: &nbsp;</h6>
              </div>
              <div>
                <p>{subRoomDetaildata.subRoomName}</p>
              </div>
            </div>
            <div className={styles.subroom__detail}>
              <div className={styles.Subroom__heading}>
                <h6>Room Assigned (Staff name): &nbsp;</h6>
              </div>
              <div className={styles.sub__room__p}>
                <p>
                  {subRoomDetaildata.assignedstaff.map((nameOfStaff, index) => (
                    <>
                      {index + 1 === subRoomDetaildata.assignedstaff.length ? (
                        <>{nameOfStaff}</>
                      ) : (
                        <> {nameOfStaff},&nbsp;</>
                      )}
                    </>
                  ))}
                </p>
              </div>
            </div>
            <div className={styles.Subroom__heading}>
              <h6>Description: </h6>
              <p>{subRoomDetaildata.description}</p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default SubRoomDetail;
