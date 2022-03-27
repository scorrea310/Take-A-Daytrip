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
import OutsideClickHandler from 'react-outside-click-handler';
import { useLayoutEffect } from "react"
import { setModals } from "../../store/LoginAndRegisterModals"
import { useDispatch, useSelector } from 'react-redux';

const NavBar = ({ landingPage, spotPage, addspotPage, spotListingsPage }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [profileModal, setProfileModal] = useState(false);
    const profile_image = useSelector((state) => state.session?.user?.profile_image);
    const session = useSelector((state) => state.session.user);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignupModal] = useState(false);

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

    useEffect(() => {

        dispatch(setModals(setShowLoginModal, setShowSignupModal))
    }, [dispatch])

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
                        <OutsideClickHandler onOutsideClick={() => {
                            setProfileModal(false)
                        }}>
                            <div className="navBarProfileButton" onClick={() => setProfileModal(!profileModal)} >
                                <BiMenu style={{ fontSize: "25px", marginRight: "10px" }} />
                                {session?.profile_image === null || session === null ? <FaRegUserCircle style={{ fontSize: "25px" }} /> : <div style={{ backgroundImage: `url(${profile_image})`, height: "30px", width: "30px", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "50%" }} ></div>}

                            </div>
                            {profileModal ? <ProfileModal profileModal={profileModal} setShowSignupModal={setShowSignupModal} setShowLoginModal={setShowLoginModal} setProfileModal={setProfileModal} /> : null}

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
                        </OutsideClickHandler>
                    </div>

                </div>

            </div>
        </>
    )
}

export default NavBar;