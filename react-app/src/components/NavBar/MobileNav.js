import "./MobileNav.css"
import { useSelector } from 'react-redux';
import { BiUserCircle } from "react-icons/bi"
import { MdEmojiPeople } from "react-icons/md"
import { MdOutlineAppRegistration } from "react-icons/md"


const MobileNav = () => {

    const session = useSelector((state) => state.session.user);

    const signedOutOptions = (
        <div className="signedOutMobileNavMainContent">
            <div className="mobileNavUnit demo">
                <MdEmojiPeople id="demoUserIcon" />
                <div className="mobileNavUnitText">Demo User</div>
            </div>
            <div className="mobileNavUnit login">
                <BiUserCircle id="loginIconMobileNav" />
                <div className="mobileNavUnitText">Log In</div>
            </div>
            <div className="mobileNavUnit register">
                <MdOutlineAppRegistration id="registerIconMobileNav" />
                <div className="mobileNavUnitText">Register</div>
            </div>
        </div>
    )

    return (
        <div className="mobileNav">
            {!session && signedOutOptions}
        </div>
    )
}

export default MobileNav;