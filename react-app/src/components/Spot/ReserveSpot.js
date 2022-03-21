import "./ReserveSpot.css"
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { creatReservationThunk } from "../../store/reservationsReducer";
import { updateReservationThunk } from "../../store/reservationsReducer";
import { useHistory } from "react-router-dom";
import DatePicker from 'react-date-picker';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const ReserveSpot = ({ price, totalOccupantsAllowed, spotId, editModal, currentReservation, setShowEditModal, reservationDate }) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);
    const [totalOccupancy, setTotalOccupancy] = useState(1)
    const today = new Date()
    const [startDate, setStartDate] = useState(new Date());
    const [state, setState] = useState({ start_date: "", end_date: "" })
    const [sameDayError, setSameDayError] = useState(false);
    const [pastDateErrors, setpastDateErrors] = useState(false)
    const [notDateError, setNotDateError] = useState(false)
    const [nullDateError, setNullDateError] = useState(false)
    const [priceState, setPriceState] = useState("")
    const [calendarErrors, setCalendarErrors] = useState(false)


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

    const setTotalCost = (startDate, endDate) => {

        if (startDate.getTime() < endDate.getTime()) {
            let days = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

            setPriceState((days * price).toFixed(2))
        } else {
            setPriceState("")
        }

    }

    const handleDateChange = (e) => {
        let { startDate, endDate } = e.selection;
        setState({ start_date: startDate, end_date: endDate })
        setTotalCost(startDate, endDate)
        console.log(e.selection)
        console.log(endDate.getTime())
    }




    const handleReservation = (e) => {
        e.preventDefault()
        setCalendarErrors("")

        if (state.start_date === "" || state.end_date === "") {
            setCalendarErrors("Please select dates.")
            return
        }


        if (state.start_date.getTime() === state.end_date.getTime()) {
            setCalendarErrors("Please choose at least two days")
            return
        }


        // if (startDate === null) {
        //     setNullDateError(true)
        //     return;
        // }

        // if (startDate.toDateString() === "Invalid Date") {
        //     setNotDateError(true)
        //     return;
        // }

        const reservationFormObj = {
            number_of_guests: parseInt(totalOccupancy, 10),
            spot_id: spotId,
            check_in: state.start_date.toISOString().split('T')[0],
            check_out: state.end_date.toISOString().split('T')[0],
            price: parseFloat(price)
        }

        dispatch(creatReservationThunk(reservationFormObj, userId)).then(() => {
            history.push("/mytrips")
        })

        console.log(state)

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
            setTotalOccupancy(1)
            setStartDate(new Date())
        }
    }, [currentReservation?.number_of_guests, editModal, reservationDate])



    let selectionRange;
    if (state.start_date === "") {
        selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        };
    } else if (state.start_date !== "" && state.end_date === "") {
        selectionRange = {
            startDate: state.start_date,
            endDate: new Date(),
            key: "selection",
        };
    } else if (state.end_date !== "") {
        selectionRange = {
            startDate: state.start_date,
            endDate: state.end_date,
            key: "selection",
        };
    }

    return (
        <div className="reserveASpotContainer">
            <form className="makeReservationMainContent" onSubmit={editModal ? editReservation : handleReservation}>
                <div className="reservePricePerDayContainer"> <div style={{ fontSize: "20px", marginRight: "5px" }}>${price} / day</div></div>
                <div className="reserveMainBox">


                    <div className="reservationDateAndDatePickerContainer">

                        <DateRange
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            className="calendar"
                            rangeColors={["#E61E4D"]}
                            onChange={e => handleDateChange(e)}
                            editableDateInputs={true}
                            showSelectionPreview={true}
                            months={1}
                            direction="vertical"
                            showDateDisplay={false}
                            showMonthAndYearPickers={true}
                        />
                    </div>
                    <div className="addReservationNumberofGuestsText">Number of Guests
                        <input
                            value={totalOccupancy}
                            type="number"
                            onChange={setTotalOccupancy}
                            required={true}
                            min="1"
                            className="numberOfGuestsReserve"
                            max={totalOccupantsAllowed}
                        >
                        </input>
                    </div>
                    <div className="totalPriceCalculated">Total: ${priceState}</div>
                </div>
                <div className="calendarError">{calendarErrors}</div>
                <Button type={"submit"} label={"Reserve"} className={"addReserveationButton"} />
            </form >
        </div >
    )
}

export default ReserveSpot