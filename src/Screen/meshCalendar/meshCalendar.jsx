import React, { useState } from "react";
import { Heading, RezNavbar, Button, InputField, DropDown, FollowCard, Mesh } from "../../Components";
import {
    CalanderTabs,
    Footer,
    MemberShip,
} from "../../Containers";
import styles from "./meshCalendar.module.css";


const MeshCalendar = () => {
    return (
        <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
            <RezNavbar style={{ top: 0, background: 'var( --gradient-bg)' }} />
            <Heading text={'Mesh Calendar'} style={{ alignItems: 'center', margin: '40px 0' }} />
            <div className={styles.membership__main}>

                <Mesh />

            </div>

            <Footer />
        </div>
    );
};

export default MeshCalendar;
