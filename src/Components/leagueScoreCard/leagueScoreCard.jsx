import React, { useState } from "react";

import styles from "./leagueScoreCard.module.css";


const LeagueScoreCard = ({ style, team1Profile, team1Score, team1Name, team2Name, matchDate, team2Profile, team2Score }) => {
    return (
        <div className={styles.leagueScore__card} style={style}>
            <div className={styles.leagueScore__card_Data}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className={styles.leagueScore__teamProfile}>
                        <img src={team1Profile} alt="" style={{ width: '80px' }} />
                    </div>
                    <text style={{ color: 'var( --primary-color)', fontWeight: 'bold', fontSize: '16px', }}>{team1Score}</text>
                </div>
                <div className={styles.leagueScore__card_ScoreData}>
                    <text style={{fontWeight:'bold'}}>{team1Name} vs {team2Name}</text>
                    <text>{matchDate}</text>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className={styles.leagueScore__teamProfile}>
                        <img src={team2Profile} alt="" style={{ width: '80px' }} />
                    </div>
                    <text style={{ color: 'var( --primary-color)', fontWeight: 'bold', fontSize: '16px', }}>{team2Score}</text>
                </div>
            </div>

        </div>
    );
};

export default LeagueScoreCard;
