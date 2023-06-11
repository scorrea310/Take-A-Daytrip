import "./MobileNav.css";
import { useDispatch, useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";
import { MdEmojiPeople } from "react-icons/md";
import { MdOutlineAppRegistration } from "react-icons/md";
import { login } from "../../store/session";
import { BiBuildingHouse } from "react-icons/bi";
import { MdCardTravel } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";

const MobileNav = ({ setShowLoginModal, setShowSignupModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.user);

  const demoUserLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("demo@aa.io", "password"));
    setShowLoginModal(false);
  };

  const onLogout = async (e) => {
    await dispatch(logout());
  };

  const signedInOptions = (
    <div className="signedInMobileNavMainContent">
      <div
        onClick={() => history.push("/spots/new")}
        className="mobileNavUnit host"
      >
        <BiBuildingHouse className="signedInMobileNavIcon" />
        <div className="mobileNavUnitText">Host a Trip</div>
      </div>
      <div
        onClick={() => history.push("/mytrips")}
        className="mobileNavUnit upcomingTrips"
      >
        <MdCardTravel className="signedInMobileNavIcon" />
        <div className="mobileNavUnitText">Upcoming Trips</div>
      </div>
      <div onClick={() => history.push("/")} className="mobileNavUnit home">
        <AiOutlineHome className="signedInMobileNavIcon" />
        <div className="mobileNavUnitText">Home</div>
      </div>
      <div
        onClick={() => history.push("/account")}
        className="mobileNavUnit profile"
      >
        <RiAccountCircleLine className="signedInMobileNavIcon" />
        <div className="mobileNavUnitText">Profile</div>
      </div>
      <div onClick={onLogout} className="mobileNavUnit logout">
        <RiLogoutBoxRLine className="signedInMobileNavIcon" />
        <div className="mobileNavUnitText">Logout</div>
      </div>
    </div>
  );

  const signedOutOptions = (
    <div className="signedOutMobileNavMainContent">
      <div onClick={demoUserLogin} className="mobileNavUnit demo">
        <MdEmojiPeople id="demoUserIcon" />
        <div className="mobileNavUnitText">Demo User</div>
      </div>
      <div
        onClick={() => {
          setShowLoginModal(true);
        }}
        className="mobileNavUnit login"
      >
        <BiUserCircle id="loginIconMobileNav" />
        <div className="mobileNavUnitText">Log In</div>
      </div>
      <div
        onClick={() => {
          setShowSignupModal(true);
        }}
        className="mobileNavUnit register"
      >
        <MdOutlineAppRegistration id="registerIconMobileNav" />
        <div className="mobileNavUnitText">Register</div>
      </div>
    </div>
  );

  return (
    <div className="mobileNav">
      {!session && signedOutOptions}
      {session && signedInOptions}
    </div>
  );
};

export default MobileNav;
