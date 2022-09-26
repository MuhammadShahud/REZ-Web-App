import React, { useEffect } from "react";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useLocation, useHistory } from "react-router-dom";

import { Button, Heading, RezNavbar } from "../../Components";
import Details from "../../Assets/e-classes-details_img.jpg";
import styles from "./ClassDetails.module.css";
import Profile1 from "../../Assets/profile-img.jpg";
import Profile2 from "../../Assets/profile-img-1.jpg";
import Profile3 from "../../Assets/profile-img-4.jpg";
import Profile4 from "../../Assets/profile-img-3.jpg";
import { Footer } from "../../Containers";

const ClassDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const { img, name } = location?.state?.data;
  const user = JSON.parse(localStorage.getItem("user"));

  const history = useHistory();
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />
      <div className="my-3">
        <Heading text="E-CLASSES DETAILS" style={{ alignItems: "center" }} />
      </div>

      <section className="container">
        <div className={styles.details__wallpaper}>
          <img src={img} alt="detailsPic" />
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

        <section className={styles.details__schedule}>
          <div>
            <BiCalendar />
            <small>March 17 2022</small>
          </div>
          <div>
            <AiOutlineClockCircle />
            <small>March 17 2022</small>
          </div>
          <div>
            <MdLocationOn />
            <small>March 17 2022</small>
          </div>
        </section>

        <section
          className={`d-flex justify-content-center align-items-center ${styles.details__price}`}
        >
          <h6>Total Amount: </h6>
          <p>$12.00</p>
        </section>

        <div className="d-flex justify-content-center my-3">
          {user && user[0]?.userRole !== "facility" ? (
            <Button
              text="ENROLL COURSE"
              onClick={() => {
                history.push("/payment");
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

export default ClassDetails;
