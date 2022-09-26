import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { WiTime12 } from "react-icons/wi";
import { Container } from "react-bootstrap";

import { RezNavbar, Heading, Button } from "../../Components";
import { Footer } from "../../Containers";
import styles from "./appointment.module.css";

const Appointment = () => {
  const appointmentData = {
    img: require("../../Assets/profile-img.jpg"),
    name: "Stacy Doe",
    details: `Contrary to popular belief, Lorem Ipsum is not simply random text.
     It has roots in a piece of classical Latin literature from 45 BC, making it
over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
College in Virginia, looked up one of the more obscure Latin words, consectetur,
from a Lorem Ipsum passage, and going through the cites of the word in classical
literature, discovered the undoubtable source. Lorem Ipsum comes from sections
1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
 by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
 very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
 dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
by Cicero are also reproduced in their exact original form, accompanied by English
versions from the 1914 translation by H. Rackham.`,
    date: "march 17 2022",
    timeFrom: "8:00",
    timeTo: "9:00 PM",
    duration: "01 hour",
    note: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry.It was popularised in the
      1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker 
      including versions of Lorem Ipsum`,
  };
  return (
    <>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"APPOINTMENTS"} style={{ alignItems: "center" }} />
      </div>
      <div style={{ marginTop: "5%" }}>
        <Container>
          <div className={styles.appointment_box}>
            <div className={styles.appointment_img_box}>
              <img
                className={styles.appointment_img}
                src={appointmentData.img}
                alt=""
              />
            </div>
            <div>
              <h1 style={{ margin: "20% 0% 20% 0%", fontWeight: "bold" }}>
                {appointmentData.name}
              </h1>
            </div>
            <div>
              <p style={{ fontSize: "1.1rem" }}>{appointmentData.details}</p>
              <p style={{ fontSize: "1.1rem" }}>{appointmentData.details}</p>
            </div>
            <div className={styles.appointment_date_time_box}>
              <div style={{ display: "flex" }}>
                <div style={{ paddingRight: "5px" }}>
                  <FaRegCalendarAlt size={20} />
                </div>
                <div className={styles.appointmen_text}>
                  <p>{appointmentData.date}</p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ paddingRight: "5px" }}>
                  <HiOutlineClock size={20} />
                </div>
                <div className={styles.appointmen_text}>
                  <p>
                    {appointmentData.timeFrom}-{appointmentData.timeTo}
                  </p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ paddingRight: "5px" }}>
                  <WiTime12 size={20} />
                </div>
                <div className={styles.appointmen_text}>
                  <p>{appointmentData.duration}</p>
                </div>
              </div>
            </div>
            <div className={styles.appointment_buttons_box}>
              <div className={styles.appointment_buttons}>
                <Button
                  text="ACCEPT"
                  style={{ width: "100%", height: "100%", fontSize: "140%" }}
                />
              </div>
              <div className={styles.appointment_buttons}>
                <Button
                  text="REJECT"
                  style={{
                    width: "100%",
                    height: "100%",
                    fontSize: "140%",
                    background: "var(--secondary-color)",
                  }}
                />
              </div>
            </div>
            <div className={styles.appointment_note_box}>
              <div style={{ width: "80%" }}>
                <h2 style={{ fontWeight: "bold" }}>Note</h2>
                <p style={{ fontSize: "1.1rem" }}>{appointmentData.note}</p>
              </div>
              <div>
                <Button
                  text="ACCEPT"
                  style={{
                    width: "160px",
                    height: "40px",
                    fontSize: "1.1rem",
                    background: "var(--secondary-color)",
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
