import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { useHistory } from "react-router-dom";

const AccountCard = ({ placesYouBeen, yourListings, personalInfo }) => {
  const history = useHistory();

  return (
    <div
      onClick={() => {
        if (placesYouBeen) history.push("/account/places-you've-been");

        if (personalInfo) history.push("/account/personal-info");

        if (yourListings) history.push("account/manage-listings");
      }}
      className="AccountCardContainer"
    >
      <div>
        {placesYouBeen && <GiCommercialAirplane id="places-youve-been-icon" />}
        {yourListings && <MdOutlineMapsHomeWork id="your-listings-icon" />}
        {personalInfo && <FaRegAddressCard id="personal-info-icon" />}
      </div>
      <div>
        {placesYouBeen && (
          <div>
            <div className="account-card-title">Places you've been</div>
            <div className="account-card-description">
              See the trips you've been to.
            </div>
          </div>
        )}
        {yourListings && (
          <div>
            <div className="account-card-title">Manage Listings</div>
            <div className="account-card-description">
              View and Manage your listings.
            </div>
          </div>
        )}
        {personalInfo && (
          <div>
            <div className="account-card-title">Account Info</div>
            <div className="account-card-description">
              See and Edit your account details.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountCard;
