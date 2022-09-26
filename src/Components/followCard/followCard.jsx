import React from "react";
import Button from "../button/Button";

import styles from "./followCard.module.css";

const FollowCard = ({ img, userName , buttonText, followers, following }) => {
    return (
        <div className={styles.follow__card}>
            <div className={styles.follow__card_userInfo}>
                <div style={{width:'80px'}}>
                    <img src={img} width='100%' style={{borderRadius:100}} />
                </div>
                <div>
                    <p style={{ margin: '0px 20px',fontWeight:'bold',width:'80px' }}>{userName}</p>
                </div>
            </div>
            { !followers &&
            <div className={styles.follow__card__button}>
                <Button
                    text={buttonText}
                />
            </div>
            }   
        </div>
    );
};

export default FollowCard;
