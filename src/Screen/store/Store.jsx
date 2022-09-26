import {
  Heading,
  RezNavbar,
  Button,
  StoreList,
  TrendingItemsCard,
  AddProduct,
  DropDown,
  InputField,
} from "../../Components";
import { Footer } from "../../Containers";
import styles from "./store.module.css";
import { Container, Row, Col, Form, Modal } from "react-bootstrap";
import { Slider, Card } from "antd";
import { useEffect, useState } from "react";
import { BiRightArrowAlt, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Store = () => {
  const [show, setShow] = useState(false);
  const [filtered, setFiltered] = useState(
    JSON.parse(localStorage.getItem("filtered"))
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const filterHandler = (e) => {
    if (e.target.checked) {
      localStorage.setItem("filtered", true);
    } else if (!e.target.checked) {
      localStorage.setItem("filtered", false);
    }
    setFiltered(localStorage.getItem("filtered"));
  };
  // const showFilterModal = () => {
  //   setIsFilterModalVisible(true);
  // };
  // const handleFilterOk = () => {
  //   setIsFilterModalVisible(false);
  // };

  // const handleFilterCancel = () => {
  //   setIsFilterModalVisible(false);
  // };

  const newProductData = [
    {
      productId: "1",
      image: require("../../Assets/add-to-cart_01.jpg"),
      tittle: "Fly-Emirates T-Shirt",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img1.jpg"),
      tittle: "Fly-Emirates T-Shirt",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img3.jpg"),
      tittle: "Fly-Emirates T-Shirt",
      price: "12",
      rate: 4,
    },
  ];
  const usedProductData = [
    {
      productId: "1",
      image: require("../../Assets/store_tools_img1.jpg"),
      tittle: "New Sport Hats",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_hats_img2.jpg"),
      tittle: "New Sport Hats",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_tools_img3.jpg"),
      tittle: "New Sport Hats",
      price: "12",
      rate: 4,
    },
  ];

  const filteredData = [
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img1.jpg"),
      tittle: "New Sport shirts",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img2.jpg"),
      tittle: "New Sport shirts",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img3.jpg"),
      tittle: "New Sport shirt",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img1.jpg"),
      tittle: "New Sport shirts",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img2.jpg"),
      tittle: "New Sport shirts",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img3.jpg"),
      tittle: "New Sport shirt",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img1.jpg"),
      tittle: "New Sport shirts",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img2.jpg"),
      tittle: "New Sport shirts",
      price: "12",
      rate: 4,
    },
    {
      productId: "1",
      image: require("../../Assets/store_shirts_img3.jpg"),
      tittle: "New Sport shirt",
      price: "12",
      rate: 4,
    },
  ];

  const [priceRange, setPriceRange] = useState([0, 0]);
  const setPriceRangeHandler = (value) => {
    setPriceRange(value);
  };
  const options = ["Shirts", "Trouser"];

  return (
    <>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"STORE"} style={{ alignItems: "center" }} />
      </div>
      <Container className={styles.storecontainer}>
        <Row>
          <Col sm={12} md={4} lg={4}>
            {user && user[0].userRole === "team" ? null : (
              <div style={{ marginBottom: "10%" }}>
                {(user && user[0].userRole === "facility") ||
                user[0].userRole === "coach" ||
                user[0].userRole === "store" ? (
                  <Button
                    text="ADD PRODUCT"
                    style={{ width: "100%" }}
                    onClick={() => history.push("/membership")}
                  />
                ) : (
                  <Button
                    text="ADD PRODUCT"
                    style={{ width: "100%" }}
                    onClick={showModal}
                  />
                )}
              </div>
            )}

            <div className={styles.search}>
              <div className={styles.inputStyle}>
                <input placeholder="Search" />
              </div>
              <div>
                <BiSearchAlt2 size={18} />
              </div>
            </div>
            {!filtered && (
              <div style={{ marginBottom: "10%" }}>
                <Card>
                  <h4 style={{ fontWeight: "bold" }}>Categories</h4>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Shirts"
                      value="shirt"
                      onChange={filterHandler}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Trousers"
                      onClick={filterHandler}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Hats"
                      onClick={filterHandler}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Shoes"
                      onClick={filterHandler}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Training Tools"
                      onClick={filterHandler}
                    />
                  </Form.Group>
                </Card>
              </div>
            )}
            <div style={{ marginBottom: "10%" }}>
              <Card>
                <h4 style={{ fontWeight: "bold", marginBottom: "10%" }}>
                  Filter By Price
                </h4>
                <Slider
                  range
                  step={10}
                  defaultValue={[0, 0]}
                  onChange={setPriceRangeHandler}
                  onAfterChange={setPriceRangeHandler}
                  handleStyle={{
                    backgroundColor: "var(--secondary-color)",
                    borderRadius: 0,
                  }}
                />
                <div style={{ display: "flex", marginTop: "10%" }}>
                  <div style={{ cursor: "pointer" }}>
                    <h5
                      style={{
                        color: "var(--secondary-color)",
                        marginTop: "3%",
                      }}
                      onClick={handleShow}
                    >
                      Filter
                    </h5>
                  </div>
                  <div style={{ cursor: "pointer" }} onClick={handleShow}>
                    <BiRightArrowAlt size={30} color="var(--secondary-color)" />
                  </div>
                  <div style={{ marginLeft: "20%" }}>
                    <h5>
                      Price ${priceRange[0]}-${priceRange[1]}
                    </h5>
                  </div>
                </div>
              </Card>
            </div>
            <div style={{ marginBottom: "10%" }}>
              <Card>
                <h4 style={{ fontWeight: "bold" }}>Trending Items</h4>
                <TrendingItemsCard />
              </Card>
            </div>
          </Col>
          <Col md={8}>
            {filtered ? (
              <>
                <StoreList
                  heading="Shirts"
                  storeData={filteredData}
                  filtered={filtered}
                  setFiltered={setFiltered}
                />
              </>
            ) : (
              <>
                <StoreList
                  heading="New Products"
                  storeData={newProductData}
                  setFiltered={setFiltered}
                />
                <StoreList
                  heading="Used Products"
                  storeData={usedProductData}
                  setFiltered={setFiltered}
                />
                <StoreList
                  heading="Trending Tools"
                  storeData={usedProductData}
                  setFiltered={setFiltered}
                />
              </>
            )}
          </Col>
        </Row>
        <AddProduct
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
        />
      </Container>
      <Modal show={show} onHide={handleClose}>
        <div className={styles.store__modalheader}>
          <div className={styles.store__closeIcon}>
            <AiOutlineClose
              onClick={handleClose}
              style={{ fontSize: "30px", color: "var(--para-text)" }}
            />
          </div>
          <div>
            <h3>Filter</h3>
          </div>
          <div>
            <p>Reset</p>
          </div>
        </div>
        <Modal.Body>
          <Container>
            <div className={styles.store__dropDownList}>
              <div className={styles.store__dropDown}>
                <DropDown options={options} style={{ margin: 0 }} />
              </div>
              <div className={styles.store__dropDown}>
                <InputField
                  placeholder={"Product Name"}
                  style={{ margin: 0 }}
                />
              </div>
            </div>
            <div>
              <div className={styles.store__slider}>
                <Slider
                  range
                  step={10}
                  defaultValue={[0, 0]}
                  onChange={setPriceRangeHandler}
                  onAfterChange={setPriceRangeHandler}
                  handleStyle={{
                    backgroundColor: "var(--secondary-color)",
                    borderRadius: 0,
                  }}
                />
              </div>
              <div className={styles.store__price}>
                <div>
                  <p>${priceRange[0]}</p>
                </div>
                <div>
                  <p>${priceRange[1]}</p>
                </div>
              </div>
            </div>
          </Container>
          <div className={styles.store__btns}>
            <Button text="Apply Filter" onClick={handleClose}></Button>
          </div>
        </Modal.Body>
      </Modal>
      <Footer />
    </>
  );
};

export default Store;
