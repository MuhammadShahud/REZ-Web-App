import { Container, Col, Row } from "react-bootstrap";
import Button from "../button/Button";
import { List } from "antd";
import styles from "./storelist.module.css";
import ProductCard from "../productCard/ProductCard";
const StoreList = ({ heading, storeData, filtered, setFiltered }) => {
  return (
    <div className={styles.store_list}>
      <div className={styles.listheading}>
        <div>
          <h1 style={{ fontWeight: "bold" }}>{heading}</h1>
        </div>
        {!filtered ? (
          <div style={{ marginTop: "1%", marginBottom: "5%" }}>
            <Button
              text="View All"
              onClick={() => {
                localStorage.setItem("filtered", true);
                setFiltered(JSON.parse(localStorage.getItem("filtered")));
                window.scrollTo(0, 0);
              }}
            />
          </div>
        ) : (
          <div style={{ marginTop: "1%", marginBottom: "5%" }}>
            <Button
              text="Back"
              onClick={() => {
                localStorage.setItem("filtered", false);
                setFiltered(JSON.parse(localStorage.getItem("filtered")));
              }}
            />
          </div>
        )}
      </div>
      <Container>
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 }}
          dataSource={storeData}
          renderItem={(item) => (
            <List.Item>
              <ProductCard
                img={item.image}
                price={item.price}
                tittle={item.tittle}
                rate={item.rate}
              />
            </List.Item>
          )}
        />
      </Container>
    </div>
  );
};

export default StoreList;
