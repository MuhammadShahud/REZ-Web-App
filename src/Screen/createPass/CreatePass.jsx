import React from "react";
import { AiTwotoneDelete, AiOutlinePlus } from "react-icons/ai";

import {
  DropDown,
  Heading,
  InputField,
  RezNavbar,
  Button,
} from "../../Components";
import { Footer } from "../../Containers";
import styles from "./CreatePass.module.css";

const CreatePass = () => {
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <div className={styles.contract__form__wrapper}>
        <section className="my-3 ">
          <Heading text="CREATE PASS" style={{ alignItems: "center" }} />
        </section>
        <section className="container">
          <form>
            <section className="my-3 d-flex">
              <div className=" mx-2 w-100 ">
                <InputField placeholder="Pass Name" />
              </div>
            </section>

            <section className="my-3 d-flex">
              <div className=" mx-2 w-100 ">
                <textarea
                  className={styles.createContract__textArea}
                  placeholder="Describtion"
                />
              </div>
            </section>

            <section className="w-100 d-flex my-3">
              <div className="mx-2 w-100">
                <DropDown
                  // onClick={(e) => setRegisterValue(e.target.value)}
                  dropdownValue={"#"}
                  options={
                    [
                      "Activity",
                      "Event",
                      "Lesson",
                      "Clinic"
                    ]
                  }
                  placeholder="Schedule Type"
                  style={{ margin: "0" }}
                />
              </div>
              <div className="mx-2 w-100">
                <InputField placeholder="Price" type={"number"} />
              </div>
            </section>

            <section className="w-100 d-flex my-3">
              <div className="mx-2 w-100">
              <InputField placeholder="Total Visits" type={"number"}/>
              </div>
              <div className="mx-2 w-100 d-flex align-items-center">
              </div>
            </section>
            <div className="d-flex justify-content-center my-5">
              <Button text="CREATE Pass" />
            </div>
          </form>
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default CreatePass;
