import { GoCheck } from "react-icons/go";
import { Container } from "react-bootstrap";
import { Footer } from "../../Containers";
import { RezNavbar, Heading, Button } from "../../Components";
import styles from "./orderSuccessfull.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const OrderSuccessfull = () => {
  const history = useHistory();
  return (
    <>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div style={{ margin: "5% 0%" }}>
        <Container>
          <div className={styles.order__success}>
            <div className={styles.order__success__box}>
              <div className={styles.order__success__item}>
                <GoCheck className={styles.order__success__check} />
              </div>
              <div className={styles.order__success__item}>
                <h1>Order Sucessfull</h1>
              </div>
              <div className={styles.order__success__item}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className={styles.order__success__btn}>
                <Button
                  text="BACK TO HOME"
                  style={{ width: "100%", fontSize: "120%", height: "100%" }}
                  onClick={() => history.push("/")}
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

export default OrderSuccessfull;
