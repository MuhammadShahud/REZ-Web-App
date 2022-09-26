import React, { useState } from "react";

import styles from "./PostStatus.module.css";
import {
    AiFillCamera
} from "react-icons/ai";
import {
    MdLocalMovies
} from "react-icons/md";
import {
    HiMusicNote
} from "react-icons/hi";

import { Button } from "antd";


const PostStatus = ({ style, text }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={styles.post__status} style={style}>
            <div className={styles.post__statusText}>
                <textarea type="text" placeholder="What's on your mind ?" />
            </div>
            <div className={styles.post__statusButtons}>
                <div>
                    <button className={styles.post__status_icon}>
                        <AiFillCamera color="var(--light-grey)" className={styles.post__statusButtonsSize} />
                    </button>
                    <button className={styles.post__status_icon}>
                        <MdLocalMovies color="var(--light-grey)" className={styles.post__statusButtonsSize} />
                    </button>
                    <button className={styles.post__status_icon}>
                        <HiMusicNote color="var(--light-grey)" className={styles.post__statusButtonsSize} />
                    </button>
                    <button className={styles.post__status_icon}>
                        <text className={styles.post__statusButtonTextSize}>More</text>
                    </button>
                </div>
                <div className={styles.post__button}>
                    <Button type="primary" style={{ marginLeft: 8 }}>
                        Post
                    </Button>
                </div>
            </div>


        </div>
    );
};

export default PostStatus;
