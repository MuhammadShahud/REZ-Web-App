import { Image } from "react-bootstrap";
import styles from "./TrendingItemsCard.module.css";
import { Rate, List } from "antd";
import Button from "../button/Button";
import { useHistory } from "react-router-dom";
const TrendingItemsCard = ({ data }) => {
  const history = useHistory();
  const trendingItemsData = [
    {
      productId: "1",
      image: require("../../Assets/store_small_img1.jpg"),
      tittle: "T-Shirt",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_small_img2.jpg"),
      tittle: "T-Shirt",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_small_img3.jpg"),
      tittle: "T-Shirt",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_small_img4.jpg"),
      tittle: "T-Shirt",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_small_img5.jpg"),
      tittle: "T-Shirt",
      price: "12",
      rate: 4,
    },
  ];
  return (
    <div>
      <List
        grid={{ gutter: 16, xxl: 1 }}
        dataSource={trendingItemsData}
        renderItem={(item) => (
          <List.Item>
            <div
              className={styles.product_card}
              onClick={() => history.push("/productdetails")}
            >
              <div style={{ width: "150px", height: "106px" }}>
                <Image
                  style={{ width: "100%", marginBottom: "8%" }}
                  src={item.image}
                  rounded={true}
                />
              </div>
              <div className={styles.product_detail}>
                <h5 className={styles.product_tittle}>{item.tittle}</h5>

                <h5 className={styles.product_price}>${item.price}</h5>
                <Rate disabled defaultValue={item.rate} />
              </div>
            </div>
          </List.Item>
        )}
      />
      <div className={styles.view_more}>
        <Button text="View More" style={{ alignItem: "center" }} />
      </div>
    </div>
  );
};
export default TrendingItemsCard;
