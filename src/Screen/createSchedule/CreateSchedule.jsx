import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {
  RezNavbar,
  Heading,
  InputField,
  DropDown,
  Button,
} from "../../Components";
import { Footer } from "../../Containers";
import styles from "./createSchedule.module.css";

const CreateSchedule = () => {
  const [time, setTime] = useState("text");
  const options = ["Sports", "option2"];
  const options2 = ["privacy", "option2"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"CREATE SCHEDULE"} style={{ alignItems: "center" }} />
      </div>
      <div style={{ margin: "2% 0%" }}>
        <Container>
          <div className={styles.create__schedule__box}>
            <div className={styles.create__schedule__input}>
              <div>
                <label className={styles.create__schedule__label}>
                  Schedule Type
                </label>
              </div>
              <DropDown style={{ margin: "0px" }} options={options} />
            </div>
            <div className={styles.create__schedule__input}>
              <InputField label="Title" placeholder="Title Here" />
            </div>
            {/* <div className={styles.create__schedule__input}>
              <InputField label="Schedule Type" placeholder="Sports" />
            </div> */}
            <div className={styles.create__schedule__input}>
              <InputField
                label="No Of Participants"
                placeholder="Invite Friends"
                type={"number"}
              />
            </div>
            <div className={styles.create__schedule__input}>
              <label className={styles.create__schedule__label}>
                Description
              </label>
              <textarea
                className={styles.create__schedule__textarea}
                label="Description"
                placeholder="Description Here"
                rows={5}
              />
            </div>
            <div className={styles.create__schedule__input}>
              <InputField label="Date" placeholder="Select Date" type="date" />
            </div>
            <div
              className={styles.create__schedule__input}
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "45%" }}>
                <label className={styles.create__schedule__label}>Time</label>
                <input
                  className={styles.create__schedule__time__input}
                  placeholder="Start Time"
                  onFocus={() => setTime("time")}
                  onBlur={() => setTime("text")}
                  type={time}
                />
              </div>
              <div style={{ width: "45%" }}>
                <input
                  className={styles.create__schedule__time__input}
                  placeholder="End Time"
                  onFocus={() => setTime("time")}
                  onBlur={() => setTime("text")}
                  type={time}
                />
              </div>
            </div>
            <div className={styles.create__schedule__input}>
              <InputField label="Interval Time (Minutes)" placeholder="Enter Interval Time" type="text" />
            </div>
            <div className={styles.create__schedule__input}>
              <InputField label="Interval break (Minutes)" placeholder="Enter Interval Break" type="text" />
            </div>
            <div className={styles.create__schedule__input}>
              <InputField
                label="Price"
                placeholder="Cost (per hour)"
                type="number"
              />
            </div>
            <div className={styles.create__schedule__input}>
              <InputField label="Location" placeholder="Enter Location" />
            </div>
            <div className={styles.create__schedule__input}>
              <InputField label="Invites" placeholder="Invite Friends" />
            </div>

            <div className={styles.create__schedule__input}>
              <div className={styles.create__schedule__input}>
                <label className={styles.create__schedule__label}>
                  Privacy
                </label>
              </div>
              <DropDown style={{ margin: "0px" }} options={options2} />
            </div>
            <div className={styles.create__schedule__input}>
              <InputField
                label="Upload Image"
                placeholder="Upload Image"
                type="file"
              />
            </div>
            <div className={styles.create__schedule__button}>
              <div style={{ width: "35%" }}>
                <Button text="SUBMIT" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default CreateSchedule;
