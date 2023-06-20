import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Spot.css";
import { BsDoorOpen } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import EditSpot from "./EditSpot";
import ReserveSpot from "./ReserveSpot";
import { GiVacuumCleaner } from "react-icons/gi";
import { FaAddressCard } from "react-icons/fa";
import Maps from "../Maps/Maps";
import Footer from "../Footer/Footer";
import Reviews from "../Reviews/Reviews";

const Spot = ({ spotsLoaded }) => {
  const user = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spotReducer);
  const { spotId } = useParams();
  const loginModal = useSelector((state) => state.modals.loginModal);
  const signupModal = useSelector((state) => state.modals.signUpModal);
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState(false);

  useEffect(() => {
    if (googleMapsApiKey) {
      return;
    }
    (async () => {
      const res = await fetch("/api/maps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: "key" }),
      });

      const data = await res.json();

      setGoogleMapsApiKey(data.key);
    })();
  }, [googleMapsApiKey]);

  const isUserLoggedIn = () => {
    if (user === null) {
      return (
        <div className="logInDivSpot">
          <div className="logInOrSignUpTextContainerSpotPage">
            <div onClick={() => loginModal(true)} className="logInTextSpotPage">
              Log in
            </div>
            <div className="orTextSpotPage">Or</div>
            <div
              onClick={() => signupModal(true)}
              className="signUpTextSpotPage"
            >
              {" "}
              Sign Up
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <ReserveSpot
          spotId={parseInt(spotId, 10)}
          totalOccupantsAllowed={spot[`${spotId}`]?.total_occupancy}
          price={spot[`${spotId}`]?.price_per_day}
        />
      );
    }
  };

  let petsAllowed;
  let hasAc;
  let hasTv;
  let hasWifi;

  if (spot[`${spotId}`]?.pets_allowed === "True") {
    petsAllowed = "Yes";
  } else {
    petsAllowed = "No";
  }

  if (spot[`${spotId}`]?.has_ac === "True") {
    hasAc = "Yes";
  } else {
    hasAc = "No";
  }

  if (spot[`${spotId}`]?.has_tv === "True") {
    hasTv = "Yes";
  } else {
    hasTv = "No";
  }

  if (spot[`${spotId}`]?.has_wifi === "True") {
    hasWifi = "Yes";
  } else {
    hasWifi = "No";
  }

  let spotDiv = !spot[`${spotId}`] ? null : (
    <div className="spotPageContainer">
      <div className="spotPageNavBArContainerParent">
        <NavBar spotPage={true} />
      </div>
      <div className="spotNameAndImageSection">
        <div id="spotNameSpotPage">{spot[`${spotId}`]?.name}</div>
        <div className="spotPageImagesSection">
          <div
            style={{
              width: "49%",
              height: "357px",
              backgroundImage: `url(${spot[`${spotId}`]?.images[0]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "12px",
            }}
          ></div>
          <div
            style={{
              width: "49%",
              height: "357px",
              backgroundImage: `url(${spot[`${spotId}`]?.images[1]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "12px",
            }}
          ></div>
        </div>
      </div>
      <div className="spotInfoAndReserveOrEditContainer">
        <div className="spotDescriptionAndInfoDiv">
          <div className="spotDetailsTitleAndStats">
            <h2>
              {spot[`${spotId}`]?.type} hosted by {spot[`${spotId}`]?.host_name}
            </h2>
            <div className="spotStatContainer">
              Total Bathrooms {spot[`${spotId}`]?.total_bathrooms} - Total
              Bedrooms {spot[`${spotId}`]?.total_bedrooms} - Total Occupants
              Allowed {spot[`${spotId}`]?.total_occupancy}
            </div>
            <div className="spotStatContainerPetsAllowed">
              <div>Pets Allowed: {petsAllowed}</div>
              <div>Has Ac: {hasAc}</div>
              <div>Has Wifi: {hasWifi}</div>
              <div>Has TV: {hasTv}</div>
            </div>
          </div>
          <div className="reservationAndCancelationTextContainer">
            <div className="doorAndSelfTextContainer">
              {" "}
              <BsDoorOpen id="doorIcon" /> Self Check In{" "}
            </div>
            <div className="checkInYouselfText">
              Check yourself by showing up.
            </div>
            <div className="calendarAndCancelationText">
              {" "}
              <BsCalendarDate id="calendarIcon" /> Free cancellation before
              start date.{" "}
            </div>
          </div>
          <div className="reservationAndCancelationTextContainer">
            <div className="doorAndSelfTextContainer">
              {" "}
              <FaAddressCard
                style={{ fontSize: "25px", marginRight: "15px" }}
              />{" "}
              Address: {spot[`${spotId}`]?.address}{" "}
            </div>
            <div className="calendarAndCancelationText">
              {" "}
              <GiVacuumCleaner
                style={{ fontSize: "25px", marginRight: "15px" }}
              />{" "}
              Don't worry about cleaning! Daytrip cleaning service on us.
            </div>
          </div>
          <div className="spotDescriptionContainer">
            {spot[`${spotId}`]?.description}
          </div>
        </div>
        <div className="editDeleteOrReserveSection">
          {user?.id === parseInt(spot[`${spotId}`]?.host_id, 10) ? (
            <EditSpot spot={spot} spotId={spotId} />
          ) : (
            isUserLoggedIn()
          )}
        </div>
      </div>
      <div id="locationParentContainer">
        <div id="locationHeader">Where you'll be</div>
      </div>
      <div id="mapsParentContainerSpotPage">
        <div id="mapsContainerSpotPage">
          <Maps
            apiKey={googleMapsApiKey}
            center={{
              lng: spot[`${spotId}`].longitude,
              lat: spot[`${spotId}`].latitude,
            }}
            singleSpot={true}
            zoom={12}
          />
        </div>
      </div>
      {spot[`${spotId}`].reviews.length > 0 && (
        <Reviews reviews={spot[`${spotId}`].reviews} />
      )}
    </div>
  );

  if (!spotsLoaded) {
    return null;
  }
  if (!spot[`${spotId}`]) {
    return null;
  }
  if (!googleMapsApiKey) {
    return null;
  }

  return (
    <>
      {spot[`${spotId}`] === undefined ? (
        <div>Spot Does not Exist</div>
      ) : (
        spotDiv
      )}
      {spot[`${spotId}`] !== undefined && <Footer />}
    </>
  );
};

export default Spot;
