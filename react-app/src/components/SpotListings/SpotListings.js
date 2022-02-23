import NavBar from "../NavBar/NavBar";
import "./SpotListings.css"
import { useState } from "react";
import { useSelector } from "react-redux";
import SpotListingCard from "./SpotListingCard";
import allSpotsImage from "../../images/allSpots.jpeg"
import apartmentsImage from "../../images/apartmentSpots.jpeg"
import uniqueImage from "../../images/uniqueSpotPage.jpeg"
import outdoorImage from "../../images/outdoorsSpotPage.jpeg"
import houseImage from "../../images/houseSpotPage.jpeg"

const SpotListings = ({ allSpots, outdoors, apartments, house, unique }) => {

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
    } else if (house) {
        imageUrl = houseImage
    }


    /*
    go through redux store and get spot based on category. 
    import uniqueExperience from "../../images/theoneSkydiving.jpeg"
    import houseUrlImage from "../../images/houseImage.jpeg"
    import apartmentUrlImage from "../../images/logan_apartments.6.jpg"

    type: "Apartment"
    */


    return (
        <div className="spotListingsPage">
            <NavBar spotListingsPage={true} />
            <div className="listingsAndImageMainContainer">
                <div className="listingsContainer">
                    {allSpots && Object.values(spots).map((spot) => {
                        return <SpotListingCard key={spot.id} spot={spot} />
                    })}
                    {apartments && Object.values(spots).map((spot) => {
                        if (spot.type === "Apartment") {
                            return <SpotListingCard key={spot.id} spot={spot} />
                        }
                    })}
                    {outdoors && Object.values(spots).map((spot) => {
                        if (spot.type === "Outdoor") {
                            return <SpotListingCard key={spot.id} spot={spot} />
                        }
                    })}
                </div>
                <div className="listingsImageContainer">
                    <div style={{ width: "90%", height: "90%", backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", borderRadius: "12px", backgroundPosition: "center" }}></div>
                </div>
            </div>
        </div>
    )
}



export default SpotListings