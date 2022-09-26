import React from "react";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useLocation } from "react-router-dom";

import { Button, Heading, RezNavbar } from "../../Components";
import Details from "../../Assets/e-classes-details_img.jpg";
import styles from "./CoachDetails.module.css";
import Profile1 from "../../Assets/profile-img.jpg";
import Profile2 from "../../Assets/profile-img-1.jpg";
import Profile3 from "../../Assets/profile-img-4.jpg";
import Profile4 from "../../Assets/profile-img-3.jpg";
import { Footer } from "../../Containers";
import { useHistory } from "react-router-dom";

const CoachDetails = () => {
  const location = useLocation();
  const { image, name } = location?.state?.data;
  const user = JSON.parse(localStorage.getItem("user"));

  const history = useHistory();
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <div className="my-3">
        <Heading text="Activity Details" style={{ alignItems: "center" }} />
      </div>

      <section className="container">
        <div className={styles.details__wallpaper}>
          <img src={image} alt="detailsPic" />
        </div>
        <div className={styles.details__content}>
          <h4>{name}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            error consectetur blanditiis laboriosam, quibusdam sequi aliquam
            iure repudiandae hic doloribus rem eius architecto saepe accusantium
            iusto tempore porro quos cumque libero officia inventore. Beatae
            nostrum, delectus mollitia architecto facilis in explicabo officia
            voluptate, aperiam nesciunt culpa laborum nisi ipsum inventore.
          </p>
        </div>

        <section className={styles.details__participants}>
          <h6>Participants</h6>
          <div className={styles.details__participants__profile}>
            {participantsProfile.map((val, ind) => {
              return <img src={val.img} key={ind} alt="profile" />;
            })}
          </div>
        </section>

        <section className={styles.details__schedule}>
          <div>
            <BiCalendar />
            <small>March 17 2022</small>
          </div>
          <div>
            <AiOutlineClockCircle />
            <small>8:00 - 9:00 PM</small>
          </div>
          <div>
            <MdLocationOn />
            <small>New York</small>
          </div>
        </section>
        <div className="d-flex justify-content-center my-3">
          {user && user[0].userRole === "facility" || 
          user && user[0].userRole === "team" ||
           user && user[0].userRole === "parent" ||
           user && user[0].userRole === "coach" ||
           user && user[0].userRole === "staff"  || 
           user && user[0].userRole === "player"? (
            <Button
              text="Next"
              onClick={() => {
                history.push("/bookappointment");
              }}
            />
          ) : null}
        </div>
      </section>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

const participantsProfile = [
  {
    img: Profile1,
  },
  {
    img: Profile2,
  },
  {
    img: Profile4,
  },
  {
    img: Profile1,
  },
  {
    img: Profile3,
  },
  {
    img: Profile1,
  },
];

export default CoachDetails;
