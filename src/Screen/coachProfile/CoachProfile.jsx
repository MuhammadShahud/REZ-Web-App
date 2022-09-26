import React, { useEffect } from "react";

import { Button, Heading, RezNavbar } from "../../Components";
import { Footer } from "../../Containers";
import styles from "./CoachProfile.module.css";
import { Col, Row } from "react-bootstrap";
import Profile1 from "../../Assets/profile-img.jpg";
import Traning1 from "../../Assets/profile-schedules-Lessons_img1.jpg";
import Traning2 from "../../Assets/profile-schedules-Lessons_img2.jpg";
import Traning3 from "../../Assets/profile-schedules-Lessons_img3.jpg";
import Traning4 from "../../Assets/profile-schedules-Lessons_img4.jpg";
import { useHistory } from "react-router-dom";

const CoachProfile = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <section className="my-3 ">
        <Heading text="Coach" style={{ alignItems: "center" }} />
      </section>

      {/* //user profile */}
      <UserProfile />

      <div className={`${styles.profile__btn}`}>
        <Button
          text="LESSON"
          style={{ background: " var(--profile-btn)", color: "black" }}
        />
        <Button
          text="CLINICS"
          style={{ background: " var(--profile-btn)", color: "black" }}
        />
        <Button text="ACTIVITY" />

      </div>

      <TrainingCard />
      <div className="d-flex justify-content-center my-4">
        <Button text="Load More" />
      </div>

      <Footer />
    </div>
  );
};

const TrainingCard = () => {
  const history = useHistory();
  return (
    <section className={`${styles.training} container `}>
      <Row className="m-0">
        {trainingData.map((data, index) => {
          return (
            <Col
              md={6}
              key={index}
              onClick={() => {
                history.push("/coachdetails", { data });
              }}
            >
              <div className={`${styles.trainingCard}`}>
                <div className={`${styles.trainingCard__img}`}>
                  <img src={data.image} alt="" />
                </div>
                <div className={`${styles.trainingCard__details}`}>
                  <h4>{data.name}</h4>
                  <p>Price: $12:00</p>
                  <small>Time:01 hr </small>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

const UserProfile = () => {
  return (
    <section className={`${styles.profile}`}>
      <section className={`${styles.profile__wrapper}`}>
        <div className={`${styles.profile__img}`}>
          <img src={Profile1} alt="" />
        </div>
        <div className={`${styles.profile__details}`}>
          <h4>JACK</h4>
          <div className={`${styles.profile__details_table}`}>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Experience</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Football Trainer</td>
                  <td>14 Years</td>
                  <td>01</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={`${styles.profile__details_bio}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            labore corrupti ex, pariatur reprehenderit aspernatur quae assumenda
            harum delectus libero repellendus at voluptates
          </p>
        </div>
      </section>
    </section>
  );
};

const trainingData = [
  {
    image: Traning1,
    name: "Warm Up",
  },
  {
    image: Traning2,
    name: "Ball Games",
  },
  {
    image: Traning3,
    name: "Football Goal Keeper",
  },
  {
    image: Traning4,
    name: "Core Training",
  },
  {
    image: Traning1,
    name: "Warm Up",
  },
  {
    image: Traning2,
    name: "Ball Games",
  },
];

export default CoachProfile;
