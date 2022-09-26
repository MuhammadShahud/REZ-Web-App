import { Heading, RezNavbar, Button } from "../../Components";
import classes from "./ChatGroup.module.css";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Avatar } from "antd";
import { Footer } from "antd/lib/layout/layout";
import profileImg from "../../Assets/profile-img.jpg";
import memberImg from "../../Assets/profile-img-3.jpg";
import { MdDelete } from "react-icons/md";

const DUMMY_GROUPMEMBERS = [
  {
    id: "M1",
    img: memberImg,
    name: "John Dave",
    memberNum: "687-40404-2393",
  },
  {
    id: "M1",
    img: memberImg,
    name: "John Dave",
    memberNum: "687-40404-2393",
  },
  {
    id: "M1",
    img: memberImg,
    name: "John Dave",
    memberNum: "687-40404-2393",
  },
  {
    id: "M1",
    img: memberImg,
    name: "John Dave",
    memberNum: "687-40404-2393",
  },
  {
    id: "M1",
    img: memberImg,
    name: "John Dave",
    memberNum: "687-40404-2393",
  },
  {
    id: "M1",
    img: memberImg,
    name: "John Dave",
    memberNum: "687-40404-2393",
  },
  {
    id: "M1",
    img: memberImg,
    name: "John Dave",
    memberNum: "687-40404-2393",
  },
  {
    id: "M1",
    img: memberImg,
    name: "John Dave",
    memberNum: "687-40404-2393",
  },
];
const ChatGroup = () => {
  return (
    <div style={{ backgroundColor: "#fcfcfd" }}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"CHAT"} style={{ alignItems: "center" }} />
      </div>
      <Container className={classes.chatGroup__mainDiv}>
        <Row className={classes.chatGroup__row}>
          <Col md={4} className={classes.chatGroup__colLeft}>
            <Avatar shape="circle" src={profileImg} size={100} />
            <div>
              <h4>Offical Group</h4>
            </div>
            <div>
              <Button text="EDIT GROUP"></Button>
            </div>
            <div>
              <h6>Group Description</h6>
            </div>
            <div className={classes.chatGroup__description}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quisquam, ex ducimus nulla, corrupti, laudantium repellendus
                possimus necessitatibus voluptates in aliquid porro suscipit.
                Deserunt, voluptate eius dolores accusantium enim saepe?
              </p>
            </div>
          </Col>
          <Col md={5} className={classes.chatGroup__colRight}>
            <div className={classes.chatGroup__topContainer}>
              <h6>Group Members</h6>
            </div>
            <div className={classes.chatGroup__midContainer}>
              {DUMMY_GROUPMEMBERS.map((memData) => (
                <div className={classes.chatGroup__memList}>
                  <div className={classes.chatGroup__memName}>
                    <span className={classes.chatGroup__avatar}>
                      <Avatar shape="circle" src={memData.img} />
                    </span>
                    <p>{memData.name}</p>
                  </div>
                  <div className={classes.chatGroup__num}>
                    <p>{memData.memberNum}</p>
                    <span>
                      <MdDelete style={{ color: "black" }} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.chatGroup__bottomContainer}>
              <Button text="LEAVE GROUP"></Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default ChatGroup;
