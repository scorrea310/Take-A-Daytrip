import "./ReserveSpot.css"
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../common/Button/Button";

const ReserveSpot = ({ price }) => {

    const today = new Date()
    const [startDate, setStartDate] = useState(new Date());

    console.log(startDate.getMonth())

    const handleDateChange = (date) => {
        setStartDate(date)

    }

    const dateInPast = function (firstDate, secondDate) {
        firstDate.setHours(0, 0, 0, 0)
        firstDate.setSeconds(0, 0)
        firstDate.setMinutes(0)

        secondDate.setHours(0, 0, 0, 0)
        secondDate.setSeconds(0, 0)
        secondDate.setMinutes(0)

        console.log(firstDate, secondDate)

        if (firstDate < secondDate) {
            return true;
        }

        return false;
    };

    const handleReservation = () => {

        // console.log(startDate, today)
        console.log(dateInPast(startDate, today))

    }

    return (
        <div className="reserveASpotContainer">
            <div className="makeReservationMainContent">
                <div className="reservePricePerDayContainer"> <div style={{ fontSize: "20px", marginRight: "5px" }}>${price}</div>/ day</div>
                <div className="reserveMainBox">
                    <div className="reservationDateAndDatePickerContainer"> <div style={{ marginRight: "10px", marginLeft: "10px" }}>Reservation:</div> <div><DatePicker selected={startDate} onChange={handleDateChange} /></div></div>

                    <div className="addReservationNumberofGuestsText">Number of Guests</div>
                </div>
                <Button label={"Reserve"} className={"addReserveationButton"} onClick={handleReservation} />
            </div>
        </div>
    )
}

export default ReserveSpot