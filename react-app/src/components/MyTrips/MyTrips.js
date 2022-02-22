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
    const reservations = useSelector((state) => state.reservationsReducer?.reservations);

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
    }

    return (

        <div className="MyTripsPageContainer">
            <NavBar />
            <div className="mainContentTripsPage">
                <div className="TripsTextTripsPage">Trips</div>
                <div className="tripsSpotCardSection">
                    {Object.values(reservations).map((reservation) => {
                        return <ReservedSpotCard reservation={reservation} />
                    })}

                </div>
            </div>

        </div>
    )
}




export default MyTrips