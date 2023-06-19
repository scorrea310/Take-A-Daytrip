import React from "react";
import "./Reviews.css";
import ReviewCard from "./ReviewCard";
const Reviews = ({ reviews }) => {
  return (
    <div id="reviewsSectionParentContainer">
      <div id="numberOfReviews">{reviews.length} reviews</div>
      <div id="two-columns-grid">
        {reviews.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(Reviews);
