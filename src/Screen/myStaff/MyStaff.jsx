import { Heading, RezNavbar, Button, InputField } from "../../Components";
import classes from "./MyStaff.module.css";
import { Footer } from "../../Containers";
import std1 from "../../Assets/couch-profile-1.jpg";
import std2 from "../../Assets/couch-profile-2.jpg";
import std3 from "../../Assets/couch-profile-3.jpg";
import std4 from "../../Assets/couch-profile-4.jpg";
import { Container, Col, Row } from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";
import ModalForm from "../../Components/modal/Modal";
import { useState } from "react";

const stadiumDetails = [
  {
    id: 1,
    myStaffImg: std1,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
  {
    id: 2,
    myStaffImg: std2,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
  {
    id: 3,
    myStaffImg: std3,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
  {
    id: 4,
    myStaffImg: std4,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
  {
    id: 5,
    myStaffImg: std1,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
  {
    id: 6,
    myStaffImg: std2,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
  {
    id: 7,
    myStaffImg: std3,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
  {
    id: 8,
    myStaffImg: std4,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
  {
    id: 9,
    myStaffImg: std1,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
  {
    id: 7,
    myStaffImg: std3,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
  {
    id: 8,
    myStaffImg: std4,
    myStaffName: "Staff Name Here",
    myStaffEmail: "staffemailhere@gmail.com",
  },
];
const MyStaff = () => {
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
  return (
    <div>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"MY STAFF"} style={{ alignItems: "center" }} />
      </div>
      <Container className={classes.myStaff__mainDiv}>
        <Row className={classes.myStaff__row}>
          <Col md={3} className={classes.myStaff__colZero}>
            <div className={classes.myStaff__addstaff} onClick={showModal}>
              <h3>Add Staff</h3>
              <FaPlusSquare
                size={30}
                style={{ color: "#ffff", borderRadius: 10 }}
              />
            </div>
          </Col>
          {stadiumDetails.map((staff, ind) => (
            <Col md={3} key={ind} className={classes.myStaff__col}>
              <div className={classes.myStaff__container}>
                <div className={classes.myStaff__img}>
                  <img src={staff.myStaffImg} width="100%" />
                </div>
                <span>{staff.myStaffName}</span>
                <div>
                  <p>{staff.myStaffEmail}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className={classes.myStaff__loadBtn}>
          <Button text="Load More"></Button>
        </div>
      </Container>
      <ModalForm
        title="Add Staff"
        onOk={handleOk}
        onShow={showModal}
        onCancel={handleCancel}
        onVisible={isModalVisible}
      >
        <div>
          <form className={classes.myStaff__form}>
            <div className={classes.myStaff__twoInputs}>
              <div className={classes.myStaff__inputSrtTime}>
                <span>
                  <InputField
                    label={"User Name"}
                    placeholder={"Enter User Name"}
                    style={{
                      border: "1px solid var(--light-grey)",
                      background: "white",
                    }}
                  />
                </span>
              </div>
              <div className={classes.myStaff__inputOne}>
                <span>
                  <InputField
                    label={"Email"}
                    placeholder={"Enter Email"}
                    style={{
                      border: "1px solid var(--light-grey)",
                      background: "white",
                    }}
                  />
                </span>
              </div>
            </div>
            <div className={classes.myStaff__twoInputs}>
              <div className={classes.myStaff__inputSrtTime}>
                <span>
                  <InputField
                    label={"Job Description"}
                    placeholder={"Enter Job Description"}
                    style={{
                      border: "1px solid var(--light-grey)",
                      background: "white",
                    }}
                  />
                </span>
              </div>
              <div className={classes.myStaff__inputOne}>
                <span>
                  <InputField
                    label={"Phone Number"}
                    placeholder={"Enter Phone Number"}
                    style={{
                      border: "1px solid var(--light-grey)",
                      background: "white",
                    }}
                  />
                </span>
              </div>
            </div>
            <div className={classes.myStaff__twoInputs}>
              <div className={classes.myStaff__inputSrtTime}>
                <span>
                  <InputField
                    label={"Government Id"}
                    placeholder={"Enter Government Id"}
                    style={{
                      border: "1px solid var(--light-grey)",
                      background: "white",
                    }}
                  />
                </span>
              </div>
              <div className={classes.myStaff__inputOne}>
                <span>
                  <InputField
                    label={"Tax Id"}
                    placeholder={"Enter Tax Id"}
                    style={{
                      border: "1px solid var(--light-grey)",
                      background: "white",
                    }}
                  />
                </span>
              </div>
            </div>
            <div className={classes.myStaff__twoInputs}>
              
              <div className={classes.myStaff__inputOne}>
              <label style={{margin:0}}>Sport Type</label>
                <span>
                  <select style={{ border: "1px solid var(--light-grey)" }}>
                    <option value="">Select Sport Type</option>
                  </select>
                </span>
              </div>
            </div>
            <div className={classes.myStaff__textArea}>
              <label>Description</label>
              <textarea
                type="comment"
                rows={4}
                placeholder="Enter Description"
              />
            </div>
          </form>
        </div>
        <div className={classes.myStaff__btns}>
          <Button text="Submit" onClick={handleCancel}></Button>
          <button className={classes.myStaff__btn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </ModalForm>
      <Footer />
    </div>
  );
};
export default MyStaff;
