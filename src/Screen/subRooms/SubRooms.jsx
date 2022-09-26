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
  CreateSubRoomModal,
  UpdateSubRoomModal,
} from "../../Components";
import { Footer } from "../../Containers";

import styles from "./subRooms.module.css";
import { useHistory } from "react-router-dom";

const subRoomsData = [
  {
    img: require("../../Assets/room_img1.jpg"),
    name: "Sports Arena",
    numberOfStaffs: 17,
  },
  {
    img: require("../../Assets/room_img2.jpg"),
    name: "Sports Arena",
    numberOfStaffs: 17,
  },
  {
    img: require("../../Assets/room_img3.jpg"),
    name: "Sports Arena",
    numberOfStaffs: 17,
  },
  {
    img: require("../../Assets/room_img4.jpg"),
    name: "Sports Arena",
    numberOfStaffs: 17,
  },
  {
    img: require("../../Assets/room_img5.jpg"),
    name: "Sports Arena",
    numberOfStaffs: 17,
  },
];

const SubRoomsData = () => {
  const history = useHistory();

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
    <div className={styles.sub__rooms__mainDiv}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"SUB ROOMS"} style={{ alignItems: "center" }} />
      </div>
      <Container className={styles.sub__rooms__mainDiv}>
        <Row className={styles.sub__rooms__row}>
          <Col md={3} className={styles.sub__rooms__col}>
            <div className={styles.sub__rooms__container}>
              <div className={styles.sub__rooms__add__btn} onClick={showModal}>
                <div>
                  <SiAddthis
                    size={40}
                    style={{ color: "var(--white-color)" }}
                  />
                </div>
                <div className={styles.sub__rooms__create__room}>
                  <h5>Create Sub Room</h5>
                </div>
              </div>
            </div>
          </Col>
          {subRoomsData.map((room, ind) => (
            <Col md={3} key={ind} className={styles.sub__rooms__col}>
              <div className={styles.sub__rooms__container}>
                <div className={styles.sub__rooms__img}>
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
                    history.push("/subroomdetails");
                  }}
                  className={styles.room__name}
                >
                  <h5>{room.name}</h5>
                </div>
                <div className={styles.room__staff_no}>
                  <text>Total Number Of Staff {room.numberOfStaffs}</text>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className={styles.sub__rooms__btn}>
          <Button text="Load More"></Button>
        </div>
        <CreateSubRoomModal
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          label="Create Sub Rooms"
        />
        <UpdateSubRoomModal
          showModal={showUpdateModal}
          handleOk={handleUpdateOk}
          handleCancel={handleUpdateCancel}
          isModalVisible={updateModalVisible}
          label="Update Sub Room"
        />
      </Container>
      <Footer />
    </div>
  );
};
export default SubRoomsData;
