//constants 
const ADD_SPOT = "spot/ADD_SPOT"









/*--------------------------------------------------------------------*/
//Action Creators














/*--------------------------------------------------------------------*/
//Thunks


export const addSpot = (formObj, imageData) => async (dispatch) => {

    const response = await fetch(`/api/spots`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObj),
    });

    const data = await response.json();

    /*
    using data.id, make a request to my images api.
    */

    const res = await fetch(`/api/spots/${data.id}/spot_images`, {
        method: 'POST',
        body: imageData,
    });

    if (res.ok) {
        let imageUrls = await res.json();
        
        
    } else {
        console.log("something went wrong!!")
    }

}










/*--------------------------------------------------------------------*/
// REDUCER

const initialState = {};

const spotReducer = (state = initialState, action) => {


    return initialState
};

export default spotReducer;
