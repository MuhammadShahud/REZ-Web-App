import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from "react-icons/ai";
import Button from '../button/Button';
import classes from "./ScheduleModal.module.css";
import ScheduleDetailImg from "../../Assets/schedule_img_5.jpg";
import { useHistory } from "react-router-dom";
const ScheduleModal = ({ show, onShow, onHide }) => {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));
    const history = useHistory();

    return (
        <>
            <Modal show={show} onShow={onShow} onHide={onHide} dialogClassName={classes.scheduleModal__myModal}>
                <Modal.Body>
                    <div className={classes.scheduleModal__top}>
                        <h5>
                            Schedule Detail
                        </h5>
                        <div>
                            <AiOutlineClose onClick={onHide} style={{ fontSize: "30px", cursor: "pointer" }} />
                        </div>
                    </div>
                    <div className={classes.scheduleModal__body}>
                        <div className={classes.scheduleModal__bodyColLeft}>
                            <img src={ScheduleDetailImg} alt="" />
                        </div>
                        <div className={classes.scheduleModal__bodyColRight}>
                            <div>
                                <h5>Football Training</h5>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut saepe culpa, autem nesciunt ipsa delectus at iusto eveniet facilis sit numquam, nemo eligendi incidunt nostrum quibusdam, inventore reiciendis sed doloribus?</p>
                            </div>
                            <div className={classes.scheduleModal__day}>
                                <div className={classes.scheduleModal__details}>
                                    <div className={classes.scheduleModal__dateTime}>Date: 31-05-2022</div>
                                    <div>Location: New York</div>
                                </div>
                                <div className={classes.scheduleModal__details}>
                                    <div className={classes.scheduleModal__dateTime}>Time:8:00 - 9:00AM</div>
                                    <div>Privacy: Public</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.scheduleModal__btns}>
                        {auth[0].userRole === "parent" || auth[0].userRole === "player" || auth[0].userRole === "staff" ?
                            <Button text="TRACKING" onClick={() => { history.push("./tracking") }}></Button> : null}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ScheduleModal;