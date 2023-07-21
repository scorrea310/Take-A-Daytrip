import NavBar from "../../../NavBar/NavBar";
import "./PastTripsPage.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsChevronRight } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import ListingCard from "../ManageListingsPage/ListingCard";
import Footer from "../../../Footer/Footer";
import { loadMyReviewsThunk } from "../../../../store/myReviews";

const PastTrips = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pastTrips, setPastTrips] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      dispatch(loadMyReviewsThunk(sessionUser.id));

      const response = await fetch(
        `/api/reservations/${sessionUser.id}/past-trips`
      );

      if (response.ok) {
        const pastTrips = await response.json();
        const pastTripsArray = Object.values(pastTrips.past_reservations);
        setPastTrips(pastTripsArray);
      }
    })();
  }, [dispatch, sessionUser?.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pasTripsPage">
      <NavBar />
      <div className="pastTripsMainContainer">
        <div className="pastTripsMainContent">
          <div className="page-path-places-you-been">
            <div
              onClick={() => history.push("/account")}
              id="account-text-personal-info-page"
            >
              Account
            </div>
            <div>
              <BsChevronRight id="right-arrow" />
            </div>
            <div id="personal-info-text-personal-page">Places You've Been</div>
          </div>
          <div className="placesYouBeenTextPastTripsPage">
            Places You've Been{" "}
          </div>
          {pastTrips.length === 0 && (
            <div className="haventBeenAnywhereText">
              You haven't been anywhere yet. Why don't you book a trip!
            </div>
          )}
          <div className="placesYouBeenGallery">
            {pastTrips.length > 0 &&
              pastTrips.map((pastTrip) => {
                return <ListingCard key={pastTrip.id} PastTrip={pastTrip} />;
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PastTrips;
