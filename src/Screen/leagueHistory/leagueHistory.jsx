import React, { useState } from "react";
import {
  Heading,
  LeagueHistoryCard,
  LeagueScoreCard,
  RezNavbar,
} from "../../Components";
import { Footer } from "../../Containers";
import postImg from "../../Assets/highlights_b-img1.jpg";
import styles from "./leagueHistory.module.css";
import team1 from "../../Assets/league-logo-1.jpg";
import team2 from "../../Assets/league-logo-2.jpg";

const LeagueScoreCardData = [
  {
    team1Profile: team1,
    team1Score: "05",
    team1Name: "Soccer Club",
    team2Name: "Football Club",
    team2Profile: team2,
    team2Score: "05",
    matchDate: "Sep'21 21 at 12 PM",
  },
  {
    team1Profile: team1,
    team1Score: "05",
    team1Name: "Soccer Club",
    team2Name: "Football Club",
    team2Profile: team2,
    team2Score: "05",
    matchDate: "Sep'21 21 at 12 PM",
  },
  {
    team1Profile: team1,
    team1Score: "05",
    team1Name: "Soccer Club",
    team2Name: "Football Club",
    team2Profile: team2,
    team2Score: "05",
    matchDate: "Sep'21 21 at 12 PM",
  },
];

const LeagueHistory = () => {
  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <Heading
        text={"LEAGUE HISTORY"}
        style={{ alignItems: "center", margin: "40px 0" }}
      />
      <LeagueHistoryCard
        style={{ alignItems: "center" }}
        postImage={postImg}
        totalLeagues={"05"}
        totalWins={"03"}
        totalLoss={"02"}
      />
      <div className={styles.leagueHistory__card}>
        <div className={styles.leagueHistory__card_Data}>
          <text style={{ fontWeight: "bold" }}>UEFA Champions League</text>
          {LeagueScoreCardData.map((item, ind) => {
            return (
              <LeagueScoreCard
                team1Profile={item.team1Profile}
                team1Score={item.team1Score}
                team1Name={item.team1Name}
                team2Name={item.team2Name}
                team2Profile={item.team2Profile}
                team2Score={item.team2Score}
                matchDate={item.matchDate}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LeagueHistory;
