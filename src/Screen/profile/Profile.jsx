import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Heading, ProfileCard, RezNavbar } from "../../Components";
import styles from "./Profile.module.css";
import Face1 from "../../Assets/profile-img.jpg";
import { Button } from "../../Components";
import Profile1 from "../../Assets/profile_big_img1.jpg";
import Profile2 from "../../Assets/profile_big_img2.jpg";
import Profile3 from "../../Assets/profile_big_img3.jpg";
import Profile4 from "../../Assets/profile_big_img4.jpg";
import Followers from "../followers/Followers";
import { Col, Row } from "react-bootstrap";
import { Footer } from "../../Containers";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <section className="my-3 ">
        <Heading text="Profile" style={{ alignItems: "center" }} />
      </section>

      <UserProfile />

      <section className="container my-5">
        <Row className="m-0">
          {postData.map((val, ind) => {
            return (
              <Col
                md="3"
                xs="6"
                key={ind}
                className={`my-3 ${styles.profilePostCard}`}
              >
                <img src={val.img} width="100%" height="100%" />
              </Col>
            );
          })}
        </Row>
      </section>
      <div className="d-flex justify-content-center">
        <Button text="LOAD MORE" />
      </div>
      <div className="my-3">
        <Footer />
      </div>
    </div>
  );
};

const UserProfile = () => {
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
          <Button
            onClick={() => history.push("/editprofile")}
            text="EDIT PROFILE"
          />
        </div>
      </section>
    </section>
  );
};

const postData = [
  {
    img: Profile1,
  },
  {
    img: Profile2,
  },
  {
    img: Profile3,
  },
  {
    img: Profile4,
  },
  {
    img: Profile1,
  },
  {
    img: Profile2,
  },
  {
    img: Profile3,
  },
  {
    img: Profile4,
  },
  {
    img: Profile1,
  },
  {
    img: Profile2,
  },
  {
    img: Profile3,
  },
  {
    img: Profile4,
  },
];

export default Profile;
