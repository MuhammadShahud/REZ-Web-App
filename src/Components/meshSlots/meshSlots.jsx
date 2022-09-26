import React, { useState } from "react";
import Button from "../button/Button";

import styles from "./meshSlots.module.css";

const SlotsData = [
    {
        date: '23',
        month: 'Sep',
        day: 'Wed',
        slotTime: '1:00 PM - 2:00 PM',
    },
    {
        date: '24',
        month: 'Sep',
        day: 'Thu',
        slotTime: '1:00 PM - 2:00 PM',
    },
    {
        date: '25',
        month: 'Sep',
        day: 'Fri',
        slotTime: '1:00 PM - 2:00 PM',
    },
    {
        date: '26',
        month: 'Sep',
        day: 'Sat',
        slotTime: '1:00 PM - 2:00 PM',
    },
];
const MeshSlots = () => {
    const [privacyValue, setPrivacyValue] = useState("#");
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));


    return (
        <div className={styles.mesh__card}>
            <div className={styles.mesh__textFieldsCenter}>
                <text style={{ textAlign: 'center', marginLeft: '10px', fontWeight: 'bold', fontSize: '24px', }}>You both have below listed hours/slots free on this date</text>
            </div>
            <div className={styles.mesh__textFieldsCenter}>
                <text style={{ textAlign: 'center', marginLeft: '10px', fontWeight: 'bold', fontSize: '20px', color: 'var(--primary-color)' }}>8 hrs : 20 mins</text>
            </div>

            {SlotsData.map((item, ind) => {
                return (
                    <div className={styles.mesh__inputFieldsCenter}>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <text style={{ fontWeight: 'bold', color: 'var(--primary-color)', fontSize: '20px' }}>{item.date} {item.month} </text>
                            <text style={{ fontWeight: 'bold', color: 'var(--light-grey)', fontSize: '16px' }}>{item.day}</text>
                        </div>
                        <div>
                            <text style={{ fontWeight: 'bold', color: 'var(--light-grey)', fontSize: '20px' }}>{item.slotTime}</text>
                        </div>

                    </div>
                );

            })}

        </div>
    );
};

export default MeshSlots;
