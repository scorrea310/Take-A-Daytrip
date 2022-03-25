import "./PersonalInfo.css"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import { BsChevronRight } from "react-icons/bs"
import { useHistory } from "react-router-dom"

const PersonalInfo = () => {

    const history = useHistory()

    return (
        <div className="personalInfoPage">
            <NavBar />
            <div className="personalInfoMainContent">
                <div className="personalInfoContainer">
                    <div className="page-path-personal-info">
                        <div onClick={() => history.push("/account")} id="account-text-personal-info-page">Account</div>
                        <div><BsChevronRight id="right-arrow" /></div>
                        <div id="personal-info-text-personal-page">Personal Info</div>
                    </div>
                    <div id="personal-info-text-personal-info-page">Personal Info</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default PersonalInfo;