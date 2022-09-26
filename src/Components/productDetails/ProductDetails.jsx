import { useState } from "react";
import { Rate } from "antd";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Button, DropDown } from "../../Components";
import styles from "./productDetails.module.css";
const ProductDetails = ({ productDetail }) => {
  const [quantity, SetQuantity] = useState(1);
  const [currentImg, SetCurrentImg] = useState(productDetail.images.img1);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const reduceQuantity = () => {
    if (quantity > 1) {
      SetQuantity(quantity - 1);
    } else return;
  };
  const imageHandler = (img) => {
    SetCurrentImg(img);
  };

  return (
    <>
      <div className={styles.product_details}>
        <div className={styles.img_container}>
          <div style={{ marginBottom: "10%" }}>
            <div className={styles.main_img}>
              <img className={styles.image} src={currentImg} alt="" />
            </div>
            <div className={styles.images_list}>
              <div className={styles.images}>
                <img
                  onClick={() => {
                    imageHandler(productDetail.images.img2);
                  }}
                  src={productDetail.images.img2}
                  alt=""
                />
              </div>
              <div className={styles.images}>
                <img
                  onClick={() => {
                    imageHandler(productDetail.images.img3);
                  }}
                  src={productDetail.images.img3}
                  alt=""
                />
              </div>
              <div className={styles.images}>
                <img
                  onClick={() => {
                    imageHandler(productDetail.images.img4);
                  }}
                  src={productDetail.images.img4}
                  alt=""
                />
              </div>
              <div className={styles.images}>
                <img
                  onClick={() => {
                    imageHandler(productDetail.images.img5);
                  }}
                  src={productDetail.images.img5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.details_container}>
            <div>
              <h2 style={{ fontWeight: "bold" }}>
                {productDetail.productname}
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <Rate
                  style={{ color: "var(--secondary-color)" }}
                  value={productDetail.rate}
                />
              </div>
              <div style={{ padding: "2%", marginLeft: "2%", marginTop: "2%" }}>
                <p
                  style={{
                    color: "var(--secondary-color)",
                    fontWeight: "bold",
                  }}
                >
                  ({productDetail.reviews} Reviews)
                </p>
              </div>
            </div>
            <div>
              <h1
                style={{ color: "var(--secondary-color)", fontWeight: "bold" }}
              >
                ${productDetail.price}
              </h1>
            </div>
            <div>
              <p>{productDetail.description}</p>
            </div>
            {user && user[0].userRole === "store" ? null : (
              <div
                style={{
                  display: "flex",
                  marginTop: "10%",
                  marginBottom: "10%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "30%",
                    backgroundColor: "rgb(239, 239, 239)",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "2%",
                  }}
                >
                  <div style={{ width: "100%", height: "100%" }}>
                    <button
                      style={{ border: "none", width: "100%", height: "100%" }}
                      onClick={reduceQuantity}
                    >
                      -
                    </button>
                  </div>
                  <div style={{ height: "50%" }}>
                    <p> {quantity} </p>
                  </div>
                  <div style={{ width: "100%", height: "100%" }}>
                    <button
                      style={{ border: "none", width: "100%", height: "100%" }}
                      onClick={() => SetQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <Button text="Add To Cart" />
                </div>
                <div>
                  <DropDown options={productDetail.size} />
                </div>
              </div>
            )}
            <div className={styles.detail_box}>
              <div className={styles.detail}>
                <div className={styles.detail_item}>
                  <div>
                    <p className={styles.detail_item_p}>Availablity: </p>
                  </div>
                  <div>
                    <p className={styles.detail_item_p}>Dimention: </p>
                  </div>
                  <div>
                    <p className={styles.detail_item_p}>Weight: </p>
                  </div>
                  {/* <div>
                    <p className={styles.detail_item_p}>Share On: </p>
                  </div> */}
                </div>
                <div className={styles.detail_info}>
                  <p> {productDetail.availability} </p>
                  <p> {productDetail.dimention} </p>
                  <p> {productDetail.weight} </p>
                  {/* <div>
                    <FaFacebookF
                      size={15}
                      style={{ marginRight: "5%" }}
                      color="#bebebe"
                    />
                    <FaTwitter
                      size={15}
                      style={{ marginRight: "5%" }}
                      color="#bebebe"
                    />
                    <FaInstagram
                      size={15}
                      style={{ marginRight: "5%" }}
                      color="#bebebe"
                    />
                    <FaPinterest
                      size={15}
                      style={{ marginRight: "5%" }}
                      color="#bebebe"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
