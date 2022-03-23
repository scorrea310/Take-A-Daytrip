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
    const today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)


    useEffect(() => {
        dispatch(loadreservationsthunk(sessionUser.id)).then(() => {

            setIsloaded(true)
        })

        window.scrollTo(0, 0)
    }, [dispatch, sessionUser.id])


    if (!isLoaded) {
        return null
    }

    return (

        <div className="MyTripsPageContainer">
            <NavBar />
            <div className="mainContentTripsPage">
                <div className="TripsTextTripsPage"> Upcoming Trips</div>
                <div className="tripsSpotCardSection">
                    {Object.values(reservations).length > 0 && Object.values(reservations).map((reservation) => {
                        let startDate = reservation.check_in.split(" ")
                        let reservationCheckInDateObject = new Date(startDate[0].replace(/-/g, '\/'));
                        reservationCheckInDateObject.setMilliseconds(0)

                        if (reservationCheckInDateObject.getTime() >= today.getTime()) {

                            return <ReservedSpotCard key={reservation.id} reservation={reservation} />
                        }
                    })}
                    {Object.values(reservations).length === 0 && <div className="noTripsSection">No trips booked...yet!</div>}
                </div>
            </div>

        </div>
    )
}




export default MyTrips