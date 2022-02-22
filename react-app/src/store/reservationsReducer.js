//constants
const CREATE_RESERVATION = "reservation/CREATE_RESERVATION"






/*--------------------------------------------------------------------*/
//Action Creators


const createReservationAction = (reservation) => ({
    type: CREATE_RESERVATION,
    payload: reservation
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

        console.log(newReservation)

    } else {
        console.log("ERROR IN CREATE RESERVATION THUNK")
    }


}











/*--------------------------------------------------------------------*/
//Reducer

const initialState = {};

const reservationsReducer = (state = initialState, action) => {

    return initialState
}


export default reservationsReducer