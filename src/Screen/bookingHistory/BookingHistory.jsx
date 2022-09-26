import React, { useState } from "react";

import {
  Button,
  Heading,
  HistoryCard,
  InputField,
  RezNavbar,
} from "../../Components";
import Order1 from "../../Assets/add-to-cart_01.jpg";
import Order2 from "../../Assets/add-to-cart_02.jpg";
import BookingHistoryCard from "../../Components/bookingHistoryCard/BookingHistoryCard";
import coustomerImg1 from "../../Assets/profile-img-1.jpg";
import coustomerImg2 from "../../Assets/profile-img-2.jpg";
import { Footer } from "../../Containers";

const BookingHistory = () => {
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />
      <div className="my-3">
        <Heading text="BOOKING HISTORY" style={{ alignItems: "center" }} />
      </div>
      <section className="container d-flex align-items-center flex-column my-3">
        <div className="d-flex">
          <div className="mx-2">
            <InputField type={"date"} label={"From"} />
          </div>
          <div className="mx-2">
            <InputField type={"date"} label={"To"} />
          </div>
        </div>
        {bookHistory.map((data, ind) => {
          return <BookingHistoryCard data={data} key={ind} />;
        })}
      </section>
      <Footer/>
    </div>
  );
};

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
export default BookingHistory;
