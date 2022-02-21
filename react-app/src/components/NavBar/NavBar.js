import "./NavBar.css"
import { BiMenu } from "react-icons/bi"
import { FaRegUserCircle } from "react-icons/fa"
import { useState, useEffect } from "react"
import ProfileModal from "./ProfileModal"
import { Modal } from '../../context/Modal';
import LoginForm from "../LoginForm/LoginForm"
import SignUpForm from "../SignUpForm/SignUpForm"
import { NavLink } from "react-router-dom"

const NavBar = ({ landingPage, spotPage }) => {

    const [profileModal, setProfileModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignupModal] = useState(false)

    let centerNavBarClassName;

    if (spotPage) {
        centerNavBarClassName = "spotPageNavBar"
    } else {
        centerNavBarClassName = "centerNavBarContainer"
    }

    return (
        <>
            <div className="NavBarContainer">
                <div className={centerNavBarClassName}>
                    <div className="navLogoContainer">
                        <div id="navLogo" ></div>
                        <NavLink to="/" className="takeADayTripText">Take A Daytrip</NavLink>
                    </div>
                    <div className="placesToStayTextContainer"> Places to Stay
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
                        {profileModal ? <ProfileModal profileModal={profileModal} setShowSignupModal={setShowSignupModal} setShowLoginModal={setShowLoginModal} setProfileModal={setProfileModal} /> : null}
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavBar;