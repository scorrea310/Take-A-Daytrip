import NavBar from "../NavBar/NavBar"
import "./MyTrips.css"
import ReservedSpotCard from "./ReservedSpotCard"
import { loadreservationsthunk } from "../../store/reservationsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { formatDistanceToNow, isPast, isToday, compareAsc } from "date-fns";

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
    const [upcomingReservations, setUpcomingReservations] = useState(false)

    useEffect(() => {
        dispatch(loadreservationsthunk(sessionUser.id)).then((reservations) => {
            let upcomingReservationsArray = Object.values(reservations).filter((reservation) => {
                if (!isPast(new Date(reservation.check_in)) || isToday(new Date(reservation.check_in))) {
                    return reservation;
                }
            })

            setUpcomingReservations(upcomingReservationsArray)
            setIsloaded(true)
        })
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
                    {upcomingReservations.length > 0 && upcomingReservations.map((reservation) => {
                        return <ReservedSpotCard key={reservation.id} reservation={reservation} />
                    })}
                    {upcomingReservations.length === 0 && <div className="noTripsSection">No trips booked...yet!</div>}
                </div>
            </div>

        </div>
    )
}


export default MyTrips