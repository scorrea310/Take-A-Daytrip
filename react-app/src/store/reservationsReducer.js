import { isPast, isToday } from "date-fns";

//constants
const CREATE_RESERVATION = "reservation/CREATE_RESERVATION";
const LOAD_RESERVATIONS = "reservation/LOAD_RESERVATIONS";
const UPDATE_RESERVATION = "reservation/UPDATE_RESERVATION";
const DELETE_RESERVATION = "reservation/DELETE_RESERVATION";

/*--------------------------------------------------------------------*/
//Action Creators

const createReservationAction = (reservation) => ({
  type: CREATE_RESERVATION,
  payload: reservation,
});

const loadResevationsAction = (reservations) => ({
  type: LOAD_RESERVATIONS,
  payload: reservations,
});

const updateReservationAction = (reservation) => ({
  type: UPDATE_RESERVATION,
  payload: reservation,
});

const deleteReservationAction = (reservationId) => ({
  type: DELETE_RESERVATION,
  payload: reservationId,
});

/*--------------------------------------------------------------------*/
//Thunks

export const creatReservationThunk =
  (reservationFormObj, userId) => async (dispatch) => {
    // /api/reservations/id

    const response = await fetch(`/api/reservations/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationFormObj),
    });

    const newReservation = await response.json();

    if (response.ok) {
      await dispatch(createReservationAction(newReservation));

      return newReservation;
    } else {
      console.log("ERROR IN CREATE RESERVATION THUNK");
    }
  };

export const loadreservationsthunk = (userId) => async (dispatch) => {
  if (!userId) return;

  const response = await fetch(`/api/reservations/${userId}`);

  const usersReservations = await response.json();

  if (response.ok) {
    let upcomingReservationsArray = Object.values(
      usersReservations.reservations
    ).filter((reservation) => {
      if (
        !isPast(new Date(reservation.check_in)) ||
        isToday(new Date(reservation.check_in))
      ) {
        return reservation;
      }
      return false;
    });

    const reservationsObject = {};

    for (let i = 0; i < upcomingReservationsArray.length; i++) {
      reservationsObject[upcomingReservationsArray[i].id] =
        upcomingReservationsArray[i];
    }

    dispatch(loadResevationsAction(reservationsObject));

    return usersReservations.reservations;
  } else {
    console.log("ERROR IN loadreservationsthunk");
  }
};

export const updateReservationThunk =
  (reservationFormObj, reservationId) => async (dispatch) => {
    const response = await fetch(`/api/reservations/${reservationId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationFormObj),
    });

    const updatedReservation = await response.json();

    if (response.ok) {
      await dispatch(updateReservationAction(updatedReservation));

      return updatedReservation;
    } else {
      console.log("ERROR IN CREATE RESERVATION THUNK");
    }
  };

export const deleteReservationThunk = (reservationId) => async (dispatch) => {
  const response = await fetch(`/api/reservations/${reservationId}`, {
    method: "DELETE",
  });

  const updatedReservation = await response.json();

  if (response.ok) {
    dispatch(deleteReservationAction(reservationId));

    return updatedReservation;
  } else {
    console.log("something went wrong!!");
  }
};

/*--------------------------------------------------------------------*/
//Reducer

const initialState = {};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESERVATION:
      let newState = { ...state };

      newState[action.payload.id] = action.payload;

      return newState;

    case LOAD_RESERVATIONS:
      return action.payload;

    case UPDATE_RESERVATION:
      let newStateAgain = {
        ...state,
        [action.payload.id]: { ...state[`${action.payload.id}`] },
      };

      newStateAgain[`${action.payload.id}`] = action.payload;

      return newStateAgain;

    case DELETE_RESERVATION:
      let newStateDelete = {
        ...state,
        [action.payload]: { ...state[`${action.payload}`] },
      };

      delete newStateDelete[`${action.payload}`];

      return newStateDelete;

    default:
      return state;
  }
};

export default reservationsReducer;
