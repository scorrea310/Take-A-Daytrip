import NavBar from "../NavBar/NavBar"
import "./MyTrips.css"
import ReservedSpotCard from "./ReservedSpotCard"
import { loadreservationsthunk } from "../../store/reservationsReducer";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MyTrips = ({ reservationsLoaded }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [isLoaded, setIsloaded] = useState(false)
    const reservations = useSelector((state) => state.reservationsReducer);



    useEffect(() => {
        dispatch(loadreservationsthunk(sessionUser.id)).then(() => {
            console.log("ksjdbc")
            setIsloaded(true)
        })
    }, [dispatch])


    if (!isLoaded) {
        return null
    } else {
        console.log(reservations, "909090909")
        // reservationsArray = reservations.values()
        console.table(reservations)
    }

    return (

        <div className="MyTripsPageContainer">
            <NavBar />
            <div className="mainContentTripsPage">
                <div className="TripsTextTripsPage">Trips</div>
                <div className="tripsSpotCardSection">
                    {Object.values(reservations).length > 0 && Object.values(reservations).map((reservation) => {
                        return <ReservedSpotCard key={reservation.id} reservation={reservation} />
                    })}
                    {Object.values(reservations).length === 0 && <div className="noTripsSection">No trips booked...yet!</div>}
                </div>
            </div>

        </div>
    )
}




export default MyTrips