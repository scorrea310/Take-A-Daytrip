import NavBar from "../NavBar/NavBar";
import "./ManageListings.css"
import ListingCard from "./ListingCard";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer"
import { useHistory } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs"
import { useEffect } from "react";
import { useState } from "react";
import { loadMyListingsThunk } from "../../store/myListings";

const ManageListings = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const spots = useSelector((state) => state.myListings)
    const mySpotsArray = Object.values(spots)
    const sessionUser = useSelector((state) => state.session.user);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        dispatch(loadMyListingsThunk(sessionUser.id)).then(() => setLoaded(true))
    }, [dispatch, sessionUser.id])

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
                        {mySpotsArray.length > 0 && mySpotsArray.map((spot) => {

                            return <ListingCard key={spot.id} listing={spot} />
                        })}
                        {mySpotsArray.length === 0 && <div> You don't have any listings.</div>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default ManageListings;