import React from "react";
import {
  Heading,
  RezNavbar,
  PostStatus,
  PostCard,
  PostEvent,
  Button,
} from "../../Components";
import {
  BottomSilder,
  ClubBanner,
  Coaches,
  Facilities,
  Footer,
  Header,
  Highlights,
  JoinForm,
  MemberShip,
  Store,
} from "../../Containers";
import styles from "./addToCart.module.css";
import profileImg from "../../Assets/profile-img.jpg";
import shirt from "../../Assets/add-to-cart_01.jpg";
import cap from "../../Assets/add-to-cart_02.jpg";
import AddToCartItem from "../../Components/addToCartItem/addToCartItem";
import { useHistory } from "react-router-dom";

const AddToCart = () => {
  const history = useHistory();

  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <Heading
        text={"Add To Cart"}
        style={{ alignItems: "center", margin: "40px 0" }}
      />
      <AddToCartItem
        productImg={shirt}
        productName={"Order Number 1"}
        date={"Jan 28 2022"}
        payment={"Card"}
        address={"New York Street 16, NY 10204"}
        price={"110"}
      />

      <AddToCartItem
        productImg={cap}
        productName={"Order Number 2"}
        date={"Jan 28 2022"}
        payment={"Card"}
        address={"New York Street 16, NY 10204"}
        price={"110"}
      />

      <AddToCartItem
        productImg={shirt}
        productName={"Order Number 3"}
        date={"Jan 28 2022"}
        payment={"Card"}
        address={"New York Street 16, NY 10204"}
        price={"110"}
      />

      <AddToCartItem
        productImg={cap}
        productName={"Order Number 4"}
        date={"Jan 28 2022"}
        payment={"Card"}
        address={"New York Street 16, NY 10204"}
        price={"110"}
      />
      <div className={styles.addToCart__buttonCenter}>
        <Button
          text="Payment"
          onClick={() => {
            history.push("/payment");
          }}
          style={{ alignItems: "center" }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default AddToCart;
