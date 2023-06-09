import NavBar from "../NavBar/NavBar";
import "./SpotListings.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotListingCard from "./SpotListingCard";
import allSpotsImage from "../../images/allSpots.jpeg"
import apartmentsImage from "../../images/apartmentSpots.jpeg"
import uniqueImage from "../../images/uniqueSpotPage.jpeg"
import outdoorImage from "../../images/outdoorsSpotPage.jpeg"
import houseImage from "../../images/houseSpotPage.jpeg"
import Maps from "../Maps/Maps";

const SpotListings = ({ allSpots, outdoors, apartments, houses, unique }) => {
    const sessionUser = useSelector((state) => state.session.user);
    const [googleMapsApiKey, setGoogleMapsApiKey] = useState(false);

    useEffect(() => {
        if (googleMapsApiKey) {
        return;
        }
        (async () => {
            const res = await fetch('/api/maps', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ key: "key" }),
            });
        
            const data = await res.json();
        
            setGoogleMapsApiKey(data.key)
        })();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const spots = useSelector((state) => state.spotReducer)
    const apartmentsList = useSelector((state)=> {
        return Object.values(state.spotReducer).filter((spot)=> {
            if (sessionUser) {
                return +spot.host_id !== sessionUser?.id && spot.type === "Apartment"
            } 
            return spot.type === "Apartment"
        })
    })
    const outdoorList = useSelector((state)=> {
        return Object.values(state.spotReducer).filter((spot)=> {
            if (sessionUser) {
                return +spot.host_id !== sessionUser?.id && spot.type === "Outdoor"
            } 
            return spot.type === "Outdoor"
        })
    })
    const housesList = useSelector((state)=> {
        return Object.values(state.spotReducer).filter((spot)=> {
            if (sessionUser) {
                return +spot.host_id !== sessionUser?.id && spot.type === "House"
            } 
            return spot.type === "House"
        })
    })
    const uniqueList = useSelector((state)=> {
        return Object.values(state.spotReducer).filter((spot)=> {
            if (sessionUser) {
                return +spot.host_id !== sessionUser?.id && spot.type === "Unique Experience"
            } 
            return spot.type === "Unique Experience"
        })
    })
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

    if (!googleMapsApiKey) {
        return null;
    }
    console.log(googleMapsApiKey, "apikeyyyyyyy")
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
                        if (sessionUser) {
                            if (+spot.host_id !== sessionUser?.id) {
                                return <SpotListingCard key={spot.id} spot={spot} />

                            }
                        } else {
                            return <SpotListingCard key={spot.id} spot={spot} />
                        }

                    })}
                    {apartments && Object.values(spots).map((spot) => {
                        if (sessionUser) {
                            if (+spot.host_id !== sessionUser?.id && spot.type === "Apartment") {
                                return <SpotListingCard key={spot.id} spot={spot} />

                            }
                        } else if (spot.type === "Apartment") {
                            return <SpotListingCard key={spot.id} spot={spot} />
                        }
                    })}
                    {outdoors && Object.values(spots).map((spot) => {
                        if (sessionUser) {
                            if (+spot.host_id !== sessionUser?.id && spot.type === "Outdoor") {
                                return <SpotListingCard key={spot.id} spot={spot} />

                            }
                        } else if (spot.type === "Outdoor") {
                            return <SpotListingCard key={spot.id} spot={spot} />
                        }
                    })}
                    {houses && Object.values(spots).map((spot) => {
                        if (sessionUser) {
                            if (+spot.host_id !== sessionUser?.id && spot.type === "House") {
                                return <SpotListingCard key={spot.id} spot={spot} />

                            }
                        } else if (spot.type === "House") {
                            return <SpotListingCard key={spot.id} spot={spot} />
                        }
                    })}
                    {unique && Object.values(spots).map((spot) => {
                        if (sessionUser) {
                            if (+spot.host_id !== sessionUser?.id && spot.type === "Unique Experience") {
                                return <SpotListingCard key={spot.id} spot={spot} />

                            }
                        } else if (spot.type === "Unique Experience") {
                            return <SpotListingCard key={spot.id} spot={spot} />
                        }
                    })}
                </div>
                <div className="listingsImageContainer">
                    {allSpots && <Maps apiKey={googleMapsApiKey} center={{lat: 33.90831, lng: -118.2581}} spotListingsPage={true} spots={Object.values(spots)} zoom={8}/>}
                    {apartments && <Maps apiKey={googleMapsApiKey} center={{lat: 33.90831, lng: -118.2581}} spotListingsPage={true} spots={apartmentsList} zoom={8}/>}
                    {outdoors && <Maps apiKey={googleMapsApiKey} center={{lat: 33.90831, lng: -118.2581}} spotListingsPage={true} spots={outdoorList} zoom={8}/>}
                    {houses && <Maps apiKey={googleMapsApiKey} center={{lat: 33.90831, lng: -118.2581}} spotListingsPage={true} spots={housesList} zoom={8}/>}
                    {unique && <Maps apiKey={googleMapsApiKey} center={{lat: 33.90831, lng: -118.2581}} spotListingsPage={true} spots={uniqueList} zoom={7}/>}
                </div>
            </div>
        </div>
    )
}



export default SpotListings