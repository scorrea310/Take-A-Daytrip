//constants
const LOAD_MY_LISTINGS = "my_listings/LOAD_MY_LISTINGS"








//Action creators

const loadMyListingsAction = (my_listings) => ({
    type: LOAD_MY_LISTINGS,
    payload: my_listings
})









//Thunks

export const loadMyListingsThunk = (userId) => async (dispatch) => {

    const response = await fetch(`/api/spots/users_listings/${userId}`)

    if (response.ok) {

        let spots = await response.json()

        console.log(spots, "kjsdnckjsdncjksdnc")

        dispatch(loadMyListingsAction(spots.my_listings))
    }

}




//Reducer
const initialState = {};



const myListingsReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_MY_LISTINGS:
            return action.payload
        default:
            return state;
    }
}


export default myListingsReducer