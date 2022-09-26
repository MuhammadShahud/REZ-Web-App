import { Modal, Form, Input, Select, Checkbox } from "antd";
import styles from "./createLeaguemodal.module.css";
import Button from "../button/Button";
import "./createLeaguemodal.css";
import { useState } from "react";
const { TextArea } = Input;

const CreateLeagueModal = ({ isModalVisible, handleCancel, handleOk }) => {
  const [inputType, setInputType] = useState("text");
  const [inputTypeDate, setInputTypeDate] = useState("text");
  const options = ["option 1", "option2"];
  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  return (
    <>
      <Modal
        title="Create League"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="createleague__modal"
      >
        <div>
          <form>
            <div style={{ width: "100%", margin: "2% 0%" }}>
              <label className={styles.label}>League Name</label>
              <select
                value="Enter Sports Type"
                className={styles.createleague_input}
              >
                <option>option1</option>
                <option>option 2</option>
              </select>
            </div>
            <div style={{ margin: "2% 0%" }}>
              <label className={styles.label}>Description</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Enter Description"
                className={styles.createleague_input}
                style={{ height: "100px", width: "100%", resize: "none" }}
              ></textarea>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "2% 0%",
              }}
            >
              <div style={{ width: "50%" }}>
                <label className={styles.label}>Date</label>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "45%" }}>
                    <input
                      className={styles.createleague_input}
                      type={inputTypeDate}
                      placeholder="Start Date"
                      name="startdate"
                      onBlur={() => setInputTypeDate("text")}
                      onFocus={() => setInputTypeDate("date")}
                    />
                  </div>
                  <div style={{ width: "45%" }}>
                    <input
                      className={styles.createleague_input}
                      type={inputTypeDate}
                      placeholder="End Date"
                      name="enddate"
                      onBlur={() => setInputTypeDate("text")}
                      onFocus={() => setInputTypeDate("date")}
                    />
                  </div>
                </div>
              </div>
              <div style={{ width: "45%" }}>
                <label className={styles.label}>Time</label>
                <input
                  className={styles.createleague_input}
                  type={inputType}
                  placeholder="Select Time"
                  name="time"
                  onBlur={() => setInputType("text")}
                  onFocus={() => setInputType("time")}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "2% 0%",
              }}
            >
              <div style={{ width: "50%" }}>
                <label className={styles.label}>Price</label>
                <input
                  className={styles.createleague_input}
                  type="number"
                  placeholder="Enter Training Cost"
                  name="price"
                />
              </div>
              <div style={{ width: "45%" }}>
                <label className={styles.label}>Location</label>
                <input
                  className={styles.createleague_input}
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                />
              </div>
            </div>
          </form>
        </div>
        <div style={{ width: "100%", marginTop: "8%" }}>
          <hr className={styles.review_hr} />
        </div>
        <div className={styles.btn}>
          <div style={{ width: "40%" }}>
            <Button text="Submit" style={{ width: "100%" }} />
          </div>
          <div>
            <button className={styles.rezButton} onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateLeagueModal;
