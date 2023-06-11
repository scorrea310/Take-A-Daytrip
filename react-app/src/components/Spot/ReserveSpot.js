import "./ReserveSpot.css";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { creatReservationThunk } from "../../store/reservationsReducer";
import { updateReservationThunk } from "../../store/reservationsReducer";
import { useHistory } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Collapse } from "react-collapse";
import { useScrollBy } from "react-use-window-scroll";
import { CgEditExposure } from "react-icons/cg";

const ReserveSpot = ({
  price,
  totalOccupantsAllowed,
  spotId,
  editModal,
  currentReservation,
  setShowEditModal,
  reservationDate,
  editStartDate,
  editEndDate,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const [totalOccupancy, setTotalOccupancy] = useState(1);
  const [state, setState] = useState({ start_date: "", end_date: "" });
  const [priceState, setPriceState] = useState("");
  const [calendarErrors, setCalendarErrors] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const scrollBy = useScrollBy();

  const setTotalCost = (startDate, endDate) => {
    if (startDate.getTime() < endDate.getTime()) {
      let days = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

      setPriceState((days * price).toFixed(2));
    } else {
      setPriceState("");
    }
  };

  const handleDateChange = (e) => {
    let { startDate, endDate } = e.selection;
    setState({ start_date: startDate, end_date: endDate });
    setTotalCost(startDate, endDate);
  };

  const handleReservation = (e) => {
    e.preventDefault();
    setCalendarErrors("");

    if (state.start_date === "" || state.end_date === "") {
      setCalendarErrors("Please select dates.");
      return;
    }

    if (state.start_date.getTime() === state.end_date.getTime()) {
      setCalendarErrors("Please choose at least two days");
      return;
    }

    const reservationFormObj = {
      number_of_guests: parseInt(totalOccupancy, 10),
      spot_id: spotId,
      check_in: state.start_date.toISOString().split("T")[0],
      check_out: state.end_date.toISOString().split("T")[0],
      price: parseFloat(price),
    };

    dispatch(creatReservationThunk(reservationFormObj, userId)).then(() => {
      history.push("/mytrips");
    });
  };

  const editReservation = (e) => {
    e.preventDefault();

    setCalendarErrors("");

    if (state.start_date === "" || state.end_date === "") {
      setCalendarErrors("Please select dates.");
      return;
    }

    if (state.start_date.getTime() === state.end_date.getTime()) {
      setCalendarErrors("Please choose at least two days");
      return;
    }

    const reservationFormObj = {
      number_of_guests: parseInt(totalOccupancy, 10),
      spot_id: parseInt(currentReservation.spot_id, 10),
      check_in: state.start_date.toISOString().split("T")[0],
      check_out: state.end_date.toISOString().split("T")[0],
      price: parseFloat(price),
      user_id: userId,
    };

    dispatch(
      updateReservationThunk(reservationFormObj, currentReservation.id)
    ).then(() => {
      setShowEditModal(false);
    });
  };

  useEffect(() => {
    if (editModal) {
      setTotalOccupancy(parseInt(currentReservation.number_of_guests, 10));

      let startDate = editStartDate.split(" ");
      let endDate = editEndDate.split(" ");
      let reservationCheckInDateObject = new Date(
        startDate[0].replace(/-/g, "/")
      );
      let reservationCheckOutDateObject = new Date(
        endDate[0].replace(/-/g, "/")
      );

      setState({
        start_date: reservationCheckInDateObject,
        end_date: reservationCheckOutDateObject,
      });

      let days =
        (reservationCheckOutDateObject.getTime() -
          reservationCheckInDateObject.getTime()) /
        (1000 * 3600 * 24);

      setPriceState((days * price).toFixed(2));
    } else {
      setTotalOccupancy(1);
    }
  }, [
    currentReservation?.number_of_guests,
    editEndDate,
    editModal,
    editStartDate,
    price,
    reservationDate,
  ]);

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

  let editPreview = {};
  if (editModal) {
    let startDate = editStartDate.split(" ");
    let endDate = editEndDate.split(" ");
    let reservationCheckInDateObject = new Date(
      startDate[0].replace(/-/g, "/")
    );
    let reservationCheckOutDateObject = new Date(endDate[0].replace(/-/g, "/"));
    editPreview.startDate = reservationCheckInDateObject;
    editPreview.endDate = reservationCheckOutDateObject;
    editPreview.color = "#E61E4D";
  }

  return (
    <div className="reserveASpotContainer">
      <div className="reservePricePerDayContainer">
        {" "}
        <div style={{ fontSize: "20px", marginRight: "5px" }}>
          ${price} / day
        </div>{" "}
        {isOpened && (
          <div
            onClick={() => setIsOpened(false)}
            className="close-calendar-text"
          >
            close calendar
          </div>
        )}
      </div>

      <form
        className="makeReservationMainContent"
        onSubmit={editModal ? editReservation : handleReservation}
      >
        <div className="reserveMainBox">
          <Collapse isOpened={isOpened}>
            <div className="reservationDateAndDatePickerContainer">
              <DateRange
                ranges={[selectionRange]}
                showPreview={editModal}
                minDate={new Date()}
                className="calendar"
                rangeColors={["#E61E4D"]}
                onChange={(e) => handleDateChange(e)}
                editableDateInputs={true}
                showSelectionPreview={true}
                months={1}
                direction="vertical"
                showDateDisplay={false}
                showMonthAndYearPickers={true}
              />
            </div>
          </Collapse>
          <div className="addReservationNumberofGuestsText">
            Number of Guests
            <input
              value={totalOccupancy}
              type="number"
              onChange={(e) => setTotalOccupancy(e.target.value)}
              required={true}
              min="1"
              className="numberOfGuestsReserve"
              max={totalOccupantsAllowed}
            ></input>
          </div>
          <div className="totalPriceCalculated">Total: ${priceState}</div>
        </div>
        <div className="calendarError">{calendarErrors}</div>
        {isOpened ? (
          <Button
            type={"submit"}
            label={"Reserve"}
            className={"addReserveationButton"}
          />
        ) : (
          <div
            className="checkAvailabilityButton"
            onClick={() => {
              setIsOpened(true);
            }}
          >
            Check Availability
          </div>
        )}
      </form>
    </div>
  );
};

export default ReserveSpot;
