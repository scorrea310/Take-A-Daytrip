import NavBar from "../NavBar/NavBar";
import "./SpotListings.css"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SpotListingCard from "./SpotListingCard";
import allSpotsImage from "../../images/allSpots.jpeg"
import apartmentsImage from "../../images/apartmentSpots.jpeg"
import uniqueImage from "../../images/uniqueSpotPage.jpeg"
import outdoorImage from "../../images/outdoorsSpotPage.jpeg"
import houseImage from "../../images/houseSpotPage.jpeg"
import Footer from "../Footer/Footer";
const SpotListings = ({ allSpots, outdoors, apartments, houses, unique }) => {

    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const spots = useSelector((state) => state.spotReducer)
    let imageUrl;

    if (allSpots) {
        imageUrl = allSpotsImage
    } else if (apartments) {
        imageUrl = apartmentsImage
    } else if (unique) {
        imageUrl = uniqueImage
    } else if (outdoors) {
        imageUrl = outdoorImage
    } else if (houses) {
        imageUrl = houseImage
    }


    /*
    go through redux store and get spot based on category. 
    import uniqueExperience from "../../images/theoneSkydiving.jpeg"
    import houseUrlImage from "../../images/houseImage.jpeg"
    import apartmentUrlImage from "../../images/logan_apartments.6.jpg"

    type: "Apartment"
    */

    console.log(sessionUser)

    return (
        <div className="spotListingsPage">
            <NavBar spotListingsPage={true} />
            <div className="spotCategoryTitle">
                {allSpots && <div>All Spots</div>}
                {apartments && <div>Apartments</div>}
                {unique && <div>Unique</div>}
                {outdoors && <div>Outdoors</div>}
                {houses && <div>Houses</div>}
            </div>
            <div className="listingsAndImageMainContainer">
                <div className="listingsContainer">
                    {allSpots && Object.values(spots).map((spot) => {
                        console.log(spot)
                        if (+spot.host_id !== sessionUser.id) {
                            return <SpotListingCard key={spot.id} spot={spot} />

                        }
                    })}
                    {apartments && Object.values(spots).map((spot) => {
                        if (spot.type === "Apartment" && +spot.host_id !== sessionUser.id) {
                            return <SpotListingCard key={spot.id} spot={spot} />;
                        }
                    })}
                    {outdoors && Object.values(spots).map((spot) => {
                        if (spot.type === "Outdoor" && +spot.host_id !== sessionUser.id) {
                            return <SpotListingCard key={spot.id} spot={spot} />
                        }
                    })}
                    {houses && Object.values(spots).map((spot) => {
                        if (spot.type === "House" && +spot.host_id !== sessionUser.id) {
                            return <SpotListingCard key={spot.id} spot={spot} />
                        }
                    })}
                    {unique && Object.values(spots).map((spot) => {
                        if (spot.type === "Unique Experience" && +spot.host_id !== sessionUser.id) {
                            return <SpotListingCard key={spot.id} spot={spot} />
                        }
                    })}
                </div>
                <div className="listingsImageContainer">
                    <div style={{ width: "100%", height: "90%", backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", borderRadius: "12px", backgroundPosition: "center" }}></div>
                </div>
            </div>
        </div>
    )
}



export default SpotListings