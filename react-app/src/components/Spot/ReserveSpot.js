import "./ReserveSpot.css"
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { creatReservationThunk } from "../../store/reservationsReducer";
import { updateReservationThunk } from "../../store/reservationsReducer";
import { useHistory } from "react-router-dom";
const ReserveSpot = ({ price, totalOccupantsAllowed, spotId, editModal, currentReservation, setShowEditModal }) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);
    const [totalOccupancy, setTotalOccupancy] = useState(0)
    const today = new Date()
    const [startDate, setStartDate] = useState(new Date());



    const handleDateChange = (date) => {
        setStartDate(date)
        // console.log(typeof date)
        // console.log(typeof new Date(date))
    }


    const handleReservation = (e) => {
        e.preventDefault()

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



    const editReservation = (e) => {
        e.preventDefault()

        const reservationFormObj = {
            number_of_guests: parseInt(totalOccupancy, 10),
            spot_id: parseInt(currentReservation.spot_id, 10),
            reservation: startDate.toISOString().split('T')[0],
            price: parseFloat(price),
            user_id: userId
        }

        console.log(reservationFormObj)

        dispatch(updateReservationThunk(reservationFormObj, currentReservation.id)).then(() => {
            setShowEditModal(false)
        })
    }



    useEffect(() => {

        if (editModal) {
            setTotalOccupancy(parseInt(currentReservation.number_of_guests, 10))

        } else {
            setTotalOccupancy(0)
        }
    }, [])

    // console.log(typeof totalOccupantsAllowed)

    console.log(totalOccupantsAllowed)

    return (
        <div className="reserveASpotContainer">
            <form className="makeReservationMainContent" onSubmit={editModal ? editReservation : handleReservation}>
                <div className="reservePricePerDayContainer"> <div style={{ fontSize: "20px", marginRight: "5px" }}>${price}</div>/ day</div>
                <div className="reserveMainBox">
                    <div className="reservationDateAndDatePickerContainer"> <div style={{ marginRight: "10px", marginLeft: "10px" }}>Reservation:</div> <div><DatePicker minDate={today} selected={startDate} onChange={handleDateChange} /></div></div>

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