import React from "react";

import { useHistory } from "react-router-dom";
import styles from "./ProfileCard.module.css";
import Face1 from "../../Assets/profile-img.jpg";
import Button from "../button/Button";

const ProfileCard = ({ editBtn }) => {
  const history = useHistory();
  return (
    <section className={`${styles.profile}`}>
      <section className={`${styles.profile__wrapper}`}>
        <div className={`${styles.profile__img}`}>
          <img src={Face1} alt="" />
        </div>
        <div className={`${styles.profile__details}`}>
          <h4>John Legend</h4>
          <div className={`${styles.profile__details_table}`}>
            <table>
              <thead>
                <tr>
                  <th onClick={() => history.push("/followers")}>Followers</th>
                  <th onClick={() => history.push("/following")}>Following</th>
                  <th>Posts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>55k</td>
                  <td>20k</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
          </div>
          {editBtn && (
            <Button
              onClick={() => history.push("/editprofile")}
              text="EDIT PROFILE"
            />
          )}
        </div>
      </section>
    </section>
  );
};

export default ProfileCard;
