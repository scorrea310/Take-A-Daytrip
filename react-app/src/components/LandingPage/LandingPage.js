import NavBar from "../NavBar/NavBar"
import "./LandingPage.css"
import Button from "../common/Button/Button"
import CategoryCard from "./CategoryCard"
import Footer from "../Footer/Footer"
import { useHistory } from "react-router-dom"

const LandingPage = () => {

    //outdoors, apartments, house, unique 
    const history = useHistory()
    return (
        <div className="landingPage">
            <NavBar landingPage={true} />
            <div className="landingPageBigImageContainer">
                <div className="landingPageBigImageAndButtonContainer">
                    <div className="notSureWhereText">Not sure where to go? Perfect.</div>
                    <Button type={"Button"} className={"imFlexibleButton"} label={"I'm Flexible"} onClick={() => history.push("/allspots")} />
                </div>
            </div>
            <div className="landingPageCategorySection">
                <div className="categorySectionContainer">
                    <div className="inspritationForYourText">Inspiration for your next trip</div>
                    <div className="landingPageCardSection">
                        <CategoryCard firstCard={true} picture={"outdoor"} historyUrl={"/outdoors"} />
                        <CategoryCard secondCard={true} picture={"house"} historyUrl={"/houses"} />
                        <CategoryCard thirdCard={true} picture={"apartment"} historyUrl={"/apartments"} />
                        <CategoryCard rightCard={true} picture={"unique experience"} historyUrl={"/unique"} />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}



export default LandingPage