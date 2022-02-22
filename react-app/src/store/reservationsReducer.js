//constants
const CREATE_RESERVATION = "reservation/CREATE_RESERVATION"
const LOAD_RESERVATIONS = "reservation/LOAD_RESERVATIONS"





/*--------------------------------------------------------------------*/
//Action Creators


const createReservationAction = (reservation) => ({
    type: CREATE_RESERVATION,
    payload: reservation
})


const loadResevationsAction = (reservations) => ({
    type: LOAD_RESERVATIONS,
    payload: reservations
})




/*--------------------------------------------------------------------*/
//Thunks



export const creatReservationThunk = (reservationFormObj, userId) => async (dispatch) => {

    // /api/reservations/id

    const response = await fetch(`/api/reservations/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationFormObj),
    });

    const newReservation = await response.json();

    if (response.ok) {

        await dispatch(createReservationAction(newReservation))

        return newReservation;

    } else {
        console.log("ERROR IN CREATE RESERVATION THUNK")
    }

}


export const loadreservationsthunk = (userId) => async (dispatch) => {

    if (!userId) return

    const response = await fetch(`/api/reservations/${userId}`);

    const usersReservations = await response.json();

    if (response.ok) {
        dispatch(loadResevationsAction(usersReservations))


    } else {
        console.log("IN THUNK")
    }





}










/*--------------------------------------------------------------------*/
//Reducer

const initialState = {};

const reservationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_RESERVATION:
            let newState = { ...state }

            newState[action.payload.id] = action.payload

            return newState


        case LOAD_RESERVATIONS:


            return action.payload
        default:
            return state;
    }
}


export default reservationsReducer