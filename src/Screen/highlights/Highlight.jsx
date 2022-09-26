import React, { useEffect } from "react";
import {
  Heading,
  RezNavbar,
  PostStatus,
  PostCard,
  PostEvent,
} from "../../Components";
import { Footer } from "../../Containers";

import profileImg from "../../Assets/profile-img.jpg";
import postImg from "../../Assets/highlights_b-img1.jpg";
import { useHistory } from "react-router-dom";

const Highlight = () => {
  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <Heading text={"Highlights"} style={{ alignItems: "center" }} />
      <PostStatus style={{ alignItems: "center" }} />
      <PostCard
        style={{ alignItems: "center" }}
        profileImage={profileImg}
        profileName={"Dave Facility"}
        date={"8 min ago"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        postImage={postImg}
        commentsCount={"01"}
        commentProfileImage={profileImg}
        commentProfileName={"Dave"}
        commentDate={"12 March 2022"}
        commentDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        userRole={2}
      />
      <PostCard
        style={{ alignItems: "center" }}
        profileImage={profileImg}
        profileName={"Dave Coach"}
        date={"8 min ago"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        postImage={postImg}
        commentsCount={"01"}
        commentProfileImage={profileImg}
        commentProfileName={"Dave"}
        commentDate={"12 March 2022"}
        commentDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        userRole={1}
      />
      <PostEvent
        style={{ alignItems: "center" }}
        profileImage={profileImg}
        profileName={"Dave"}
        date={"8 min ago"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        postImage={postImg}
        dateEvent={"23"}
        dayEvent={"Wed"}
        eventHeading={"Football Match"}
        address={"Address Here"}
      />
      <Footer />
    </div>
  );
};

export default Highlight;
