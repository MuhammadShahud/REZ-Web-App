import React, { useState } from "react";
import {
  Heading,
  RezNavbar,
  Button,
  InputField,
  DropDown,
  FollowCard,
} from "../../Components";
import { CalanderTabs, Footer, MemberShip } from "../../Containers";
import styles from "./membership.module.css";

const Membership = () => {
  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />

      <div className={styles.membership__main}>
        <MemberShip />
      </div>

      <Footer />
    </div>
  );
};

export default Membership;
