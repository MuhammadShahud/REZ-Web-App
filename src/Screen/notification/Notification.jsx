import { RezNavbar, Heading, Button } from "../../Components";
import { Container } from "react-bootstrap";
import { Footer } from "../../Containers";
import styles from "./notification.module.css";
const Notification = () => {
  const notificatinData = [
    {
      img: require("../../Assets/profile-img-3.jpg"),
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
    },
    {
      img: require("../../Assets/profile-img-3.jpg"),
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
    },
    {
      img: require("../../Assets/profile-img-3.jpg"),
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
    },
    {
      img: require("../../Assets/profile-img-3.jpg"),
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
    },
    {
      img: require("../../Assets/profile-img-3.jpg"),
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
    },
    {
      img: require("../../Assets/profile-img-3.jpg"),
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
    },
    {
      img: require("../../Assets/profile-img-3.jpg"),
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
    },
    {
      img: require("../../Assets/profile-img-3.jpg"),
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
    },
  ];
  return (
    <>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"NOTIFICATION"} style={{ alignItems: "center" }} />
      </div>
      <Container className={styles.storecontainer}>
        <div
          style={{
            diplay: "block",
            marginBottom: "4%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {notificatinData.map((notification, index) => (
            <>
              <div className={`${styles.notification_container}`} key={index}>
                <div
                  className={`${styles.notification_img_container} ${
                    index % 2 === 0 ? styles.blue_border : styles.gray_border
                  }`}
                >
                  <img
                    src={notification.img}
                    alt=""
                    className={styles.notification_img}
                  />
                </div>
                <div>
                  <p className={styles.notification_text}>
                    {notification.text}
                  </p>
                </div>
              </div>
              <div className="d-flex align-item-center justify-content-center">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "35%",
                  }}
                >
                  <div style={{ width: "45%" }}>
                    <Button text="Accept" style={{ width: "100%" }} />
                  </div>
                  <div style={{ width: "45%" }}>
                    <Button
                      text="Reject"
                      style={{
                        width: "100%",
                        background: "var(--secondary-color)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
          <div style={{ width: "100%" }}>
            <div className={styles.notification_showmore}>
              <Button text="Load More"></Button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Notification;
