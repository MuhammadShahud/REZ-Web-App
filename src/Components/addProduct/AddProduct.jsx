import { Modal, Form, Input, Select, Checkbox } from "antd";
import styles from "./addproduct.module.css";
import Button from "../button/Button";
import "./antdmodal.css";
import { AiOutlineClose } from "react-icons/ai";
import { InputField, DropDown } from "../index";
import { useState } from "react";
const { TextArea } = Input;
const AddProduct = ({ isModalVisible, handleCancel, handleOk }) => {
  const options = ["option 1", "option2"];
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <>
      <Modal
        title="Add Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="product__modal"
      >
        <div className={styles.form}>
          <Form form={form} onFinish={onFinish}>
            <div className={styles.form_input}>
              <div className={styles.form_item}>
                <InputField
                  label="Product Name"
                  placeholder="Enter Product Name"
                  style={{
                    background: "none",
                    border: "1px solid var(--light-grey)",
                  }}
                />
              </div>
              <div className={styles.form_item}>
                <div className={styles.addproduct__input}>
                  <label className={styles.addproduct__label}>
                    Choose Category
                  </label>
                  <DropDown
                    options={options}
                    style={{
                      background: "none",
                      border: "1px solid var(--light-grey)",
                      margin: "0px",
                      padding: "9px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.form_input}>
              <div className={styles.form_item}>
                <InputField
                  label="Category Name"
                  placeholder="Enter Category"
                  style={{
                    background: "none",
                    border: "1px solid var(--light-grey)",
                  }}
                />
              </div>
            </div>
            <div className={styles.form_input_checkbox}>
              <div className={styles.form_checkbox}>
                <input
                  className={styles.addproduct__checkbox}
                  type="checkbox"
                  id="small"
                  name="small"
                  value="small"
                />
                <label
                  className={styles.addproduct__label__checkbox}
                  for="small"
                >
                  Small
                </label>
              </div>
              <div className={styles.form_checkbox}>
                <input
                  className={styles.addproduct__checkbox}
                  type="checkbox"
                  id="medium"
                  name="medium"
                  value="medium"
                />
                <label
                  className={styles.addproduct__label__checkbox}
                  for="medium"
                >
                  Medium
                </label>
              </div>
              <div className={styles.form_checkbox}>
                <input
                  className={styles.addproduct__checkbox}
                  type="checkbox"
                  id="large"
                  name="large"
                  value="large"
                />
                <label
                  className={styles.addproduct__label__checkbox}
                  for="large"
                >
                  Large
                </label>
              </div>
              <div className={styles.form_checkbox}>
                <input
                  className={styles.addproduct__checkbox}
                  type="checkbox"
                  id="all"
                  name="all"
                  value="all"
                />
                <label className={styles.addproduct__label__checkbox} for="all">
                  All
                </label>
              </div>
            </div>
            <div className={styles.form_input}>
              <div className={styles.form_item}>
                <InputField
                  label="Price"
                  placeholder="Enter Price"
                  style={{
                    background: "none",
                    border: "1px solid var(--light-grey)",
                  }}
                />
              </div>
              <div className={styles.form_item}>
                <InputField
                  label="Choose Image"
                  type="file"
                  style={{
                    background: "none",
                    border: "1px solid var(--light-grey)",
                    padding: "5px",
                  }}
                />
              </div>
            </div>
            <div className={styles.form_input}>
              <div className={styles.form_item}>
                <InputField
                  label="Color"
                  placeholder="Enter Color"
                  style={{
                    background: "none",
                    border: "1px solid var(--light-grey)",
                  }}
                />
              </div>

            </div>
            
            <div className={styles.addproduct__btn}>
            {auth && auth[0]?.userRole === "store" ? null : 
            <>
              <p>
                Product Type
              </p>
              <div>
                <Button text={"Used"} />
              </div>
              </>
            }
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <div className={styles.addproduct__input}>
                <label className={styles.addproduct__label}>Description</label>
                <textarea
                  className={styles.addproduct__textarea}
                  label="Description"
                  placeholder="Description Here"
                  rows={5}
                />
              </div>
            </div>
          </Form>
        </div>
        <div className={styles.addbtn}>
          <div>
            <Button text="Submit" />
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

export default AddProduct;
