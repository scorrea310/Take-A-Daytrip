import NavBar from "../NavBar/NavBar";
import "./ManageListings.css"
import ListingCard from "./ListingCard";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer"
import { useHistory } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs"
import { useEffect } from "react";
import { useState } from "react";
import { loadSpotsFunc } from "../../store/spotReducer";

const ManageListings = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const spots = useSelector((state) => state.spotReducer)
    const spotValues = Object.values(spots)
    const sessionUser = useSelector((state) => state.session.user);
    const mySpots = spotValues.filter((spot) => +spot.host_id === sessionUser.id)
    const [loaded, setLoaded] = useState(false);

    /*
    here, instead of dispatching loadSpots again, we dispatch
    load users_listings thunk.

    1. create users_listings reducer
    2. create api routes to get those listings.
    */
    useEffect(() => {
        dispatch(loadSpotsFunc()).then(() => setLoaded(true))
    }, [dispatch])

    if (!loaded) return null

    return (
        <div className="manageListingsPage">
            <NavBar />
            <div className="myListingsContainer">
                <div className="listingsMainContent">
                    <div className="page-path-manage-listings">
                        <div onClick={() => history.push("/account")} id="account-text-personal-info-page">Account</div>
                        <div><BsChevronRight id="right-arrow" /></div>
                        <div id="personal-info-text-personal-page">Manage Listings</div>
                    </div>
                    <div id="YourListingsText"> Your Listings</div>
                    <div className="yourlistingsContainer">
                        {mySpots.length > 0 && mySpots.map((spot) => {
                            if (+spot.host_id === sessionUser.id) {
                                return <ListingCard key={spot.id} listing={spot} />
                            }
                        })}
                        {mySpots.length === 0 && <div> You don't have any listings.</div>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default ManageListings;