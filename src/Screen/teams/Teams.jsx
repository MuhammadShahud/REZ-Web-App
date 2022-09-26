import { Rate } from "antd";
import { Heading, RezNavbar, Button } from "../../Components";
import classes from "./Teams.module.css";
import { Footer } from "../../Containers";
import team1 from "../../Assets/profile_big_img1.jpg";
import team2 from "../../Assets/profile_big_img2.jpg";
import team3 from "../../Assets/profile_big_img3.jpg";
import team4 from "../../Assets/profile_big_img4.jpg";
import { Container, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const stadiumDetails = [
  {
    id: 1,
    teamImg: team1,
    teamClubName: "Football Club",
    teamName: "Footlball Team",
  },
  {
    id: 2,
    teamImg: team2,
    teamClubName: "Power Gym",
    teamName: "Fitness Club",
  },
  {
    id: 3,
    teamImg: team3,
    teamClubName: "Ruby Star",
    teamName: "Fitness Club",
  },
  {
    id: 4,
    teamImg: team4,
    teamClubName: "Tennis",
    teamName: "Tennis Club",
  },
  {
    id: 1,
    teamImg: team1,
    teamClubName: "Football Club",
    teamName: "Footlball Team",
  },
  {
    id: 2,
    teamImg: team2,
    teamClubName: "Power Gym",
    teamName: "Fitness Club",
  },
  {
    id: 3,
    teamImg: team3,
    teamClubName: "Ruby Star",
    teamName: "Fitness Club",
  },
  {
    id: 4,
    teamImg: team4,
    teamClubName: "Tennis",
    teamName: "Tennis Club",
  },
  {
    id: 1,
    teamImg: team1,
    teamClubName: "Football Club",
    teamName: "Footlball Team",
  },
  {
    id: 2,
    teamImg: team2,
    teamClubName: "Power Gym",
    teamName: "Fitness Club",
  },
  {
    id: 3,
    teamImg: team3,
    teamClubName: "Ruby Star",
    teamName: "Fitness Club",
  },
  {
    id: 4,
    teamImg: team4,
    teamClubName: "Tennis",
    teamName: "Tennis Club",
  },
];

const Teams = () => {
  const history = useHistory();
  return (
    <div>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"TEAMS"} style={{ alignItems: "center" }} />
      </div>
      <Container className={classes.facility__mainDiv}>
        <Row className={classes.facility__row}>
          {stadiumDetails.map((faci, ind) => (
            <Col
              onClick={() => history.push("/teamDetails")}
              md={3}
              key={ind}
              className={classes.facility__col}
            >
              <div className={classes.facility__container}>
                <div className={classes.facility__img}>
                  <img src={faci.teamImg} width="100%" />
                </div>
                <h5>{faci.teamClubName}</h5>
                <div>
                  <p>{faci.teamName}</p>
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
export default Teams;
