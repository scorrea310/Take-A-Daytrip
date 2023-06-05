import NavBar from "../NavBar/NavBar"
import "./AccountPage.css"
import { useDispatch, useSelector } from "react-redux";
import AccountCard from "./AccountCard";
import Footer from "../Footer/Footer"
import { useEffect } from "react";

const AccountPage = () => {
    const sessionUser = useSelector((state) => state.session.user)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="accountPage">
            <NavBar />
            <div className="mainContentAccountPage">
                <div className="mainContentContaner">
                    <div className="accountTextAndUsernameEmailContainer">
                        <div id="account-text">Account</div>
                        <div className="userNameAndEmailTitleAccountPage"> <div id="usersNameAccountPage">{sessionUser.name},</div> <div id="userEmailAccountPage">{sessionUser.email}</div></div>
                    </div>
                    <div className="accountCardContainer">
                        <AccountCard personalInfo={true} />
                        <AccountCard yourListings={true} />
                        <AccountCard placesYouBeen={true} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default AccountPage