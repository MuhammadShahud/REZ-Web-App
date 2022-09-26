import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import styles from "./HistoryCard.module.css";
import { useHistory } from "react-router-dom";

const HistoryCard = ({ data, deleteBtn,isHistory }) => {
  const { img, name, duration, payment, shoppingAddress, date, category } =
    data;
  const history = useHistory();
  return (
    <section className={styles.classesHistory__wrapper}>
      <div
        onClick={() =>
          isHistory ? 
          null :
          history.push("/classesdetails", {
            data: data,
          }) 
        }
        className={styles.classesHistory}
      >
        <section className={styles.classesHistory__details}>
          <img src={img} alt="" />
          <div>
            <h5>{name}</h5>
            {date && <p>Date: {data.date}</p>}
            {duration && <p>Duration: {duration}</p>}
            {payment && <p>Payment: {payment}</p>}
            {shoppingAddress && <p> Shopping Address: {shoppingAddress} </p>}
            {category && <p>{category}</p>}
          </div>
        </section>
        <section className={styles.classesHistory__price}>
          <h5>$110</h5>
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

export default HistoryCard;
