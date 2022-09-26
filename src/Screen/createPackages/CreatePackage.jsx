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
import styles from "./CreateContract.module.css";

const CreatePackage = () => {
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <div className={styles.contract__form__wrapper}>
        <section className="my-3 ">
          <Heading text="CREATE PACKAGES" style={{ alignItems: "center" }} />
        </section>
        <section className="container">
          <form>
            <section className="my-3 d-flex">
              <div className=" mx-2 w-100 ">
                <InputField placeholder="Package Name" />
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
                      "yearly",
                      "monthly",
                      "weekly"
                    ]
                  }
                  placeholder="Validity"
                  style={{ margin: "0" }}
                />
              </div>
              <div className="mx-2 w-100">
                <InputField placeholder="Price" />
              </div>
            </section>

            <section className="w-100 d-flex my-3">
              <div className="mx-2 w-100">
                <DropDown
                  // onClick={(e) => setRegisterValue(e.target.value)}
                  dropdownValue={"#"}
                  options={[]}
                  placeholder="Schedule Type"
                  style={{ margin: "0" }}
                />
              </div>
              <div className="mx-2 w-100 d-flex align-items-center">
              </div>
            </section>
            <div className="d-flex justify-content-center my-5">
              <Button text="CREATE CONTRACTS" />
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

export default CreatePackage;
