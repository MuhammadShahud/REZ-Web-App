import React from "react";

import { Button, Heading, HistoryCard, RezNavbar } from "../../Components";
import Classes1 from "../../Assets/e-classes-history_img_4.jpg";
import Classes2 from "../../Assets/e-classes-history_img_1.jpg";
import Classes3 from "../../Assets/e-classes-history_img_3.jpg";
import Classes4 from "../../Assets/e-classes-history_img_2.jpg";
import { Footer } from "../../Containers";

const MyProduct = () => {
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />
      <div className="my-3">
        <Heading text="MY PRODUCTS" style={{ alignItems: "center" }} />
      </div>
      <div className="container d-flex align-items-center flex-column">
        {classHistory.map((data, index) => {
          return <HistoryCard deleteBtn={true} data={data} key={index} />;
        })}
        <div className="my-5">
          <Button text="LOAD MORE" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const classHistory = [
  {
    img: Classes1,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
  },
  {
    img: Classes2,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
  },
  {
    img: Classes3,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
  },
  {
    img: Classes4,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
  },
  {
    img: Classes1,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
  },
  {
    img: Classes2,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
  },
  {
    img: Classes3,
    name: "Emailaddress@gmail.com",
    date: "Jan 28 2022",
  },
];
export default MyProduct;
