import React, { useEffect, useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useLocation, useHistory } from "react-router-dom";

import { Button, Heading, RezNavbar } from "../../Components";
import Details from "../../Assets/e-classes-details_img.jpg";
import styles from "./EventDetails.module.css";
import EventDetail from "../../Assets/event-details_img.jpg";
import { Footer } from "../../Containers";

const EventDetails = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();

  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <div className="my-3">
        <Heading text="EVENT DETAILS" style={{ alignItems: "center" }} />
      </div>

      <section className="container">
        <div className={styles.details__wallpaper}>
          <img src={EventDetail} alt="detailsPic" />
        </div>
        <div className={styles.details__content}>
          <h4>UEFA Champions League</h4>
          <h6>Event Details</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            error consectetur blanditiis laboriosam, quibusdam sequi aliquam
            iure repudiandae hic doloribus rem eius architecto saepe accusantium
            iusto tempore porro quos cumque libero officia inventore. Beatae
            nostrum, delectus mollitia architecto facilis in explicabo officia
            voluptate, aperiam nesciunt culpa laborum nisi ipsum inventore.
          </p>
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
            <small>New York, U</small>
          </div>
        </section>
        {auth && auth[0]?.user && auth[0].userRole === "facility" ? null : (
          <>
            <div className="d-flex justify-content-center my-5">
              <Button
                text="JOIN"
                onClick={() => {
                  history.push("/payment");
                }}
              />
            </div>
          </>
        )}
      </section>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

// const participantsProfile = [
//   {
//     img: Profile1,
//   },
//   {
//     img: Profile2,
//   },
//   {
//     img: Profile4,
//   },
//   {
//     img: Profile1,
//   },
//   {
//     img: Profile3,
//   },
//   {
//     img: Profile1,
//   },
// ];

export default EventDetails;
