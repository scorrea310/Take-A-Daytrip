import "./ManageListings.css";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addReviewThunk,
  editReviewThunk,
  deleteReviewThunk,
} from "../../store/myReviews";
import ReactStars from "react-rating-stars-component";
import { Truncate } from "@primer/react";
import {
  addReviewToSpot,
  deleteReviewFromSpot,
  editReviewOnSpot,
} from "../../store/spotReducer";

const ListingCard = ({ listing, PastTrip }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showWriteReviewModal, setShowWriteReviewModal] = useState(false);
  const sessionUserId = useSelector((state) => state.session.user.id);
  const myReview = useSelector(
    (state) => state.myReviews[`${PastTrip?.spot_id}`]
  );
  const [review, setReview] = useState(myReview ? myReview.description : "");
  const [error, setError] = useState(false);
  const [rating, setRating] = useState(
    myReview ? parseInt(myReview.rating) : 0
  );
  const [ratingError, setRatingError] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

      let newReview = await dispatch(addReviewThunk(reviewObj)).then(
        (isSuccess) => isSuccess
      );

      dispatch(addReviewToSpot(newReview));

      if (newReview) {
        setShowWriteReviewModal(false);
        return;
      }
    } else {
      let editedReview = {
        rating,
        description: review,
        spotId: parseInt(PastTrip.spot_id),
        userId: sessionUserId,
      };
      let updatedReview = dispatch(
        editReviewThunk(editedReview, myReview.id)
      ).then((isSuccess) => isSuccess);

      if (updatedReview) {
        let reviewToUpdate = { ...myReview };
        console.log(reviewToUpdate, "NEW REVIE!!!!!!");
        reviewToUpdate.rating = rating;
        reviewToUpdate.description = review;
        dispatch(editReviewOnSpot(reviewToUpdate));
        setShowWriteReviewModal(false);
        return;
      }
    }
  };

  const deleteReview = () => {
    let oldReview = { ...myReview };
    dispatch(deleteReviewThunk(myReview.id, myReview.spot_id));
    setReview("");
    setRating(0);
    dispatch(deleteReviewFromSpot(oldReview));
    setShowDeleteModal(false);
    return;
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
          {listing ? (
            listing.address
          ) : (
            <Truncate maxWidth={230}>{PastTrip.spot_name}</Truncate>
          )}
        </div>
        <div id="editReviewAndDeleteReviewButtonsContainer">
          {!listing && (
            <>
              <div
                onClick={() => setShowWriteReviewModal(true)}
                id="writeAReviewButton"
              >
                {myReview ? "Edit review" : "Write a review"}
              </div>
              {myReview && (
                <div
                  onClick={() => setShowDeleteModal(true)}
                  id="deleteReviewButton"
                >
                  Delete Review
                </div>
              )}
            </>
          )}
        </div>
        {showDeleteModal && (
          <Modal onClose={() => setShowDeleteModal(false)}>
            <div id="deleteReviewModalContainer">
              <IoIosClose
                id="closeDeleteReviewModal"
                onClick={() => setShowDeleteModal(false)}
              />
              <div id="deleteReviewModalMainTextContainer">
                <div id="deleteReviewModalConfirmQuestion">
                  Are you sure you want to delete this review?
                </div>
                <div id="deleteReviewModalSelectContainer">
                  <div onClick={deleteReview} id="yesDeleteReviewButton">
                    Yes
                  </div>
                  <div
                    onClick={() => setShowDeleteModal(false)}
                    id="noDeleteReviewButton"
                  >
                    No
                  </div>
                </div>
              </div>
            </div>
          </Modal>
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
                <div id="writeReviewModalTellUsThoughts">
                  <div id="writeReviewModalRatingAndStarsParentContainer">
                    Rating:
                    <ReactStars
                      value={rating}
                      onChange={(newRating) => setRating(newRating)}
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  {ratingError && (
                    <div id="missingRatingError">
                      You must provide a rating.
                    </div>
                  )}
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
