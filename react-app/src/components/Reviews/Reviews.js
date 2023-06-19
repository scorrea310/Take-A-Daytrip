import React from "react";
import "./Reviews.css";
import ReviewCard from "./ReviewCard";
import { Modal } from "../../context/Modal";
import { useState, useEffect } from "react";

const Reviews = ({ reviews }) => {
  const first4Reviews = reviews.slice(0, 4);
  const [showReviewsModal, setShowReviewsModal] = useState(false);

  return (
    <div id="reviewsSectionParentContainer">
      <div id="numberOfReviews">{reviews.length} reviews</div>
      <div id="two-columns-grid">
        {first4Reviews.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        })}
      </div>
      <div id="reviewsShowMoreButton" onClick={() => setShowReviewsModal(true)}>
        Show all {reviews.length} reviews
      </div>
      {showReviewsModal && (
        <Modal
          idName={"reviewsModal"}
          onClose={() => setShowReviewsModal(false)}
        >
          <div>Yo what's up motherFuckers!!!!!!</div>
        </Modal>
      )}
    </div>
  );
};

export default React.memo(Reviews);
