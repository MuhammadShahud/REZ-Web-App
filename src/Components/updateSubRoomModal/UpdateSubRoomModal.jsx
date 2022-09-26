import { Modal, Form, Input, Upload } from "antd";

import styles from "./updateSubRoomModal.module.css";
import Button from "../button/Button";
import "./updateSubRoomModal.css";
import InputField from "../inputField/InputField";
const { TextArea } = Input;

const UpdateSubRoomModal = ({
  isModalVisible,
  handleCancel,
  handleOk,
  label,
}) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  return (
    <>
      <Modal
        title={label}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="product__modal"
      >
        <div>
          <form>
            <div className={styles.createroom_input_container}>
              <div style={{ width: "100%", marginTop: "3%" }}>
                <label>Room Name</label>
                <input
                  className={styles.createroom_input}
                  type="text"
                  placeholder="Enter Room Name"
                  name="name"
                />
              </div>
              <div style={{ width: "100%", marginTop: "3%", marginLeft: "5%" }}>
                <label>Room Assigned Staff</label>
                <br />
                <select value="Sports Type" className={styles.createroom_input}>
                  <option>option1</option>
                  <option>option 2</option>
                </select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "3%",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
            <div style={{ marginTop: "3%" }}>
              <label>Description</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Enter Description"
                className={styles.createroom_input}
                style={{ height: "100px", width: "100%", resize: "none" }}
              ></textarea>
            </div>
            <div style={{ marginTop: "3%" }}>
              <label>Upload Images</label>
              <br />
              <input
                className={styles.createroom_input}
                style={{ width: "100%" }}
                type="file"
              />
            </div>
          </form>
        </div>
        <div style={{ width: "100%", marginTop: "8%" }}>
          <hr className={styles.review_hr} />
        </div>
        <div className={styles.addbtn}>
          <div>
            <Button text="Update" />
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

export default UpdateSubRoomModal;
