import React, { useState } from "react";

import styles from "./leagueHistoryCard.module.css";


const LeagueHistoryCard = ({ style, totalLeagues, totalWins, totalLoss,  postImage, }) => {
    return (
        <div className={styles.leagueHistory__card} style={style}>
            <div className={styles.leagueHistory__card_Data}>
                <div className={styles.leagueHistory__card_PostImg}>
                    <img src={postImage} alt="" />
                </div>
                <div className={styles.leagueHistory__card_Buttons}>
                    <view style={{display:'flex' ,flexDirection:'column',alignItems: 'center',}}>
                        <text style={{fontWeight:'bold'}}>Total Leagues</text>
                        <text style={{color:'var( --primary-color)',fontWeight:'bold',fontSize:'16px'}}>{totalLeagues}</text>
                    </view>
                    <view style={{display:'flex' ,flexDirection:'column',alignItems: 'center',}}>
                        <text style={{fontWeight:'bold'}}>Total Wins</text>
                        <text style={{color:'var( --primary-color)',fontWeight:'bold',fontSize:'16px'}}>{totalWins}</text>
                    </view>
                    <view style={{display:'flex' ,flexDirection:'column',alignItems: 'center',}}>
                        <text style={{fontWeight:'bold'}}>Total Loss</text>
                        <text style={{color:'var( --primary-color)',fontWeight:'bold',fontSize:'16px'}}>{totalLoss}</text>
                    </view>
                </div>
            </div>
            
        </div>
    );
};

export default LeagueHistoryCard;
