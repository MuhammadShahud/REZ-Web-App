import React from "react";
import { Button, Heading, InputField, RezNavbar } from "../../Components";
import { AiFillCreditCard } from "react-icons/ai";

import cardIcon from "../../Assets/cardicon.jpg";
import styles from "./addCard.module.css";
import { useHistory } from "react-router-dom";


const AddCard = () => {
  const history = useHistory();

  return (
    <>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className={styles.rezz__addCard}>
        <div className="my-4 text-center">
          <Heading text="ADD NEW CARD" style={{ alignItems: "center" }} />
          <img src={cardIcon} />
        </div>

        <div className="p-3">
          <div className={styles.addCard__cardIcon}>
            <AiFillCreditCard color="#0570DE" />
            <p>Card</p>
          </div>
          <section>
            <div className="w-100  px-2 my-3">
              <InputField placeholder={"Card Number"} />
            </div>
            <div className="w-100  px-2 my-3">
              <InputField placeholder={"Card Holder Name"} />
            </div>
            <div className="d-flex">
              <div className="w-100 mx-2">
                <InputField placeholder={"Expiry Date"} />
              </div>
              <div className="w-100 mx-2">
                <InputField placeholder={"CVV"} />
              </div>
            </div>
            <div className="d-flex justify-content-center my-5">
              <Button text="ADD CARD" onClick={() => {
                history.replace("/payment")
              }}/>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddCard;
