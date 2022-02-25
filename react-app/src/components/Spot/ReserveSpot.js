import "./ReserveSpot.css"
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { creatReservationThunk } from "../../store/reservationsReducer";
import { updateReservationThunk } from "../../store/reservationsReducer";
import { useHistory } from "react-router-dom";
import DatePicker from 'react-date-picker';

const ReserveSpot = ({ price, totalOccupantsAllowed, spotId, editModal, currentReservation, setShowEditModal, reservationDate }) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);
    const [totalOccupancy, setTotalOccupancy] = useState(0)
    const today = new Date()
    const [startDate, setStartDate] = useState(new Date());
    const [sameDayError, setSameDayError] = useState(false);
    const [pastDateErrors, setpastDateErrors] = useState(false)
    const [notDateError, setNotDateError] = useState(false)
    const [nullDateError, setNullDateError] = useState(false)


    const dateInPast = function (firstDate, presentDate) {
        firstDate.setHours(0, 0, 0, 0)
        firstDate.setSeconds(0, 0)
        firstDate.setMinutes(0)
        presentDate.setHours(0, 0, 0, 0)
        presentDate.setSeconds(0, 0)
        presentDate.setMinutes(0)

        if (firstDate < presentDate) {
            return true;
        }
        return false;
    };

    const handleDateChange = (date) => {


        setStartDate(date)
    }

    const handleRightDateInput = (startDate) => {
        if (typeof startDate !== "object") {
            return false
        } else {
            return true
        }
    }


    const handleReservation = (e) => {
        e.preventDefault()

        if (startDate === null) {
            setNullDateError(true)
            return;
        }

        if (startDate.toDateString() === "Invalid Date") {
            setNotDateError(true)
            return;
        }

        if (dateInPast(startDate, today) === true) {
            setpastDateErrors(true)
        } else {
            const reservationFormObj = {
                number_of_guests: parseInt(totalOccupancy, 10),
                spot_id: spotId,
                reservation: startDate.toISOString().split('T')[0],
                price: parseFloat(price)
            }

            dispatch(creatReservationThunk(reservationFormObj, userId)).then(() => {
                history.push("/mytrips")
            })
        }

    }



    const editReservation = (e) => {
        e.preventDefault()

        if (startDate === null) {
            setNullDateError(true)
            return;
        }

        if (startDate.toDateString() === "Invalid Date") {
            setNotDateError(true)
            return;
        }

        if (dateInPast(startDate, today) === true) {
            setpastDateErrors(true)
        } else {

            const reservationFormObj = {
                number_of_guests: parseInt(totalOccupancy, 10),
                spot_id: parseInt(currentReservation.spot_id, 10),
                reservation: startDate.toISOString().split('T')[0],
                price: parseFloat(price),
                user_id: userId
            }



            dispatch(updateReservationThunk(reservationFormObj, currentReservation.id)).then(() => {
                setShowEditModal(false)
            })
        }

    }



    useEffect(() => {

        if (editModal) {
            setTotalOccupancy(parseInt(currentReservation.number_of_guests, 10))
            setStartDate(new Date(reservationDate))

        } else {
            setTotalOccupancy(0)
            setStartDate(new Date())
        }
    }, [])





    return (
        <div className="reserveASpotContainer">
            {pastDateErrors && <div style={{ color: "red", fontSize: "13px" }}>Enter a current or upcoming valid date.</div>}
            {notDateError && <div style={{ color: "red", fontSize: "13px" }}>You must enter a valid date.</div>}
            {nullDateError && <div style={{ color: "red", fontSize: "13px" }}>Enter a valid date.</div>}
            <form className="makeReservationMainContent" onSubmit={editModal ? editReservation : handleReservation}>
                <div className="reservePricePerDayContainer"> <div style={{ fontSize: "20px", marginRight: "5px" }}>${price}</div>/ day</div>
                <div className="reserveMainBox">
                    <div className="reservationDateAndDatePickerContainer"> <div style={{ marginRight: "10px", marginLeft: "10px" }}>Reservation:</div> <div style={{ width: "fit-content" }}><DatePicker onChange={handleDateChange} value={startDate} />
                    </div>
                    </div>

                    <div className="addReservationNumberofGuestsText">Number of Guests
                        <input
                            value={totalOccupancy}
                            type="number"
                            onChange={(e) => setTotalOccupancy(e.target.value)}
                            required={true}
                            min="0"
                            className="numberOfGuestsReserve"
                            max={totalOccupantsAllowed}
                        >
                        </input>
                    </div>
                </div>
                <Button type={"submit"} label={"Reserve"} className={"addReserveationButton"} />
            </form>
        </div >
    )
}

export default ReserveSpot