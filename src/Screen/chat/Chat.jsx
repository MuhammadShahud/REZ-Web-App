import classes from "./Chat.module.css";
import { Heading, RezNavbar } from "../../Components";
import { Footer } from "../../Containers";
import { AiOutlineMore } from "react-icons/ai";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Avatar, Badge, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { BsPaperclip } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import av2 from "../../Assets/av2.jpg";
import av1 from "../../Assets/av1.jpg";
import LongMenu from "../../Components/longMenu/Longmenu";
import ModalForm from "../../Components/modal/Modal";
import Button from "../../Components/button/Button";
import { useState } from "react";
import { InputField, DropDown } from "../../Components";
import { useHistory } from "react-router-dom";
const options = ["Delete Chat", "leave group"];
const optionsChat = ["Member 1", "Member 2", "Member 3"];
const DUMMY_DATA = [
  {
    id: "c1",
    title: "John Dave",
    lastMsg: "Lorem Ipsum",
    avatar: av1,
  },
  {
    id: "c2",
    title: "Offical Group",
    lastMsg: "Lorem Ipsum",
    avatar: av2,
  },
  {
    id: "c3",
    title: "John Dave",
    lastMsg: "Lorem Ipsum",
    avatar: av1,
  },
  {
    id: "c4",
    title: "John Dave",
    lastMsg: "Lorem Ipsum",
    avatar: av2,
  },
  {
    id: "c4",
    title: "John Dave",
    lastMsg: "Lorem Ipsum",
    avatar: av2,
  },
  {
    id: "c4",
    title: "John Dave",
    lastMsg: "Lorem Ipsum",
    avatar: av2,
  },
  {
    id: "c4",
    title: "John Dave",
    lastMsg: "Lorem Ipsum",
    avatar: av2,
  },
];
const MESSAGE = [
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias dolorum velit repellat placeat modi e",
    avatar: av2,
  },
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae ipsum",
    avatar: av1,
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae ipsum",
    avatar: av2,
  },
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae ipsum",
    avatar: av1,
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae ipsum",
    avatar: av2,
  },
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae ipsum",
    avatar: av1,
  },
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae ipsum",
    avatar: av1,
  },
];
const Chat = (props) => {
  const fun = () => {
    setIsModalVisible(true);
  };
  const optionsOne = [
    // {
    //   name: "New Chat",
    //   onClick: () => {
    //     console.log("New Chat");
    //   },
    // },
    {
      name: "New group",
      onClick: () => {
        showModal();
      },
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sentMessage, setSentMessage] = useState(MESSAGE);
  const [inputMessage, setInputMessage] = useState("");

  const inputMessageHandler = (event) => {
    setInputMessage(event.target.value);
  };

  const messageHandler = () => {
    let dummyMessage = {
      id: 1,
      message: inputMessage,
      avatar: av1,
    };
    MESSAGE.push(dummyMessage);
    setSentMessage({
      MESSAGE,
    });
    console.log(sentMessage);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // sentMessage.push(MESSAGE)
  const history = useHistory();
  return (
    <div className={classes.chatMain}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"CHAT"} style={{ alignItems: "center" }} />
      </div>
      <div className={`my-5 ${classes.chat}`}>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={2} md={3} className={classes.chatList}>
              <div>
                <div className={classes.chatTop}>
                  <p>Chat</p>
                  <LongMenu
                    options={optionsOne}
                    showModal={showModal}
                    // onClick={showModal}
                  />
                </div>
                <div className={classes.chatItems}>
                  {DUMMY_DATA.map((item, ind) => (
                    <div className={classes.chatData} key={ind}>
                      <div className={classes.avatar}>
                        <span>
                          <Badge
                            count={1}
                            style={{ backgroundColor: "#28aec9" }}
                          >
                            <Avatar
                              shape="circle"
                              icon={<UserOutlined />}
                              src={item.avatar}
                            />
                          </Badge>
                        </span>
                      </div>
                      <div className={classes.dataElement}>
                        <div className={classes.subDataElement}>
                          <span>{item.title}</span>
                          <p>{item.lastMsg.slice(0, 20)}...</p>
                        </div>
                        <div className={classes.badge}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col xs={9} md={8} className={classes.chats}>
              <div>
                <div className={classes.textTop}>
                  <p
                    className="w-100"
                    onClick={() => {
                      history.push("/chatGroup");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Avatar
                      shape="circle"
                      icon={<UserOutlined />}
                      style={{ marginRight: "10px" }}
                      src={av2}
                    />
                    Official group
                  </p>

                  <LongMenu options={options} />
                </div>

                <div className={classes.textBottom}>
                  <ul>
                    {MESSAGE.map((item, index) => (
                      <div key={index} className={classes.chatBox}>
                        <div
                          className={
                            item.id === 1 ? classes.chatend : classes.chatstart
                          }
                        >
                          <span>
                            <Avatar
                              shape="circle"
                              icon={<UserOutlined />}
                              src={item.avatar}
                            />
                          </span>
                          <li>{item.message}</li>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
                <div className={classes.text}>
                  <input
                    onChange={inputMessageHandler}
                    placeholder="Type your message..."
                  ></input>
                  {/* <BsPaperclip
                    style={{
                      fontSize: "25px",
                      color: "#77777e",
                      cursor: "pointer",
                    }}
                  /> */}
                  <div className={classes.sendIcon}>
                    <BiSend
                      onClick={messageHandler}
                      style={{
                        fontSize: "20px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ModalForm
        title="Create Group"
        onOk={handleOk}
        onShow={showModal}
        onCancel={handleCancel}
        onVisible={isModalVisible}
      >
        <form>
          <div className={classes.chat__twoInputs}>
            <div className={classes.chat__inputSrtTime}>
              <span>
                <InputField
                  label={"Group Name"}
                  placeholder={"Enter Group Name"}
                  style={{
                    border: "1px solid var(--light-grey)",
                    background: "white",
                  }}
                />
              </span>
            </div>
            <div className={classes.chat__dropDown}>
              <label>Add Members</label>
              <DropDown
                options={optionsChat}
                style={{
                  border: "1px solid var(--light-grey)",
                  background: "white",
                }}
              />
            </div>
          </div>
          <div className={classes.chat__textArea}>
            <label>Description</label>
            <textarea type="comment" rows={4} placeholder="Enter Description" />
          </div>
          <div className={classes.chat__file}>
            <p style={{ fontWeight: "bold", margin: "0" }}>Upload Images</p>
            <div className={classes.chat__uploadFile}>
              <input type="file" name="" />
            </div>
          </div>
        </form>
        <div className={classes.btns}>
          <Button text="Submit" onClick={handleCancel}></Button>
          <button className={classes.btn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </ModalForm>
      <Footer />
    </div>
  );
};
export default Chat;
