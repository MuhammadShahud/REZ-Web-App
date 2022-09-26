import React, { useState } from "react";

import styles from "./bookingConfirmedCard.module.css";

import { Button } from "antd";


const BookingConfirmedCard = ({
    style, name, img, type, location, price
}) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={styles.bookingConfirmed__card} style={style}>
            <div className={styles.bookingConfirmed__card_Data}>
                <div>
                    <img src={img}  alt="" style={{borderRadius:'100px',width:'100px',height:'100px'}}/>
                </div>
                <div className={styles.bookingConfirmed__card_DataFields}>
                    <text style={{ fontWeight: 'bold',lineHeight:'40px',fontSize:'18px' }}>{name}</text>
                    <div className={styles.bookingConfirmed__card_FlexRow}>
                        <div className={styles.bookingConfirmed__card_FlexCol}>
                            <text style={{lineHeight:'10px',fontSize:'12px' }}>Type</text>
                            <text style={{ fontWeight: 'bold',lineHeight:'20px',fontSize:'12px'  }}>{type}</text>
                        </div>
                        <div className={styles.bookingConfirmed__card_FlexColCategory}>
                            <text style={{lineHeight:'10px',fontSize:'12px' }}>Location</text>
                            <text style={{ fontWeight: 'bold',lineHeight:'20px',fontSize:'12px'  }}>{location}</text>
                        </div>
                        <div className={styles.bookingConfirmed__card_FlexColCategory}>
                            <text style={{lineHeight:'10px',fontSize:'12px' }}>Price</text>
                            <text style={{ fontWeight: 'bold',lineHeight:'20px',fontSize:'12px'  }}>{'$'+price}</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmedCard;
