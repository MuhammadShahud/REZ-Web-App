import { Image } from "react-bootstrap";
import { Rate } from "antd";
import styles from "./productcard.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const ProductCard = ({ img, tittle, price, rate }) => {
  const history = useHistory();
  return (
    <div
      className={styles.product_card}
      onClick={() => history.push("/productdetails")}
    >
      <div className={styles.product_img}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            marginBottom: "8%",
          }}
          src={img}
          rounded={true}
        />
      </div>
      <div className={styles.tittle}>
        <h5 className={styles.product_tittle}>{tittle}</h5>
      </div>
      <div>
        <h5 className={styles.product_price}>${price}</h5>
      </div>
      <div>
        <Rate disabled defaultValue={rate} />
      </div>
    </div>
  );
};

export default ProductCard;
