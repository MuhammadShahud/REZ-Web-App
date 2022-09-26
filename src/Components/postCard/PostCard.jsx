import React, { useState } from "react";

import styles from "./PostCard.module.css";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

import { Button } from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PostCard = ({
  style,
  profileName,
  profileImage,
  date,
  description,
  postImage,
  commentsCount,
  commentProfileImage,
  commentProfileName,
  commentDate,
  commentDescription,
  userRole,
}) => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  return (
    <div className={styles.post__card} style={style}>
      <div className={styles.post__card_Data}>
        <div
          className={styles.post__card_Profile}
        >
          <div className={styles.post__card_ProfileImg} onClick={() => history.push(`/userprofile/${userRole}`)}>
            <img src={profileImage} alt="" />
          </div>
          <div className={styles.post__card_ProfileName} onClick={() => history.push(`/userprofile/${userRole}`)}>
            <text style={{ fontWeight: "bold" }}>{profileName}</text>
            <text>{date}</text>
          </div>
        </div>
        <div className={styles.post__card_Description}>
          <text>{description}</text>
        </div>
        <div className={styles.post__card_PostImg}>
          <img src={postImage} alt="" />
        </div>
        <div className={styles.post__card_Buttons}>
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
            <text style={{ marginLeft: 5 }}>Like</text>
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
            <text style={{ marginLeft: 5 }}>Comment</text>
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
            <text style={{ marginLeft: 5 }}>Share</text>
          </button>
        </div>
      </div>
      <div className={styles.post__card_Comments}>
        <text style={{ fontWeight: "bold", marginTop: "20px" }}>
          {commentsCount + " COMMENTS"}
        </text>
        <div className={styles.post__card_CommentsSection}>
          <div className={styles.post__card_CommentsProfile}>
            <div className={styles.post__card_CommentsProfileImg}>
              <img src={commentProfileImage} alt="" />
            </div>
            <div className={styles.post__card_CommentsData}>
              <div className={styles.post__card_CommentsProfileName}>
                <text style={{ fontWeight: "bold" }}>{commentProfileName}</text>
                <text
                  style={{ fontWeight: "bold", color: "var( --light-grey)" }}
                >
                  {commentDate}
                </text>
              </div>
              <div className={styles.post__card_CommentsDescription}>
                <text>{commentDescription}</text>
              </div>
            </div>
          </div>
          <div className={styles.post__card_PostComment}>
            <input
              type="text"
              placeholder="Write a comment..."
              style={{
                width: "90%",
                border: "none",
                backgroundColor: "var( --comment-grey-bg)",
                padding: "10px",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "10%",
              }}
            >
              <button style={{ border: "none" }}>
                <IoIosSend size={'30px'} color="var( --primary-color)" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
