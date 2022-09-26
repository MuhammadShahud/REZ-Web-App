import React, { useState } from "react";
import { Heading, RezNavbar, PostStatus, PostCard, PostEvent, Button, InputField, DropDown, BookingConfirmedCard } from "../../Components";
import {
    Footer,
} from "../../Containers";
import styles from "./contactUs.module.css";
import cap from "../../Assets/add-to-cart_02.jpg";
import {
    AiOutlineClockCircle
} from "react-icons/ai";




const ContactUs = () => {

    return (
        <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
            <RezNavbar style={{ top: 0, background: 'var( --gradient-bg)' }} />
            <Heading text={'Contact Us'} style={{ alignItems: 'center', margin: '40px 0' }} />

            <div className={styles.contactUs__main}>
                <div className={styles.contactUs__mainRow}>
                    <div className={styles.contactUs__textArea}>
                        <text style={{ fontWeight: 'bold', fontSize: '20px' }}>
                            Contact our support guys or make appointment with our consultant.
                        </text>
                        <text style={{ fontSize: '12px' , margin:'10px 0px'}}>
                            Please contact us using the information below. For additional information on our management consultant services, please visit the appropriate page on our site.
                        </text>
                    </div>
                    <div className={styles.contactUs__fieldArea}>

                        <InputField placeholder={'Name'} style={{ margin: '0px 0px' }} />
                        <InputField placeholder={'Email'} style={{ margin: '10px 0px' }} />
                        {/* <InputField placeholder={'Type your message here'} style={{ margin: '10px 0px' ,padding: '30px 0px' ,}} /> */}
                        <div className={styles.contactUs__textInput}>
                            <textarea type="text" placeholder="Type Your Message Here" />
                        </div>

                        <div className={styles.contactUs__buttonCenter}>
                            <Button text="SUBMIT" style={{ alignItems: 'center', }} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
