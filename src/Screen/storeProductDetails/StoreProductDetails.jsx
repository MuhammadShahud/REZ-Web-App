import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  Heading,
  ProductDetails,
  ReviewCard,
  RezNavbar,
  Button,
} from "../../Components";
import { Footer } from "../../Containers";
import styles from "./storeProductDetails.module.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./storeProductDetails.css";
import { Table } from "react-bootstrap";
import { Rate } from "antd";

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

const StoreProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [value, setValue] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const reviews = [
    {
      img: require("../../Assets/profile-img-1.jpg"),
      rate: 4,
      date: "04 Mar 2022",
      name: "Brandon Kelly",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    },
    {
      img: require("../../Assets/profile-img-2.jpg"),
      rate: 4,
      date: "04 Mar 2022",
      name: "Cristina Kelly",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    },
  ];
  const productDetail = {
    productname: "Flt-Emirates T-Shirt",
    images: {
      img1: require("../../Assets/store-product-details-img1.jpg"),
      img2: require("../../Assets/store-product-details-img2.jpg"),
      img3: require("../../Assets/store-product-details-img3.jpg"),
      img4: require("../../Assets/store-product-details-img4.jpg"),
      img5: require("../../Assets/store-product-details-img5.jpg"),
    },
    rate: 4,
    reviews: 18,
    price: 50,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    availability: "In Stock",
    size: ["Small", "Medium", "Large", "XL"],
    dimention: 'W 37.00 "D 38.00"H 37.00"',
    weight: "63 lbs. (27.5 kgs.)",
  };

  return (
    <>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading
          text={"STORE PRODUCT DETAILS"}
          style={{ alignItems: "center" }}
        />
      </div>
      <Container className={styles.details_container}>
        <ProductDetails productDetail={productDetail} />
        {/* <Box sx={{ width: "100%" }} className="store__tab__wrapper">
          <div className="store__tabs__wrapper">
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Description" />
                <Tab label="Information" />
                <Tab label="Reviews (1)" />
              </Tabs>
            </Box>
          </div>

          <TabPanel
            className="store__tab__content w-100"
            value={value}
            index={0}
          >
            <div>
              <h4 style={{ fontWeight: "bold" }}>Product Information</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h4 style={{ fontWeight: "bold", marginTop: "5%" }}>
                Material Used
              </h4>
              <p style={{ marginBottom: "5%" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </TabPanel>
          <TabPanel
            className="store__tab__content w-100 "
            value={value}
            index={1}
          >
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>Material</td>
                  <td colSpan={2}>Polyster fabric, oak feat </td>
                </tr>
                <tr>
                  <td>Maximun Load (kG)</td>
                  <td colSpan={2}>110 kg</td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td colSpan={2}>Zano</td>
                </tr>
                <tr>
                  <td>Made In</td>
                  <td colSpan={2}>Europe</td>
                </tr>
                <tr>
                  <td>Care</td>
                  <td colSpan={2}></td>
                </tr>
              </tbody>
            </Table>
          </TabPanel>
          <TabPanel
            className="store__tab__content w-100"
            value={value}
            index={2}
          >
            <ReviewCard data={reviews} />
            {user && user[0].userRole === "store" ? null : (
              <div className={styles.review_addreview_box}>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className={styles.review_addreview}>
                    <h4>Add Review</h4>
                  </div>
                  <div style={{ width: "100%" }}>
                    <hr className={styles.review_hr} />
                  </div>
                </div>
                <div className={styles.review_form}>
                  <form>
                    <div className={styles.review_input_container}>
                      <div style={{ width: "100%", marginTop: "3%" }}>
                        <input
                          className={styles.review_input}
                          type="text"
                          placeholder="Name"
                          name="name"
                        />
                      </div>
                      <div style={{ width: "100%", marginTop: "3%" }}>
                        <input
                          className={styles.review_input}
                          type="email"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: "3%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className={styles.review_addreview}>
                        <h4>Your Rating:</h4>
                      </div>
                      <div style={{ width: "100%" }}>
                        <Rate style={{ color: "var(--secondary-color)" }} />
                      </div>
                    </div>
                    <div style={{ marginTop: "3%" }}>
                      <textarea
                        id="subject"
                        name="subject"
                        placeholder="Your Review"
                        className={styles.review_input}
                        style={{
                          height: "150px",
                          width: "100%",
                          resize: "none",
                        }}
                      ></textarea>
                    </div>
                    <div style={{ marginTop: "3%" }}>
                      <Button text="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            )}
          </TabPanel>
        </Box> */}
      </Container>
      <Footer />
    </>
  );
};
export default StoreProductDetails;
