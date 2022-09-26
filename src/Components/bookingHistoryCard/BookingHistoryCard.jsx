import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Button from "../button/Button";
import styles from "./BookingHistoryCard.module.css";

const BookingHistoryCard = ({ data, deleteBtn }) => {
  const { img, name, date, designation , price } =
    data;

  return (
    <section className={styles.BookingHistory__wrapper}>
      <div className={styles.BookingHistory}>
        <section className={styles.BookingHistory__details}>
          <img src={img} alt="" />
          <div>
            <h5>{name}</h5>
            {date && <p>{data.designation}</p>}
            {date && <p>Date: {data.date}</p>}
          </div>
        </section>
        <section className={styles.BookingHistory__price}>
          <h5>{data.price}</h5>
          {/* <Button text="REBOOK"/> */}
        </section>
      </div>
      {deleteBtn && (
        <section className={styles.deleteButton}>
          <RiDeleteBin6Fill size={20} color="white" />
        </section>
      )}
                  
    </section>
    
  );
};

export default BookingHistoryCard;
