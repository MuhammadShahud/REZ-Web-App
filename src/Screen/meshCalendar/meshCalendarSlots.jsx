import React, { useState } from "react";
import { Heading, RezNavbar, Button, InputField, DropDown, FollowCard, Mesh, MeshSlots } from "../../Components";
import {
    CalanderTabs,
    Footer,
    MemberShip,
} from "../../Containers";
import styles from "./meshCalendar.module.css";

const SlotsData = [
    {
        date: '23',
        month: 'Sep',
        day: 'Wed',
        slotTime: '1:00 PM - 2:00 PM',
    },
    {
        date: '23',
        month: 'Sep',
        day: 'Wed',
        slotTime: '1:00 PM - 2:00 PM',
    },
    {
        date: '23',
        month: 'Sep',
        day: 'Wed',
        slotTime: '1:00 PM - 2:00 PM',
    },
];

const MeshCalendarSlots = () => {
    return (
        <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
            <RezNavbar style={{ top: 0, background: 'var( --gradient-bg)' }} />
            <Heading text={'Mesh Calendar'} style={{ alignItems: 'center', margin: '40px 0' }} />
            <div className={styles.membership__main}>

                <MeshSlots />


            </div>

            <Footer />
        </div>
    );
};

export default MeshCalendarSlots;
