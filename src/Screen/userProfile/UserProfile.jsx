import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import {
  Button,
  Heading,
  ProfileCard,
  RezNavbar,
  UserPostsCard,
} from "../../Components";
import { Footer } from "../../Containers";
import styles from "./UserProfile.module.css";
import Profile1 from "../../Assets/profile_big_img1.jpg";
import Profile2 from "../../Assets/profile_big_img2.jpg";
import Profile3 from "../../Assets/profile_big_img3.jpg";
import Profile4 from "../../Assets/profile_big_img4.jpg";
import Eclasses1 from "../../Assets/e-classes-history_img_1.jpg";
import Eclasses2 from "../../Assets/e-classes-history_img_2.jpg";
import Eclasses3 from "../../Assets/e-classes-history_img_3.jpg";
import Eclasses4 from "../../Assets/e-classes-history_img_4.jpg";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [postToggler, setPostToggler] = useState(true);
  const [eclassesToggler, setEclassesToggler] = useState(false);
  const [schedulesToggler, setSchedulesToggler] = useState(false);

  const { id } = useParams();

  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <section className="my-3 ">
        <Heading
          text={
            id == 1 ? "COACH PROFILE" : id == 2 ? "FACILITY PROFILE" : "PROFILE"
          }
          style={{ alignItems: "center" }}
        />
      </section>

      <ProfileCard />
      <ProfileTabs
        postToggler={postToggler}
        setPostToggler={setPostToggler}
        eclassesToggler={eclassesToggler}
        setEclassesToggler={setEclassesToggler}
        schedulesToggler={schedulesToggler}
        setSchedulesToggler={setSchedulesToggler}
        userRole={id}
      />
      {postToggler && <PostTab />}
      {eclassesToggler && <EClassesTab />}

      <div className="d-flex justify-content-center">
        <Button text="LOAD MORE" />
      </div>
      <div className="my-3">
        <Footer />
      </div>
    </div>
  );
};

const ProfileTabs = ({
  postToggler,
  setPostToggler,
  eclassesToggler,
  setEclassesToggler,
  schedulesToggler,
  setSchedulesToggler,
  userRole,
}) => {
  const history = useHistory();
  return (
    <div
      className={`d-flex justify-content-center my-5 ${styles.profile__tabs}`}
    >
      <Button
        text="POST"
        style={
          postToggler
            ? {}
            : { background: "var( --profile-btn)", color: "black" }
        }
        onClick={() => {
          setPostToggler(true);
          setEclassesToggler(false);
          setSchedulesToggler(false);
        }}
      />
      {userRole == 2 && (
        <Button
          text="E-CLASSES"
          style={
            eclassesToggler
              ? {}
              : { background: "var( --profile-btn)", color: "black" }
          }
          onClick={() => {
            setEclassesToggler(true);
            setPostToggler(false);
            setSchedulesToggler(false);
          }}
        />
      )}
      <Button
        text="SCHEDULES"
        style={
          schedulesToggler
            ? {}
            : { background: "var( --profile-btn)", color: "black" }
        }
        onClick={() => {
          //   setSchedulesToggler(true);
          //   setEclassesToggler(false);
          //   setPostToggler(false);
          history.push(`/userprofileschedule/${userRole}`);
        }}
      />
    </div>
  );
};

const PostTab = () => {
  return (
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
  );
};

const EClassesTab = () => {
  return (
    <>
      <UserPostsCard dataObj={eClassesObj} />
    </>
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

const eClassesObj = [
  {
    image: Eclasses1,
    name: "Gym Session 01",
    price: "12",
    date: "September 15'2021",
  },
  {
    image: Eclasses2,
    name: "Stamina Lessons",
    price: "18",
    date: "September 18'2021",
  },
  {
    image: Eclasses3,
    name: "Online Classes",
    price: "22",
    date: "September 19'2021",
  },
  {
    image: Eclasses4,
    name: "Gym Session 02",
    price: "50",
    date: "September 22'2021",
  },
  {
    image: Eclasses1,
    name: "Gym Session 01",
    price: "55",
    date: "September 29'2021",
  },
  {
    image: Eclasses2,
    name: "Stamina Lessons",
    price: "13",
    date: "September 01'2021",
  },
  {
    image: Eclasses3,
    name: "Online Classes",
    price: "88",
    date: "September 05'2021",
  },
  {
    image: Eclasses4,
    name: "Gym Session 02",
    price: "54",
    date: "September 09'2021",
  },
];

export default UserProfile;
