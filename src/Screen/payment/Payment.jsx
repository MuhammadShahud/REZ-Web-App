import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Button, Heading, RezNavbar } from "../../Components";
import { Footer } from "../../Containers";
import styles from "./Payment.module.css";
import "./payment.css";
import masterCard from "../../Assets/master-card-img.jpg";
import visaCard from "../../Assets/master-card-img-02.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const Payment = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"PAYMENT"} style={{ alignItems: "center" }} />
      </div>
      <div className="my-3">
        <Container>
          <Box sx={{ width: "100%" }} className="leagues__tab__wrapper">
            <div className="payment__tabs__wrapper">
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Payment" />
                  <Tab label="Payment History" />
                </Tabs>
              </Box>
            </div>

            <TabPanel
              className="payment__tab__content w-100"
              value={value}
              index={0}
            >
              <section className={`${styles.payment__wrapper}`}>
                <h6>Credit or Debit Card</h6>
                <CardDetails number="**************" img={masterCard} />
                <CardDetails number="**************" img={visaCard} />

                <div className={`${styles.payment__add_card}`}>
                  <button
                    onClick={() => {
                      history.push("/addcard");
                    }}
                  >
                    <AiOutlinePlusCircle /> Add New Card
                  </button>
                </div>
                <Button text="Pay Now" style={{ color: "white" }} onClick={()=> {history.goBack()}}/>
              </section>
            </TabPanel>
            <TabPanel
              className="payment__tab__content w-100 "
              value={value}
              index={1}
            >
              <PaymentHistory />
            </TabPanel>
          </Box>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

const CardDetails = ({ number, img }) => {
  return (
    <>
      <div className={`${styles.cardDetails}`}>
        <div>
          <img src={img} alt="" />
          <small>{number}</small>
        </div>
        <div>
          <BsFillPencilFill />
          <MdOutlineDelete />
        </div>
      </div>
    </>
  );
};

const PaymentHistory = () => {
  const paymentHistoryData = [
    {
      img: require("../../Assets/store-product-details-img1.jpg"),
      name: "Fly-Emirates-shirt",
      date: "sept 15' 2021",
      recipent: "Rez.com",
      price: 12,
    },
    {
      img: require("../../Assets/store_shirts_img2.jpg"),
      name: "Fly-Emirates-shirt",
      date: "sept 15' 2021",
      recipent: "Rez.com",
      price: 12,
    },
    {
      img: require("../../Assets/store_hats_img2.jpg"),
      name: "Sport Cap",
      date: "sept 15' 2021",
      recipent: "Rez.com",
      price: 12,
    },
  ];

  return (
    <>
      <div>
        <div className={styles.payment_main_container}>
          {paymentHistoryData.map((payment) => (
            <div className={styles.payment_box}>
              <div className={styles.payment_right_box}>
                <div className={styles.payment_img}>
                  <img src={payment.img} alt="" />
                </div>
                <div className={styles.payment_name}>
                  <h5>{payment.name}</h5>
                  <p>Date: {payment.date}</p>
                  <p>Recipent: {payment.recipent}</p>
                </div>
              </div>
              <div className={styles.payment_icons_box}>
                <div className={styles.payment_icons}>
                  <h5>${payment.price}</h5>
                </div>
                {/* <div className={styles.payment_icons}>
                  <RiDeleteBin6Line size={25} />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Payment;
