import React, { useState } from "react";
import Button from "../button/Button";
import { InputField, DropDown } from "../../Components";

import styles from "./mesh.module.css";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";

const Mesh = () => {
    const [privacyValue, setPrivacyValue] = useState("#");
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const history = useHistory();


    return (
        <div className={styles.mesh__card}>
            <div className={styles.mesh__textFieldsCenter}>
                <text style={{ textAlign: 'center', marginLeft: '10px', fontWeight: 'bold', fontSize: '20px', color: 'var(--secondary-color)' }}>Mesh</text>
            </div>
            <div className={styles.mesh__textFieldsCenter}>
                <text style={{ textAlign: 'center', marginLeft: '10px', fontWeight: 'bold', fontSize: '20px' }}>Select one which you want to merge your calendar</text>
            </div>
            <div className={styles.mesh__inputFieldsCenter}>
                <text style={{ textAlign: 'left', marginLeft: '10px', fontWeight: 'bold' }}>Select Coach</text>
                <div className={styles.mesh__inputFields}>
                    <DropDown
                        onClick={(e) => setPrivacyValue(e.target.value)}
                        dropdownValue={privacyValue}
                        options={[
                            "Public",
                            "Private",
                        ]}
                        placeholder="Select User"
                    />
                </div>

            </div>

            <div className={styles.mesh__inputFieldsCenter}>
                <text style={{ textAlign: 'left', marginLeft: '10px', fontWeight: 'bold' }}>Select Player</text>
                <div className={styles.mesh__inputFields}>
                    <DropDown
                        onClick={(e) => setPrivacyValue(e.target.value)}
                        dropdownValue={privacyValue}
                        options={[
                            "Public",
                            "Private",
                        ]}
                        placeholder="Select User"
                    />
                </div>

            </div>

            <div className={styles.mesh__inputFieldsCenter}>
                <text style={{ textAlign: 'left', marginLeft: '10px', fontWeight: 'bold' }}>Select Facility</text>
                <div className={styles.mesh__inputFields}>
                    <DropDown
                        onClick={(e) => setPrivacyValue(e.target.value)}
                        dropdownValue={privacyValue}
                        options={[
                            "Public",
                            "Private",
                        ]}
                        placeholder="Select User"
                    />
                </div>

            </div>

            <div className={styles.mesh__inputFieldsCenter}>
                <input type="date"
                    placeholder='Date'
                    className={styles.mesh__input}
                />
            </div>

            <div style={{ margin: '20px 0' }}>
                <Button onClick={() =>
                    history.push("/meshCalendarSlots")
                } text="SAVE" />
            </div>
        </div>
    );
};

export default Mesh;
