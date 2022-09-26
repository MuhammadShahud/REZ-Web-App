import React, { useState } from "react";
import { Modal } from "antd";
import { Container, Col, Row } from "react-bootstrap";
import { SiAddthis } from "react-icons/si";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  Heading,
  RezNavbar,
  Button,
  CreateRoomModal,
  UpdateRoomModal,
} from "../../Components";
import { Footer } from "../../Containers";

import styles from "./rooms.module.css";
import { useHistory } from "react-router-dom";

const roomsData = [
  {
    img: require("../../Assets/room_img1.jpg"),
    name: "Sports Arena",
  },
  {
    img: require("../../Assets/room_img2.jpg"),
    name: "Summer football league",
  },
  {
    img: require("../../Assets/room_img3.jpg"),
    name: "Gymnasium",
  },
  {
    img: require("../../Assets/room_img4.jpg"),
    name: "Sports Arena",
  },
  {
    img: require("../../Assets/room_img5.jpg"),
    name: "Golf room",
  },
];

const Rooms = () => {
  const history = useHistory();

  const [roomModalVisible, setroomModalVisible] = useState(false);
  const showRoomModal = () => {
    setroomModalVisible(true);
  };

  const handleRoomOk = () => {
    setroomModalVisible(false);
  };

  const handleRoomCancel = () => {
    setroomModalVisible(false);
  };
  const [updateModalVisible, setupdateModalVisible] = useState(false);
  const showUpdateModal = () => {
    setupdateModalVisible(true);
  };

  const handleUpdateOk = () => {
    setupdateModalVisible(false);
  };

  const handleUpdateCancel = () => {
    setupdateModalVisible(false);
  };

  return (
    <div className={styles.rooms__mainDiv}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"ROOMS"} style={{ alignItems: "center" }} />
      </div>
      <Container className={styles.rooms__mainDiv}>
        <Row className={styles.rooms__row}>
          <Col md={3} className={styles.rooms__col}>
            <div className={styles.rooms__container}>
              <div className={styles.rooms__add__btn} onClick={showRoomModal}>
                <div>
                  <SiAddthis
                    size={40}
                    style={{ color: "var(--white-color)" }}
                  />
                </div>
                <div className={styles.rooms__create__room}>
                  <h5>Create Room</h5>
                </div>
              </div>
            </div>
          </Col>
          {roomsData.map((room, ind) => (
            <Col md={3} key={ind} className={styles.rooms__col}>
              <div className={styles.rooms__container}>
                <div className={styles.rooms__img}>
                  <img src={room.img} width="100%" />
                  <div className={styles.first_txt}>
                    <div className={styles.icon__box} onClick={showUpdateModal}>
                      <div>
                        <MdOutlineModeEdit
                          size={22}
                          style={{ color: "var(--white-color)" }}
                        />
                      </div>
                    </div>
                    <div className={styles.icon__box}>
                      <div>
                        <RiDeleteBin6Line
                          size={22}
                          style={{ color: "var(--white-color)" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    history.push("/roomdetails");
                  }}
                  className={styles.room__name}
                >
                  <h5>{room.name}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className={styles.rooms__btn}>
          <Button text="Load More"></Button>
        </div>
        <CreateRoomModal
          showModal={showRoomModal}
          handleOk={handleRoomOk}
          handleCancel={handleRoomCancel}
          isModalVisible={roomModalVisible}
          label="Create Room"
        />
        <UpdateRoomModal
          showModal={showUpdateModal}
          handleOk={handleUpdateOk}
          handleCancel={handleUpdateCancel}
          isModalVisible={updateModalVisible}
          label="Update Room"
        />
      </Container>
      <Footer />
    </div>
  );
};
export default Rooms;
