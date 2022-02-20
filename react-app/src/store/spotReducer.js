//constants 
const CREATE_SPOT = "spot/CREATE_SPOT"









/*--------------------------------------------------------------------*/
//Action Creators



const createSpot = (newSpot) => ({
    type: CREATE_SPOT,
    payload: newSpot
})









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

    const spotObj = await response.json();

    /*
    using data.id, make a request to my images api.
    */

    const res = await fetch(`/api/spots/${spotObj.id}/spot_images`, {
        method: 'POST',
        body: imageData,
    });

    let data = await res.json();

    spotObj.images = data.image_urls

    if (res.ok) {

        await dispatch(createSpot(spotObj))
    } else {
        console.log("something went wrong!!")
    }



    return spotObj

}

/*--------------------------------------------------------------------*/
// REDUCER

const initialState = {};

const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SPOT:
            let newSpot = { ...state }

            newSpot[action.payload.id] = action.payload;

            return newSpot
        default:
            return state;
    }
};

export default spotReducer;
