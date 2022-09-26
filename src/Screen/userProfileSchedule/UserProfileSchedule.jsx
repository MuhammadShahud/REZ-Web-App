import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from "react-icons/ai";
import {
  Button,
  DropDown,
  Heading,
  InputField,
  ProfileCard,
  RezNavbar,
  UserPostsCard,
} from "../../Components";
import { Footer, ProfileScheduleTabs } from "../../Containers";
import styles from "./UserProfileSchedule.module.css";

import Event1 from "../../Assets/event-detail-img1.jpg";
import Event2 from "../../Assets/events_img_1.jpg";
import Event3 from "../../Assets/events_img_3.jpg";
import Event4 from "../../Assets/events_img_9.jpg";

import Traning1 from "../../Assets/profile-schedules-Lessons_img1.jpg";
import Traning2 from "../../Assets/profile-schedules-Lessons_img2.jpg";
import Traning3 from "../../Assets/profile-schedules-Lessons_img3.jpg";
import Traning4 from "../../Assets/profile-schedules-Lessons_img4.jpg";

import Eclasses1 from "../../Assets/e-classes-history_img_1.jpg";
import Eclasses2 from "../../Assets/e-classes-history_img_2.jpg";
import Eclasses3 from "../../Assets/e-classes-history_img_3.jpg";
import Eclasses4 from "../../Assets/e-classes-history_img_4.jpg";
import { useParams } from "react-router-dom";

const UserProfileSchedule = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [lessonToggler, setlessonToggler] = useState(false);
  const [clinicsToggler, setClinicsToggler] = useState(false);
  const [activityToggler, setActivityToggler] = useState(true);
  const [eventToggler, setEventToggler] = useState(false);
  const [productsToggler, setProductsToggler] = useState(false);

  const [dailyToggler, setDailyToggler] = useState(false);
  const [weeklyToggler, setWeeklyToggler] = useState(false);
  const [montlyToggler, setMontlyToggler] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <section className="my-3 ">
        <Heading
          text={
            id == 1 ? `COACH PROFILE` : id == 2 ? `FACILITY PROFILE` : "PROFILE"
          }
          style={{ alignItems: "center" }}
        />
      </section>

      <ProfileCard />
      <ProfileScheduleTabs
        lessonToggler={lessonToggler}
        clinicsToggler={clinicsToggler}
        trainingToggler={activityToggler}
        eventToggler={eventToggler}
        productsToggler={productsToggler}
        setlessonToggler={setlessonToggler}
        setClinicsToggler={setClinicsToggler}
        setTrainingToggler={setActivityToggler}
        setEventToggler={setEventToggler}
        setProductsToggler={setProductsToggler}
        userRole={id}
      />

      <FilterTabs
        dailyToggler={dailyToggler}
        setDailyToggler={setDailyToggler}
        weeklyToggler={weeklyToggler}
        setWeeklyToggler={setWeeklyToggler}
        montlyToggler={montlyToggler}
        setMontlyToggler={setMontlyToggler}
        id={id}
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
      />

      {eventToggler && <EventTab />}
      {lessonToggler && <LessonsTab />}
      {productsToggler && <ProductsTab />}
      {activityToggler && <TrainingTab />}
      {clinicsToggler && <ClinicTab />}
      {id == 2 ? 
      <FilterModal
        dailyToggler={dailyToggler}
        setDailyToggler={setDailyToggler}
        weeklyToggler={weeklyToggler}
        setWeeklyToggler={setWeeklyToggler}
        montlyToggler={montlyToggler}
        setMontlyToggler={setMontlyToggler}
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
      />: null
}
      <div className="my-3">
        <Footer />
      </div>
    </div>
  );
};

const EventTab = () => {
  return (
    <>
      <UserPostsCard dataObj={eventObj} button={true} />
      <div className="d-flex justify-content-center">
        <Button text="LOAD MORE" />
      </div>
    </>
  );
};

const LessonsTab = () => {
  return (
    <>
      <UserPostsCard dataObj={trainingData} />
      <div className="d-flex justify-content-center">
        <Button text="LOAD MORE" />
      </div>
    </>
  );
};
const TrainingTab = () => {
  return (
    <>
      <UserPostsCard dataObj={trainingData} />
      <div className="d-flex justify-content-center">
        <Button text="LOAD MORE" />
      </div>
    </>
  );
};

const ProductsTab = () => {
  return (
    <>
      <UserPostsCard dataObj={productData} navigate="/productdetails"/>
      <div className="d-flex justify-content-center">
        <Button text="LOAD MORE" />
      </div>
    </>
  );
};

const ClinicTab = () => {
  return (
    <>
      <UserPostsCard dataObj={clinicData} />
      <div className="d-flex justify-content-center">
        <Button text="LOAD MORE" />
      </div>
    </>
  );
};

const FilterTabs = ({
  dailyToggler,
  setDailyToggler,
  weeklyToggler,
  setWeeklyToggler,
  montlyToggler,
  setMontlyToggler,
  id,
  handleShow,
}) => {
 
  return (
    <div className={`mx-auto d-flex   ${styles.profile__tabs}`}>
      {id == 2 ?
        <div  className={styles.profile__filterBtn}>
        <Button text={'Filter'} onClick={handleShow} style={{width: "50%"}} />
        </div> :
        <>
          <Button
            text="DAILY"
            style={
              dailyToggler
                ? {}
                : { background: "var( --profile-btn)", color: "black" }
            }
            onClick={() => {
              setDailyToggler(true);
              setWeeklyToggler(false);
              setMontlyToggler(false);
            }}
          />
          <Button
            text="WEEKLY"
            style={
              weeklyToggler
                ? {}
                : { background: "var( --profile-btn)", color: "black" }
            }
            onClick={() => {
              setDailyToggler(false);
              setWeeklyToggler(true);
              setMontlyToggler(false);
            }}
          />
          <Button
            text="MONTHLY"
            style={
              montlyToggler
                ? {}
                : { background: "var( --profile-btn)", color: "black" }
            }
            onClick={() => {
              setDailyToggler(false);
              setWeeklyToggler(false);
              setMontlyToggler(true);
            }}

          />

          <div className="w-100 d-flex">
            <InputField type="date" />
          </div>
        </>
      }
    </div>
  );
};
const FilterModal = ({
  dailyToggler,
  setDailyToggler,
  weeklyToggler,
  setWeeklyToggler,
  montlyToggler,
  setMontlyToggler,
  handleClose,
  handleShow,
  show,

}) => {
  const options = ["Select Room", "Summer footbal league", "Gymnasium", "Golfs Room", "Gollf Room1"];
  
  return (
    <>

      <Modal show={show}>
        <Modal.Body>
          <div>
            <div className={styles.profile__top}>
              <AiOutlineClose style={{ fontSize: '20px', fontWeight:"bold" }} onClick={handleClose} />
            </div>
            <div className={`mx-auto d-flex   ${styles.profile__tabs}`}>
            <Button
            text="DAILY"
            style={
              dailyToggler
                ? {}
                : { background: "var( --profile-btn)", color: "black" }
            }
            onClick={() => {
              setDailyToggler(true);
              setWeeklyToggler(false);
              setMontlyToggler(false);
            }}
          />
              <Button
                text="WEEKLY"
                style={
                  weeklyToggler
                    ? {}
                    : { background: "var( --profile-btn)", color: "black" }
                }
                onClick={() => {
                  setDailyToggler(false);
                  setWeeklyToggler(true);
                  setMontlyToggler(false);
                }}
              />
              <Button
            text="MONTHLY"
            style={
              montlyToggler
                ? {}
                : { background: "var( --profile-btn)", color: "black" }
            }
            onClick={() => {
              setDailyToggler(false);
              setWeeklyToggler(false);
              setMontlyToggler(true);
            }}

          />

            </div>
            <div>
              <span>
              <InputField type={"Date"}  style={{ margin: "10px 0" }} />
              </span>
              {/* <span>
              <DropDown options={options} style={{margin: "10px 0"}}/>
              </span> */}
            </div>
            <div className={styles.profile__btn}>
              <Button text={"Apply Filter"} onClick={handleClose}/>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
};

const productData = [
  {
    productId: "1",
    image: require("../../Assets/add-to-cart_01.jpg"),
    name: "Fly-Emirates T-Shirt",
    price: "12",
    rate: 4,
  },
  {
    productId: "1",
    image: require("../../Assets/store_shirts_img1.jpg"),
    name: "Fly-Emirates T-Shirt",
    price: "12",
    rate: 4,
  },
  {
    productId: "1",
    image: require("../../Assets/store_shirts_img3.jpg"),
    name: "Fly-Emirates T-Shirt",
    price: "12",
    rate: 4,
  },
];

const eventObj = [
  {
    image: Event1,
    name: "Event Name",
    date: "September 15'2021",
    time: "08:00-09:00",
    city: "New York",
  },
  {
    image: Event2,
    name: "Football Club Event",
    date: "September 18'2021",
    time: "09:00-10:00",
    city: "New York",
  },
  {
    image: Event3,
    name: "Event Name",
    date: "September 19'2021",
    time: "09:00-10:00",
    city: "New York",
  },
  {
    image: Event4,
    name: "Football Club Event",
    date: "September 22'2021",
    time: "08:00-09:00",
    city: "New York",
  },
  {
    image: Event1,
    name: "Event Name",
    date: "September 29'2021",
    time: "09:00-10:00",
    city: "New York",
  },
  {
    image: Event2,
    name: "Football Club Event",
    date: "September 01'2021",
    time: "08:00-09:00",
    city: "New York",
  },
  {
    image: Event3,
    name: "Event Name",
    date: "September 05'2021",
    time: "09:00-10:00",
    city: "New York",
  },
  {
    image: Event4,
    name: "Football Club Event",
    date: "September 09'2021",
    time: "09:00-11:00",
    city: "New York",
  },
];

const trainingData = [
  {
    image: Traning1,
    name: "Warm Up",
    price: "12:00",
    time: "01 hr",
  },
  {
    image: Traning2,
    name: "Ball Games",
    price: "12:00",
    time: "01 hr",
  },
  {
    image: Traning3,
    name: "Football Goal Keeper",
    price: "12:00",
    time: "01 hr",
  },
  {
    image: Traning4,
    name: "Core Training",
    price: "12:00",
    time: "01 hr",
  },
  {
    image: Traning1,
    name: "Warm Up",
    price: "12:00",
    time: "01 hr",
  },
  {
    image: Traning2,
    name: "Ball Games",
    price: "12:00",
    time: "01 hr",
  },
];

const clinicData = [
  {
    image: Traning1,
    name: "Run-Related Injuries ",
    price: "12:00",
    time: "01 hr",
  },
  {
    image: Traning2,
    name: "Training-Related Injuries",
    price: "12:00",
    time: "01 hr",
  },
  {
    image: Traning3,
    name: "Sport Massage",
    price: "12:00",
    time: "01 hr",
  },
  {
    image: Traning4,
    name: "Core Training",
    price: "12:00",
    time: "01 hr",
  },
  {
    image: Traning1,
    name: "Persistent Pain",
    price: "12:00",
    time: "01 hr",
  },
  {
    image: Traning2,
    name: "Post Operative",
    price: "12:00",
    time: "01 hr",
  },
];

const productsDataObj = [
  {
    image: Eclasses1,
    name: "Gym Session 01",
    price: "12",
    date: "September 15'2021",
  },
  {
    image: Eclasses2,
    name: "Stamina Lessons",
    price: "18",
    date: "September 18'2021",
  },
  {
    image: Eclasses3,
    name: "Online Classes",
    price: "22",
    date: "September 19'2021",
  },
  {
    image: Eclasses4,
    name: "Gym Session 02",
    price: "50",
    date: "September 22'2021",
  },
  {
    image: Eclasses1,
    name: "Gym Session 01",
    price: "55",
    date: "September 29'2021",
  },
  {
    image: Eclasses2,
    name: "Stamina Lessons",
    price: "13",
    date: "September 01'2021",
  },
  {
    image: Eclasses3,
    name: "Online Classes",
    price: "88",
    date: "September 05'2021",
  },
  {
    image: Eclasses4,
    name: "Gym Session 02",
    price: "54",
    date: "September 09'2021",
  },
];
export default UserProfileSchedule;
