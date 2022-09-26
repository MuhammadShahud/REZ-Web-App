import { Rate } from "antd";
import { Heading, RezNavbar, Button } from "../../Components";
import classes from "./Facility.module.css";
import { Footer } from "../../Containers";
import std1 from "../../Assets/couch-profile-1.jpg";
import std2 from "../../Assets/couch-profile-2.jpg";
import std3 from "../../Assets/couch-profile-3.jpg";
import std4 from "../../Assets/couch-profile-4.jpg";
import { Container, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SearchBar from "../../Components/searchBar/searchBar";

const stadiumDetails = [
  {
    id: 1,
    stadiumImg: std3,
    stadiumName: "Football Stadium",
    ratingValue: 4.5,
  },
  {
    id: 2,
    stadiumImg: std1,
    stadiumName: "Hockey Field",
    ratingValue: 4.5,
  },
  {
    id: 1,
    stadiumImg: std4,
    stadiumName: "Ruby Arena",
    ratingValue: 4.5,
  },
  {
    id: 1,
    stadiumImg: std2,
    stadiumName: "Soccer Club",
    ratingValue: 4.5,
  },
  {
    id: 1,
    stadiumImg: std2,
    stadiumName: "Football Stadium",
    ratingValue: 4.5,
  },
  {
    id: 2,
    stadiumImg: std4,
    stadiumName: "Hockey Field",
    ratingValue: 4.5,
  },
  {
    id: 1,
    stadiumImg: std1,
    stadiumName: "Ruby Arena",
    ratingValue: 4.5,
  },
  {
    id: 1,
    stadiumImg: std3,
    stadiumName: "Soccer Club",
    ratingValue: 4.5,
  },
  {
    id: 1,
    stadiumImg: std1,
    stadiumName: "Football Stadium",
    ratingValue: 4.5,
  },
  {
    id: 2,
    stadiumImg: std2,
    stadiumName: "Hockey Field",
    ratingValue: 4.5,
  },
  {
    id: 1,
    stadiumImg: std3,
    stadiumName: "Ruby Arena",
    ratingValue: 4.5,
  },
  {
    id: 1,
    stadiumImg: std4,
    stadiumName: "Soccer Club",
    ratingValue: 4.5,
  },
];

const Facility = () => {
  const history = useHistory();
  return (
    <div>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"FACILITY"} style={{ alignItems: "center" }} />
      </div>
      <Container className={classes.facility__mainDiv}>
        <div className={classes.follow__search}>
          <SearchBar placeholder={"Search Now"} />
        </div>
        <Row className={classes.facility__row}>
          {stadiumDetails.map((faci, ind) => (
            <Col md={3} key={ind} className={classes.facility__col}>
              <div className={classes.facility__container}>
                <div
                  onClick={() => history.push("/userprofileschedule/2")}
                  className={classes.facility__img}
                >
                  <img src={faci.stadiumImg} width="100%" />
                </div>
                <span onClick={() => history.push("/userprofileschedule/2")}>
                  {faci.stadiumName}
                </span>
                <div>
                  <Rate allowHalf value={faci.ratingValue} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className={classes.facility__btn}>
          <Button text="Load More"></Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default Facility;
