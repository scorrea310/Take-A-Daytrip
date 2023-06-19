import React from "react";
import "./Reviews.css";

const ReviewCard = ({ review }) => {
  return (
    <div id="reviewCardParentContainer">
      <div id="reviewCardUserInfoParentContainer">
        <div
          style={{
            backgroundImage: `url(${review.user_info.profile_image})`,
            height: "40px",
            width: "40px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            marginRight: "12px",
          }}
        ></div>
        <div id="usersNameAndUserName">
          <div id="reviewCardName">{review.user_info.name}</div>
          <div id="reviewCardReviewDate">{review.created}</div>
        </div>
      </div>
      <div id="reviewDescription">{review.description}</div>
    </div>
  );
};

export default React.memo(ReviewCard);
