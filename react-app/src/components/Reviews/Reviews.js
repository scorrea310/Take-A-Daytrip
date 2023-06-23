import React from "react";
import "./Reviews.css";
import ReviewCard from "./ReviewCard";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

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
          <div id="reviewsModalMainContent">
            <div id="closeIconAndReviewsTitleContainer">
              <IoIosClose
                id="closeReviewsModal"
                onClick={() => setShowReviewsModal(false)}
              />
              <div id="reviewsModalTitle">{reviews.length} reviews</div>
            </div>
            <div id="reviewsModalReviewsMainContainer">
              {reviews.map((review) => {
                return (
                  <ReviewCard modal={true} key={review.id} review={review} />
                );
              })}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default React.memo(Reviews);
