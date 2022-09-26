import React from "react";

import {
  Button,
  Heading,
  HistoryCard,
  InputField,
  RezNavbar,
} from "../../Components";
import OrderImg1 from "../../Assets/add-to-cart_01.jpg";
import OrderImg2 from "../../Assets/store_shirts_img3.jpg";
import OrderImg3 from "../../Assets/store_shirts_img1.jpg";
import OrderImg4 from "../../Assets/store_shirts_img2.jpg";
import styles from "./OrderList.module.css";
import { Footer } from "../../Containers";

const OrderList = () => {
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <section className="my-3 ">
        <Heading text="ORDER LIST" style={{ alignItems: "center" }} />
      </section>

      <div className={` d-flex ${styles.orderlist__searchBox}`}>
        <div className="w-100 mx-2">
          <InputField
            label="From"
            style={{
              background: "transparent",
              border: "1px solid var(--light-grey)",
            }}
            placeholder="Date"
          />
        </div>
        <div className="w-100 mx-2">
          <InputField
            placeholder="Date"
            style={{
              background: "transparent",
              border: "1px solid var(--light-grey)",
            }}
            label="to"
          />
        </div>
      </div>
      <section
        className={` d-flex px-2 my-3 flex-column align-items-center ${styles.orderlist__orderWrapper}`}
      >
        {orderListObj.map((val, ind) => {
          return <HistoryCard key={ind} data={val} />;
        })}
      </section>

      <section className="d-flex justify-content-center my-3">
        <Button text="LOAD MORE" />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

const orderListObj = [
  {
    img: OrderImg1,
    name: "Fly-Emirates T-Shirt",
    category: "shirts",
    price: "12",
  },
  {
    img: OrderImg2,
    name: "Fly-Emirates T-Shirt",
    category: "shirts",
    price: "12",
  },
  {
    img: OrderImg3,
    name: "Fly-Emirates T-Shirt",
    category: "shirts",
    price: "12",
  },
  {
    img: OrderImg4,
    name: "Fly-Emirates T-Shirt",
    category: "shirts",
    price: "12",
  },
  {
    img: OrderImg1,
    name: "Fly-Emirates T-Shirt",
    category: "shirts",
    price: "12",
  },
  {
    img: OrderImg2,
    name: "Fly-Emirates T-Shirt",
    category: "shirts",
    price: "12",
  },
  {
    img: OrderImg3,
    name: "Fly-Emirates T-Shirt",
    category: "shirts",
    price: "12",
  },
  {
    img: OrderImg4,
    name: "Fly-Emirates T-Shirt",
    category: "shirts",
    price: "12",
  },
];

export default OrderList;
