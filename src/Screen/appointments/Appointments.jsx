import { RezNavbar, Heading, Button } from "../../Components";
import { Container } from "react-bootstrap";
import { Footer } from "../../Containers";
import styles from "./appointment.module.css";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineEditLocationAlt } from "react-icons/md";
const Appointments = () => {
  const appointmentData = [
    {
      img: require("../../Assets/profile-img-4.jpg"),
      name: "John Dave",
      type: "Training",
    },
    {
      img: require("../../Assets/profile-img-4.jpg"),
      name: "John Dave",
      type: "Training",
    },
    {
      img: require("../../Assets/profile-img-4.jpg"),
      name: "John Dave",
      type: "Training",
    },
    {
      img: require("../../Assets/profile-img-4.jpg"),
      name: "John Dave",
      type: "Training",
    },
    {
      img: require("../../Assets/profile-img-4.jpg"),
      name: "John Dave",
      type: "Training",
    },
  ];
  return (
    <>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"APPOINTMENTS"} style={{ alignItems: "center" }} />
      </div>
      <div>
        <Container>
          <div>
            {appointmentData.map((appointment) => (
              <div className={styles.appointment_box}>
                <div className={styles.appointment_right_box}>
                  <div className={styles.appointment_img}>
                    <img src={appointment.img} alt="" />
                  </div>
                  <div className={styles.appointment_name}>
                    <h4>{appointment.name}</h4>
                    <p>{appointment.type}</p>
                  </div>
                </div>
                <div className={styles.appointment_icons_box}>
                  <div className={styles.appointment_icons}>
                    <FaRegEye size={20} />
                  </div>
                  <div className={styles.appointment_icons}>
                    <MdOutlineEditLocationAlt size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Appointments;
