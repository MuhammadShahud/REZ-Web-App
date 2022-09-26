import React, { useState } from "react";
import Button from "../button/Button";

import styles from "./PostEvent.module.css";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

const PostEvent = ({
  style,
  profileName,
  profileImage,
  date,
  postImage,
  dateEvent,
  dayEvent,
  eventHeading,
  address,
  description,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.post__card} style={style}>
      <div className={styles.post__card_Data}>
        <div className={styles.post__card_Profile}>
          <div className={styles.post__card_ProfileImg}>
            <img src={profileImage} alt="" />
          </div>
          <div className={styles.post__card_ProfileName}>
            <text style={{ fontWeight: "bold" }}>{profileName}</text>
            <text>{date}</text>
          </div>
          {/* <div className={styles.post__card_InterestedButton}>
            <Button text="Interested" />
          </div> */}
        </div>

        <div className={styles.post__card_PostImg}>
          <img src={postImage} alt="" />
        </div>
        <div className={styles.post__card_Event}>
          <div className={styles.post__card_EventDate}>
            <text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "40px",
                lineHeight: "40px",
              }}
            >
              {dateEvent}
            </text>
            <text
              style={{
                textAlign: "center",
                fontSize: "22px",
                color: "var( --light-grey)",
                lineHeight: "20px",
              }}
            >
              {dayEvent}
            </text>
          </div>
          <div className={styles.post__card_EventInfo}>
            <text
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                lineHeight: "40px",
              }}
            >
              {eventHeading}
            </text>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ImLocation />
              <text
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  lineHeight: "10px",
                }}
              >
                {address}
              </text>
            </div>

            <text style={{ fontSize: "14px", marginTop: "30px" }}>
              {description}
            </text>
          </div>
        </div>
        {/* <div className={styles.post__card_Buttons}>
                    <button
                        className="navbar-toggler border-light"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setToggle(!toggle)}
                    >
                        <AiFillLike />
                        <text style={{ marginLeft: 5, }}>Like</text>
                    </button>
                    <button
                        className="navbar-toggler border-light"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setToggle(!toggle)}
                    >
                        <FaComment />
                        <text style={{ marginLeft: 5, }}>Comment</text>
                    </button>
                    <button
                        className="navbar-toggler border-light"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setToggle(!toggle)}
                    >
                        <BsShareFill />
                        <text style={{ marginLeft: 5, }}>Share</text>
                    </button>
                </div> */}
      </div>
    </div>
  );
};

export default PostEvent;
