import "./NavBar.css"
import { BiMenu } from "react-icons/bi"
import { FaRegUserCircle } from "react-icons/fa"
import { useState } from "react"

const NavBar = ({ landingPage }) => {

    const [profileModal, setProfileModal] = useState(false)

    // const searchStay = (
    //     <div className="searchStayContainer">
    //         <div class="searchStayForm"> Hello
    //         </div>
    //     </div>
    // )





    return (
        <>
            <div className="NavBarContainer">
                <div className="centerNavBarContainer">
                    <div className="navLogoContainer">
                        <div id="navLogo" ></div>
                        <div className="takeADayTripText">Take A Daytrip</div>
                    </div>
                    <div className="placesToStayTextContainer"> Places to Stay
                        {/* <div id="placesToStayBottomBorder"></div> */}
                    </div>
                    <div className="profileButtonContainer">
                        <div className="navBarProfileButton" onClick={() => setProfileModal(!profileModal)}>
                            <BiMenu style={{ fontSize: "22px", marginRight: "5px" }} />
                            <FaRegUserCircle style={{ fontSize: "22px" }} />
                        </div>

                    </div>

                </div>
            </div>
            {profileModal ? <div style={{ marginTop: "100px" }}>hello</div> : null}
            {/* {landingPage ? searchStay : null} */}
        </>
    )
}

export default NavBar;