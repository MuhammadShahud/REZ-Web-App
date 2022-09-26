import styles from "./reviewCard.module.css";
import { Rate } from "antd";
const ReviewCard = ({ data }) => {
  return (
    <>
      {data.map((review) => (
        <div className={styles.review}>
          <div className={styles.review_left_Container}>
            <div className={styles.review_img_container}>
              <img
                className={styles.review_profile_img}
                src={review.img}
                alt=""
              />
            </div>
            <div>
              <Rate
                value={4}
                disabled
                style={{ color: "var(--secondary-color)" }}
                className={styles.review_rate}
              />
            </div>
          </div>
          <div className={styles.review_right_Container}>
            <h6 style={{ color: "var(--secondary-color)" }}>{review.date}</h6>
            <h5>{review.name}</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewCard;
