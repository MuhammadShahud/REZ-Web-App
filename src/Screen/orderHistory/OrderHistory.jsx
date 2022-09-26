import React, { useState } from "react";

import {
  Button,
  Heading,
  HistoryCard,
  InputField,
  RezNavbar,
} from "../../Components";
import styles from "./orderHistory.module.css";
import Order1 from "../../Assets/add-to-cart_01.jpg";
import Order2 from "../../Assets/add-to-cart_02.jpg";
import { Footer } from "../../Containers";

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


const OrderHistory = () => {
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />
      <div className="my-3">
        <Heading text="ORDER HISTORY" style={{ alignItems: "center" }} />
      </div>
      <div className="container d-flex align-items-center flex-column my-3">
        <div className="d-flex">
          <div className="mx-2">
            <InputField type={"date"} label={"From"} />
          </div>
          <div className="mx-2">
            <InputField type={"date"} label={"To"} />
          </div>
        </div>
        {classHistory.map((data, ind) => {
          return <HistoryCard data={data} key={ind} isHistory={true} />;
        })}
      </div>
      <Footer/>
    </div>

  );
};


export default OrderHistory;
