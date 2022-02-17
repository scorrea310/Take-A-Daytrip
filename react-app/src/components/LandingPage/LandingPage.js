import NavBar from "../NavBar/NavBar"
import "./LandingPage.css"

const LandingPage = () => {


    return (
        <div className="landingPage">
            <NavBar landingPage={true} />
            <div className="landingPageBigImageContainer">
                <div className="landingPageBigImageAndButtonContainer"></div>
            </div>
        </div>
    )
}



export default LandingPage