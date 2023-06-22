import "./ManageListings.css";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addReviewThunk } from "../../store/myReviews";
import ReactStars from "react-rating-stars-component";

const ListingCard = ({ listing, PastTrip }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showWriteReviewModal, setShowWriteReviewModal] = useState(false);
  const sessionUserId = useSelector((state) => state.session.user.id);
  const myReview = useSelector(
    (state) => state.myReviews[`${PastTrip.spot_id}`]
  );
  const [review, setReview] = useState(myReview ? myReview.description : "");
  const [error, setError] = useState(false);
  const [rating, setRating] = useState(
    myReview ? parseInt(myReview.rating) : 0
  );
  const [ratingError, setRatingError] = useState(false);

  const submitReview = async (e) => {
    e.preventDefault();
    if (review.length < 50 || review.length > 1000) {
      setError(true);
      return;
    } else if (rating <= 0) {
      setRatingError(true);
      return;
    }

    setRatingError(false);
    setError(false);
    if (!myReview) {
      let reviewObj = {
        rating,
        description: review,
        spotId: parseInt(PastTrip.spot_id),
        userId: sessionUserId,
      };
      dispatch(addReviewThunk(reviewObj));
    }
  };

  return (
    <div className="listingCard">
      <div
        onClick={() => {
          if (listing) {
            history.push(`/spots/${listing.id}`);
          } else if (PastTrip) {
            history.push(`/spots/${PastTrip.spot_id}`);
          }
        }}
        id="listingCardImageContainer"
      >
        <img
          id="yourListingImageCard"
          alt="your-listing"
          src={listing ? listing.images[0] : PastTrip.spot_images[0]}
        ></img>
      </div>
      <div className="listingNameAndPriceContainer">
        <div id="listingAddress">
          {listing ? listing.address : PastTrip.spot_name}
        </div>
        <div id="listingPriceYourListings">
          ${listing ? listing.price_per_day : PastTrip.price}/ day
        </div>
        {!listing && (
          <div
            onClick={() => setShowWriteReviewModal(true)}
            id="writeAReviewButton"
          >
            {myReview ? "Edit review" : "Write a review"}
          </div>
        )}
      </div>
      {showWriteReviewModal && (
        <Modal
          idName={"writeReviewModal"}
          onClose={() => setShowWriteReviewModal(false)}
        >
          <div id="writeReviewMainContentContainer">
            <div id="writeReviewImageAndCloseIconContainer">
              <img
                src={PastTrip.spot_images[0]}
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "brightness(50%)",
                }}
                alt="backgroundImage"
              />
              <IoIosClose
                id="closeWriteReviewModal"
                onClick={() => setShowWriteReviewModal(false)}
              />
              <div id="writeReviewSpotImageText">
                How was your stay at {PastTrip.host_name}'s place?
              </div>
            </div>
            <div id="writeReviewModalReviewContent">
              <div id="writeReviewModalWriteReviewText">Write a Review</div>
              <div id="writeReviewModalTellUsThoughtsAndTextAreaContainer">
                {ratingError && (
                  <div id="missingRatingError">You must provide a rating.</div>
                )}
                <div id="writeReviewModalTellUsThoughts">
                  Rating:{" "}
                  <ReactStars
                    value={rating}
                    onChange={(newRating) => setRating(newRating)}
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
                <form
                  id="writeReviewCharacterLimitAndTextAreaContainer"
                  onSubmit={submitReview}
                >
                  <div
                    id={
                      error
                        ? "writeReviewCharacterLimitTipError"
                        : "writeReviewCharacterLimitTip"
                    }
                  >
                    * Please make sure review is between 50 and 1000 characters.
                  </div>
                  <textarea
                    id="writeReviewTextArea"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required={true}
                    minLength={50}
                    maxLength={1000}
                  ></textarea>
                  <div id="writeReviewSubmitReviewContainer">
                    <button id="submitReviewButton" type="submit">
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ListingCard;
