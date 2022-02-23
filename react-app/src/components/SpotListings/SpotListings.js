import NavBar from "../NavBar/NavBar";
import "./SpotListings.css"
import { useState } from "react";
import { useSelector } from "react-redux";
import SpotListingCard from "./SpotListingCard";

const SpotListings = ({ allSpots }) => {

    const spots = useSelector((state) => state.spotReducer)
    let imageUrl;


    /*
    go through redux store and get spot based on category. 

    */

    return (
        <div className="spotListingsPage">
            <NavBar spotListingsPage={true} />
            <div className="listingsAndImageMainContainer">
                <div className="listingsContainer">
                    {allSpots && Object.values(spots).map((spot) => {
                        return <SpotListingCard key={spot.id} spot={spot} />
                    })}

                </div>
                <div className="listingsImageContainer"></div>
            </div>
        </div>
    )
}



export default SpotListings