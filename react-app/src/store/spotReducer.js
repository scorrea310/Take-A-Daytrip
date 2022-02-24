//constants 
const CREATE_SPOT = "spot/CREATE_SPOT"
const LOAD_SPOTS = "spot/LOAD_SPOTS"
const UPDATE_SPOT = "spot/UPDATE_SPOT"
const DELETE_SPOT = "spot/DELETE_SPOT"

/*--------------------------------------------------------------------*/
//Action Creators

const createSpot = (newSpot) => ({
    type: CREATE_SPOT,
    payload: newSpot
})


const loadSpots = (spots) => ({
    type: LOAD_SPOTS,
    payload: spots
})

const updateSpot = (newSpot) => ({
    type: UPDATE_SPOT,
    payload: newSpot
})

const deleteSpot = (spotId) => ({
    type: DELETE_SPOT,
    payload: spotId
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

export const loadSpotsFunc = () => async (dispatch) => {

    const response = await fetch("/api/spots/")

    if (response.ok) {

        let spots = await response.json()

        dispatch(loadSpots(spots.spots))
    }
}


export const updateSpotFunc = (formObj, spotId) => async (dispatch) => {

    const response = await fetch(`/api/spots/${spotId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObj),
    })

    let data = await response.json();

    if (response.ok) {

        await dispatch(updateSpot(data))

    }

    return data;

}


export const deleteSpotThunk = (spotId) => async (dispatch) => {

    const response = await fetch(`/api/spots/${spotId}/delete`, {
        method: 'DELETE',
    })

    let data = await response.json();

    if (response.ok) {
        dispatch(deleteSpot(spotId))
    }

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

        case LOAD_SPOTS:

            return action.payload

        case UPDATE_SPOT:
            let updatedNewSpot = { ...state }

            updatedNewSpot[action.payload.id] = action.payload;

            return updatedNewSpot


        case DELETE_SPOT:
            let oldState = { ...state }

            delete oldState[`${action.payload}`];

            return oldState
        default:
            return state;
    }
};

export default spotReducer;
