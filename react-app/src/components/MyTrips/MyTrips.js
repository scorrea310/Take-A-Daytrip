import NavBar from "../NavBar/NavBar"
import "./MyTrips.css"
import ReservedSpotCard from "./ReservedSpotCard"

const MyTrips = () => {

    return (

        <div className="MyTripsPageContainer">
            <NavBar />
            <div className="mainContentTripsPage">
                <div className="TripsTextTripsPage">Trips</div>
                <div className="tripsSpotCardSection">
                    <ReservedSpotCard />
                </div>
            </div>

        </div>
    )
}




export default MyTrips