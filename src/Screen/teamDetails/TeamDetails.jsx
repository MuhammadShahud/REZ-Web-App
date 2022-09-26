import React, { useEffect } from "react";
import { Button, Heading, RezNavbar } from "../../Components";
import styles from "./TeamDetails.module.css";
import TeamDetail from "../../Assets/teams-details_img.jpg";
import { Footer } from "../../Containers";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TeamDetails = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const requestHandler = () => {
    toastSuccess();
  };

  const toastSuccess = () => {
    toast.success("Request Submitted", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <div className="my-3">
        <Heading text="TEAMS DETAILS" style={{ alignItems: "center" }} />
      </div>

      <section className="container">
        <div className={styles.teamDetails__wallpaper}>
          <img src={TeamDetail} alt="detailsPic" />
        </div>
        <div className={styles.teamDetails__content}>
          <h4>Football Club</h4>
          <h6>Football Team</h6>
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

        <section className={styles.teamDetails__schedule}>
          <div className={styles.teamDetails__botDetails}>
            <span>Number of Playes:15</span>
          </div>
          <div className={styles.teamDetails__botDetails}>
            <span>Request:07</span>
          </div>
          <div className={styles.teamDetails__botDetails}>
            <span>Level:02</span>
          </div>
        </section>
        <div className="d-flex w-100 align-item-center justify-content-center">
          <div className="mx-4">
            <Button
              text="View Profile"
              onClick={() => history.push("/userprofile/1")}
            />
          </div>
          <div>
            <Button text="View Roster" onClick={() => history.push("/teamroster")}/>
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <Button
            text="REQUEST"
            onClick={() => {
              requestHandler();
            }}
          />
        </div>
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

export default TeamDetails;
