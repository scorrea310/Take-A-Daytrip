//constants 
const ADD_SPOT = "spot/ADD_SPOT"









/*--------------------------------------------------------------------*/
//Action Creators














/*--------------------------------------------------------------------*/
//Thunks


export const addSpot = (formObj) => async (dispatch) => {

    const response = await fetch(`/api/spots`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObj),
    });


    return;

}















/*--------------------------------------------------------------------*/
// REDUCER

const initialState = {};

const spotReducer = (state = initialState, action) => {


    return initialState
};

export default spotReducer;
