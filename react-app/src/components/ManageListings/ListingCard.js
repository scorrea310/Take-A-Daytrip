import "./ManageListings.css";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

const ListingCard = ({ listing, PastTrip }) => {
  const history = useHistory();
  const [showWriteReviewModal, setShowWriteReviewModal] = useState(false);

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
            Write a review
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
                You stayed at David's place
              </div>
            </div>
            <div></div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ListingCard;
