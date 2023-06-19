import React from "react";
import "./Reviews.css";

const ReviewCard = ({ review }) => {
  return (
    <div id="reviewCardParentContainer">
      <div id="reviewCardUserInfoParentContainer">
        <div
          style={{
            backgroundImage: `url(${review.user_info.profile_image})`,
            height: "30px",
            width: "30px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
          }}
        ></div>
        <div id="usersNameAndUserName">
          <div>{review.user_info.name}</div>
          <div>{review.user_info.username}</div>
        </div>
      </div>
      <div>{review.description}</div>
    </div>
  );
};

export default React.memo(ReviewCard);
