import React, { useState } from "react";

// import styles from "./ChangePassword.module.css";
import styles from "../forgetPassword/ForgetPassword.module.css";
import Logo from "../../../Assets/LOGO.png";
import { Button, Heading, InputField } from "../../../Components";
import { Footer } from "../../../Containers";
import { useHistory } from "react-router-dom";

const ChangePassword = () => {
  const history = useHistory();

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={`${styles.auth}`}>
        <section className={styles.auth__logo}>
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </section>

        <div className={styles.forgetPassword}>
          <section className={`container mt-3 p-4 ${styles.auth__modal}`}>
            <div>
              <Heading
                text="CHANGE PASSWORD?"
                style={{ alignItems: "center" }}
              />
            </div>

            <form onSubmit={handleForm}>
              <div className="text-center my-3">
                <p>Enter New Password</p>
              </div>
              <div
                className={`d-flex w-100 justify-content-center my-3 ${styles.login__input}`}
              >
                <InputField
                  style={{ width: "50%" }}
                  placeholder={"New Password"}
                />
              </div>
              <div
                className={`d-flex w-100 justify-content-center my-3 ${styles.login__input}`}
              >
                <InputField
                  style={{ width: "50%" }}
                  placeholder={"Confirm Password"}
                />
              </div>

              <div className="w-100 d-flex justify-content-center my-3">
                <Button
                  text="RESET PASSWORD"
                  onClick={() => {
                    history.push("/login");
                  }}
                />
              </div>
            </form>
          </section>
        </div>
        <div className={styles.footer__wrapper}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
