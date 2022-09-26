import React, { useState } from "react";
import { Button, Heading, RezNavbar } from "../../Components";

import styles from "./InviteFriend.module.css";
import Friend1 from "../../Assets/chat-img-1.jpg";
import Friend2 from "../../Assets/chat-img-2.jpg";
import Friend3 from "../../Assets/chat-img-3.jpg";
import Friend4 from "../../Assets/chat-img-4.jpg";
import Friend5 from "../../Assets/chat-img-5.jpg";
import { Footer } from "../../Containers";

const InviteFriend = () => {
  const [sendBtn, setSendBtn] = useState(false);

  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />
      <div className="my-3">
        <Heading text="INVITE" style={{ alignItems: "center" }} />
      </div>
      <div className="d-flex justify-content-center">
        <Button
          text="SENT"
          style={sendBtn ? {} : { background: "transparent", color: "black" }}
          onClick={() => setSendBtn(true)}
        />
        <Button
          text="RECEIVED"
          style={sendBtn ? { background: "transparent", color: "black" } : {}}
          onClick={() => setSendBtn(false)}
        />
      </div>

      <section
        className={`w-100 d-flex flex-column align-items-center my-3 ${styles.cardsWrapper}`}
      >
        {sendBtn
          ? sentfriendsData.map((data, ind) => {
              return <SentFriendCard data={data} key={ind} />;
            })
          : friendsData.map((data, ind) => {
              return <RecievedFriendCard key={ind} data={data} />;
            })}
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const RecievedFriendCard = ({ data }) => {
  return (
    <section className={styles.inviteFriendCard}>
      <div className={styles.inviteFriendData}>
        <img src={data.img} alt="" />
        <div>
          <h5>{data.name}</h5>
          <p>invite to join UEFA</p>
          <p>Champion League</p>
        </div>
      </div>
      <div className={styles.inviteFriendButton}>
        <Button text="ACCEPT" />
        <Button text="REJECT" />
      </div>
    </section>
  );
};

const SentFriendCard = ({ data }) => {
  return (
    <section className={styles.inviteFriendCard}>
      <div className={styles.inviteFriendData}>
        <img src={data.img} alt="" />
        <div>
          <h5>{data.name}</h5>
          <p>invite to join UEFA</p>
          <p>Champion League</p>
        </div>
      </div>
      <div className={styles.inviteFriendButton}>
        <Button text="CANCEL REQUEST" />
      </div>
    </section>
  );
};

const friendsData = [
  {
    img: Friend1,
    name: "John Dave",
  },
  {
    img: Friend2,
    name: "Michael Clark",
  },
  {
    img: Friend3,
    name: "John Dave",
  },
  {
    img: Friend4,
    name: "Steve Dave",
  },
  {
    img: Friend5,
    name: "John Johnson",
  },
];

const sentfriendsData = [
  {
    img: Friend1,
    name: "John Dave",
  },
  {
    img: Friend2,
    name: "Michael Clark",
  },
];

export default InviteFriend;
