import "./NavBar.css"
import { BiMenu } from "react-icons/bi"
import { FaRegUserCircle } from "react-icons/fa"
import { useState, useEffect } from "react"
import ProfileModal from "./ProfileModal"
import { Modal } from '../../context/Modal';
import LoginForm from "../LoginForm/LoginForm"
import SignUpForm from "../SignUpForm/SignUpForm"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"

const NavBar = ({ landingPage, spotPage, addspotPage, spotListingsPage }) => {

    const history = useHistory()
    const [profileModal, setProfileModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignupModal] = useState(false)

    let centerNavBarClassName;
    let navBarContainerClassName;
    //spotPageNavBarContainer
    if (spotPage === true) {
        centerNavBarClassName = "spotPageNavBar"
        navBarContainerClassName = "spotPageNavBarContainer"
    } else {

        centerNavBarClassName = "centerNavBarContainer"
    }

    if (addspotPage) {
        centerNavBarClassName = "addSpotSlidesNavBar"
    } else if (!addspotPage && !spotPage) {
        centerNavBarClassName = "centerNavBarContainer"
    }

    if (landingPage) {
        navBarContainerClassName = "landingPageNavBarContainer"
    } else if (!landingPage && !spotPage) {
        navBarContainerClassName = "NavBarContainer"
    }

    if (spotListingsPage) {
        centerNavBarClassName = "centerNavBarContainerListingsPage"
    } else if (!addspotPage && !spotPage && !spotListingsPage) {
        centerNavBarClassName = "centerNavBarContainer"
    }

    return (
        <>
            <div className={navBarContainerClassName}>
                <div className={centerNavBarClassName}>
                    <div className="navLogoContainer">
                        <div id="navLogo" ></div>
                        <NavLink to="/" className="takeADayTripText">Take A Daytrip</NavLink>
                    </div>
                    <div className="placesToStayTextContainer"> <div className="placesToStayButtonContainer" onClick={() => history.push("/allspots")}>Places to Stay</div>
                        {/* <div id="placesToStayBottomBorder"></div> */}
                    </div>
                    <div className="profileButtonContainer" >
                        <div className="navBarProfileButton" onClick={() => setProfileModal(!profileModal)} >
                            <BiMenu style={{ fontSize: "25px", marginRight: "10px" }} />
                            <FaRegUserCircle style={{ fontSize: "25px" }} />

                        </div>
                        {showLoginModal && (
                            <Modal onClose={() => setShowLoginModal(false)}>
                                <LoginForm setShowLoginModal={setShowLoginModal} />
                            </Modal>
                        )}
                        {showSignUpModal && (
                            <Modal idName={"signupModal"} onClose={() => setShowSignupModal(false)}>
                                <SignUpForm setShowSignupModal={setShowSignupModal} />
                            </Modal>
                        )}

                    </div>

                </div>
                {profileModal ? <ProfileModal profileModal={profileModal} setShowSignupModal={setShowSignupModal} setShowLoginModal={setShowLoginModal} setProfileModal={setProfileModal} /> : null}
            </div>
        </>
    )
}

export default NavBar;