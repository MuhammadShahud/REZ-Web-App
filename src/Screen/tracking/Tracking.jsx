import { Heading, RezNavbar, Button } from "../../Components";
import classes from "./Tracking.module.css";
import { Footer } from "../../Containers";
import { Container } from "react-bootstrap";
import coachImg from "../../Assets/profile-img-1.jpg";
import { useHistory } from "react-router-dom";
const Tracking = () => {
    const history = useHistory();
    return (
        <div>
            <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
            <div className="my-3">
                <Heading text={"TRACKING"} style={{ alignItems: "center" }} />
            </div>
            <div className={classes.tracking__map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13004069.896900944!2d-104.65611544442767!3d37.27565371492453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1655988679610!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                ></iframe>
            </div>
            <div className={classes.tracking__container}>
                <Container>
                    <div className={classes.tracking__info}>
                        <div>
                            <img src={coachImg} />
                        </div>
                        <div className={classes.tracking__detail}>
                            <h6>John Dave</h6>
                            <span>Football Training</span>
                            <span>Lorem Ispansum net</span>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={classes.tracking__btn}>
                <Button text={"Chat"} onClick={() => { history.push("./chat") }} />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};
export default Tracking;
