import { React, useState } from "react";
import { Container } from "react-bootstrap";

import styles from "./ClassesHistory.module.css";
import { Button, Heading, HistoryCard, RezNavbar } from "../../Components";
import Classes1 from "../../Assets/e-classes-history_img_4.jpg";
import Classes2 from "../../Assets/e-classes-history_img_1.jpg";
import Classes3 from "../../Assets/e-classes-history_img_3.jpg";
import Classes4 from "../../Assets/e-classes-history_img_2.jpg";
import ModalForm from "../../Components/modal/Modal";
import { InputField, DropDown } from "../../Components";
import { Footer } from "../../Containers";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "../../Components/searchBar/searchBar";

const ClassesHistory = () => {
  const user = JSON.parse(localStorage.getItem("user"));
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
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />
      <div className="my-3">
        <Heading text="E-CLASSES HISTORY" style={{ alignItems: "center" }} />
      </div>
      <Container>
        <SearchBar placeholder={"Search Now"} />
      </Container>
      <div className="container d-flex justify-content-center">
        {user && user[0]?.userRole == "facility" && (
          <div className={styles.classHistory__Createbtn}>
            <Button
              onClick={showModal}
              style={{ width: 250 }}
              text="CREATE NEW E-CLASSES"
            />
          </div>
        )}
      </div>
      <div className="container d-flex align-items-center flex-column">
        {classHistory.map((data, index) => {
          return <HistoryCard data={data} key={index} isHistory={true} />;
        })}
        <div className="my-5">
          <Button text="LOAD MORE" />
        </div>
      </div>
      <ModalForm
        title="Create New E-Classes"
        onOk={handleOk}
        onShow={showModal}
        onCancel={handleCancel}
        onVisible={isModalVisible}
      >
        <form className={styles.classHistory__form}>
          <div className={styles.classHistory__twoInputs}>
            <div className={styles.classHistory__inputSrtTime}>
              <span>
                <InputField
                  label={"Session Name"}
                  placeholder={"Enter Session Name"}
                  style={{
                    border: "1px solid var(--light-grey)",
                    background: "white",
                  }}
                />
              </span>
            </div>
            <div className={styles.classHistory__inputOne}>
              <span>
                <select style={{ border: "1px solid var(--light-grey)" }}>
                  <option value="">Enter Duration</option>
                </select>
              </span>
            </div>
          </div>
          <div className={styles.classHistory__twoInputs}>
            <div className={styles.classHistory__inputSrtTime}>
              <span className={styles.classHistory__inputFiled}>
                <InputField
                  label={"Date"}
                  placeholder={"Enter Date"}
                  style={{
                    border: "1px solid var(--light-grey)",
                    background: "white",
                  }}
                />
              </span>
            </div>
            <div className={styles.classHistory__inputOne}>
              <span className={styles.classHistory__inputFiled}>
                <InputField
                  label={"Time"}
                  placeholder={"Enter Time"}
                  style={{
                    border: "1px solid var(--light-grey)",
                    background: "white",
                  }}
                />
              </span>
            </div>
          </div>
          <div className={styles.classHistory__twoInputs}>
            <div className={styles.classHistory__inputSrtTime}>
              <span className={styles.classHistory__inputFiled}>
                <InputField
                  label={"Amount"}
                  placeholder={"Enter Amount"}
                  style={{
                    border: "1px solid var(--light-grey)",
                    background: "white",
                  }}
                />
              </span>
            </div>
            <div className={styles.classHistory__chooseFile}>
              <input type="file" />
            </div>
          </div>
          <div className={styles.classHistory__textArea}>
            <label>Description</label>
            <textarea type="text" placeholder="Enter Description" rows={4} />
          </div>
        </form>
        <div className={styles.classHistory__btns}>
          <Button text="Submit" onClick={handleCancel}></Button>
          <button className={styles.classHistory__btn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </ModalForm>
      <Footer />
    </div>
  );
};

const classHistory = [
  {
    img: Classes1,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
    duration: "150 Mins",
  },
  {
    img: Classes2,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
    duration: "150 Mins",
  },
  {
    img: Classes3,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
    duration: "150 Mins",
  },
  {
    img: Classes4,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
    duration: "150 Mins",
  },
  {
    img: Classes1,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
    duration: "150 Mins",
  },
  {
    img: Classes2,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
    duration: "150 Mins",
  },
  {
    img: Classes3,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
    duration: "150 Mins",
  },
];

export default ClassesHistory;
