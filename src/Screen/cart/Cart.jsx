import { Container } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { RezNavbar, Heading, Button, InputField } from "../../Components";
import { Footer } from "../../Containers";
import styles from "./cart.module.css";

const Cart = () => {
  const history = useHistory();
  const cartData = [
    {
      img: require("../../Assets/store-product-details-img1.jpg"),
      name: "Fly-Emirates-shirt",
      quantity: 1,
      size: "large",
      price: 12,
    },
    {
      img: require("../../Assets/store_shirts_img2.jpg"),
      name: "Fly-Emirates-shirt",
      quantity: 1,
      size: "large",
      price: 12,
    },
    {
      img: require("../../Assets/store_hats_img2.jpg"),
      name: "Sport Cap",
      quantity: 1,
      size: "large",
      price: 12,
    },
  ];
  return (
    <>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"CART"} style={{ alignItems: "center" }} />
      </div>
      <Container>
        <div className={styles.cart_main_container}>
          {cartData.map((cart) => (
            <div className={styles.cart_box}>
              <div className={styles.cart_right_box}>
                <div className={styles.cart_img}>
                  <img src={cart.img} alt="" />
                </div>
                <div className={styles.cart_name}>
                  <h5>{cart.name}</h5>
                  <p>quantity: {cart.quantity}</p>
                  <p>size: {cart.size}</p>
                </div>
              </div>
              <div className={styles.cart_icons_box}>
                <div className={styles.cart_icons}>
                  <h5>${cart.price}</h5>
                </div>
                <div className={styles.cart_icons}>
                  <RiDeleteBin6Line size={25} />
                </div>
              </div>
            </div>
          ))}
          <div>
            <div>
              <InputField
                label={"Shipping Address"}
                placeholder="Enter Shipping Address"
                style={{ height: "50px" }}
                labelStyle={{ fontSize: "30px" }}
              />
            </div>
            <div className={styles.cart_total_amt}>
              <div>
                <h2>Total Amount</h2>
              </div>
              <div>
                <h2>$36</h2>
              </div>
            </div>
          </div>
          <div className="d-flex align-item-center justify-content-center w-100">
            <div style={{ margin: "5% 0% 5% 0%", width: "40%" }}>
              <Button
                style={{ width: "100%", height: "60px", fontSize: "190%" }}
                text="BUY NOW"
                onClick={() => history.push("/payment")}
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
