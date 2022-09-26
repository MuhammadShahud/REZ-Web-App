import React, { useState } from "react";

import {
  Button,
  Heading,
  HistoryCard,
  InputField,
  RezNavbar,
} from "../../Components";
import styles from "./History.module.css";
import Order1 from "../../Assets/add-to-cart_01.jpg";
import Order2 from "../../Assets/add-to-cart_02.jpg";
import BookingHistoryCard from "../../Components/bookingHistoryCard/BookingHistoryCard";
import coustomerImg1 from "../../Assets/profile-img-1.jpg";
import coustomerImg2 from "../../Assets/profile-img-2.jpg";
import { Footer } from "../../Containers";

const History = () => {
  const [historyToggler, setHistoryToggler] = useState(true);

  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />
      <div className="my-3">
        <Heading text="HISTORY" style={{ alignItems: "center" }} />
      </div>

      <div className="d-flex justify-content-center">
        <Button
          text="ORDER HISTORY"
          style={
            historyToggler ? {} : { background: "transparent", color: "black" }
          }
          onClick={() => setHistoryToggler(true)}
        />
        <Button
          text="BOOKING HISTORY"
          style={
            historyToggler ? { background: "transparent", color: "black" } : {}
          }
          onClick={() => setHistoryToggler(false)}
        />
      </div>

      <section
        className={`container d-flex align-items-center flex-column my-3 ${styles.historyScreenWrapper}`}
      >
        {!historyToggler ? (
          <>
            {bookHistory.map((data, ind) => {
              return <BookingHistoryCard data={data} key={ind} />;
            })}
          </>
        ) : (
          <>
            {classHistory.map((data, ind) => {
              return <HistoryCard data={data} key={ind} isHistory={true}/>;
            })}
          </>
        )}
      </section>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

const classHistory = [
  {
    img: Order1,
    payment: "Card",
    date: "Jan 28 2022",
    shoppingAddress: "New York Street 16 ,NY 10204",
    name: "Order Number 1",
  },
  {
    img: Order2,
    payment: "Card",
    date: "Jan 28 2022",
    shoppingAddress: "New York Street 16 ,NY 10204",
    name: "Order Number 2",
  },
  {
    img: Order1,
    payment: "Card",
    date: "Jan 28 2022",
    shoppingAddress: "New York Street 16 ,NY 10204",
    name: "Order Number 3",
  },
  {
    img: Order2,
    payment: "Card",
    date: "Jan 28 2022",
    shoppingAddress: "New York Street 16 ,NY 10204",
    name: "Order Number 4",
  },
  {
    img: Order1,
    payment: "Card",
    date: "Jan 28 2022",
    shoppingAddress: "New York Street 16 ,NY 10204",
    name: "Order Number 5",
  },
  {
    img: Order2,
    payment: "Card",
    date: "Jan 28 2022",
    shoppingAddress: "New York Street 16 ,NY 10204",
    name: "Order Number 6",
  },
  {
    img: Order1,
    payment: "Card",
    date: "Jan 28 2022",
    shoppingAddress: "New York Street 16 ,NY 10204",
    name: "Order Number 7",
  },
];
const bookHistory = [
  {
    img: coustomerImg1,
    designation: "Football Trainer",
    date: "Jan 28 2022",
    name: "Jack",
    price: "$110",
  },
  {
    img: coustomerImg2,
    designation: "Football Trainer",
    date: "Jan 28 2022",
    name: "Laura",
    price: "$100",
  },
  {
    img: coustomerImg1,
    designation: "Football Trainer",
    date: "Jan 28 2022",
    name: "Jack",
    price: "$100",
  },
  {
    img: coustomerImg2,
    designation: "Football Trainer",
    date: "Jan 28 2022",
    name: "Laura",
    price: "$110",
  },
  {
    img: coustomerImg1,
    designation: "Football Trainer",
    date: "Jan 28 2022",
    name: "Jack",
    price: "$100",
  },
  {
    img: coustomerImg2,
    designation: "Football Trainer",
    date: "Jan 28 2022",
    name: "Laura",
    price: "$110",
  },
  {
    img: coustomerImg1,
    designation: "Football Trainer",
    date: "Jan 28 2022",
    name: "Jack",
    price: "$100",
  },
  {
    img: coustomerImg2,
    designation: "Football Trainer",
    date: "Jan 28 2022",
    name: "Laura",
    price: "$110",
  },
];
export default History;
