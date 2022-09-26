import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "../button/Button";

import styles from "./UserPostsCard.module.css";

const UserPostsCard = ({ dataObj, button,navigate }) => {
  const history = useHistory();

  return (
    <section className={`${styles.training} container my-5 `}>
      <Row className="m-0">
        {dataObj.map((data, index) => {
          return (
            <Col
              md={6}
              onClick={() => {
                history.push(navigate ? navigate : '/coachdetails' , {
                  data: {
                    image: data.image,
                    name: data.name,
                  },
                });
              }}
              key={index}
            >
              <div className={`${styles.trainingCard}`}>
                <div className={`${styles.trainingCard__img}`}>
                  <img src={data.image} alt="" />
                </div>
                <div className={`${styles.trainingCard__details}`}>
                  <h4>{data.name}</h4>
                  {data.price && <p>Price: ${data.price}</p>}
                  {data.date && <p>Date: {data.date}</p>}
                  {data.time && <p>Time: {data.time}</p>}
                  {data.city && <p>City: {data.city}</p>}
                  {button && <Button text="ENROLL" />}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default UserPostsCard;
