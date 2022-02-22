import "./ReserveSpot.css"
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { creatReservationThunk } from "../../store/reservationsReducer";


const ReserveSpot = ({ price, totalOccupantsAllowed, spotId }) => {

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);
    const [totalOccupancy, setTotalOccupancy] = useState(0)
    const today = new Date()
    const [startDate, setStartDate] = useState(new Date());

    console.log(startDate.getMonth())

    const handleDateChange = (date) => {
        setStartDate(date)
        // console.log(typeof date)
        // console.log(typeof new Date(date))
    }

    const dateInPast = function (firstDate, secondDate) {
        firstDate.setHours(0, 0, 0, 0)
        firstDate.setSeconds(0, 0)
        firstDate.setMinutes(0)

        secondDate.setHours(0, 0, 0, 0)
        secondDate.setSeconds(0, 0)
        secondDate.setMinutes(0)

        // console.log(firstDate, secondDate)

        if (firstDate < secondDate) {
            return true;
        }

        return false;
    };

    const handleReservation = (e) => {
        e.preventDefault()

        console.log(startDate.toISOString().split('T')[0])

        const reservationFormObj = {
            number_of_guests: parseInt(totalOccupancy, 10),
            spot_id: spotId,
            reservation: startDate.toISOString().split('T')[0],
            price: parseFloat(price)
        }

        dispatch(creatReservationThunk(reservationFormObj, userId))



    }

    return (
        <div className="reserveASpotContainer">
            <form className="makeReservationMainContent" onSubmit={handleReservation}>
                <div className="reservePricePerDayContainer"> <div style={{ fontSize: "20px", marginRight: "5px" }}>${price}</div>/ day</div>
                <div className="reserveMainBox">
                    <div className="reservationDateAndDatePickerContainer"> <div style={{ marginRight: "10px", marginLeft: "10px" }}>Reservation:</div> <div><DatePicker minDate={today} selected={startDate} onChange={handleDateChange} /></div></div>

                    <div className="addReservationNumberofGuestsText">Number of Guests <input
                        value={totalOccupancy}
                        type="number"
                        onChange={(e) => setTotalOccupancy(e.target.value)}
                        required={true}
                        min="0"
                        className="numberOfGuestsReserve"
                        max={totalOccupantsAllowed}
                    >
                    </input></div>
                </div>
                <Button disable={!dateInPast(startDate, today)} type={"submit"} label={"Reserve"} className={"addReserveationButton"} />
            </form>
        </div >
    )
}

export default ReserveSpot