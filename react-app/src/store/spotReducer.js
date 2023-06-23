//constants
const CREATE_SPOT = "spot/CREATE_SPOT";
const LOAD_SPOTS = "spot/LOAD_SPOTS";
const UPDATE_SPOT = "spot/UPDATE_SPOT";
const DELETE_SPOT = "spot/DELETE_SPOT";
const ADD_REVIEW_TO_SPOT = "spot/ADD_REVIEW_TO_SPOT";
const DELETE_REVIEW_FROM_SPOT = "spot/DELETE_REVIEW_FROM_SPOT";
const EDIT_REVIEW_ON_SPOT = "spot/EDIT_REVIEW_ON_SPOT";
/*--------------------------------------------------------------------*/
//Action Creators

const createSpot = (newSpot) => ({
  type: CREATE_SPOT,
  payload: newSpot,
});

const loadSpots = (spots) => ({
  type: LOAD_SPOTS,
  payload: spots,
});

const updateSpot = (newSpot) => ({
  type: UPDATE_SPOT,
  payload: newSpot,
});

const deleteSpot = (spotId) => ({
  type: DELETE_SPOT,
  payload: spotId,
});

export const addReviewToSpot = (review) => ({
  type: ADD_REVIEW_TO_SPOT,
  payload: review,
});

export const deleteReviewFromSpot = (review) => ({
  type: DELETE_REVIEW_FROM_SPOT,
  payload: review,
});
export const editReviewOnSpot = (editedReview) => ({
  type: EDIT_REVIEW_ON_SPOT,
  payload: editedReview,
});

/*--------------------------------------------------------------------*/
//Thunks

export const addSpot = (formObj, imageData) => async (dispatch) => {
  const response = await fetch(`/api/spots`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObj),
  });

  const spotObj = await response.json();

  /*
    using data.id, make a request to my images api.
    */

  const res = await fetch(`/api/spots/${spotObj.id}/spot_images`, {
    method: "POST",
    body: imageData,
  });

  let data = await res.json();

  spotObj.images = data.image_urls;

  if (res.ok) {
    await dispatch(createSpot(spotObj));
  } else {
    console.log("something went wrong!");
  }

  return spotObj;
};

export const loadSpotsFunc = () => async (dispatch) => {
  const response = await fetch("/api/spots/");

  if (response.ok) {
    let spots = await response.json();

    dispatch(loadSpots(spots.spots));
  }
};

export const updateSpotFunc = (formObj, spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObj),
  });

  let data = await response.json();

  if (response.ok) {
    await dispatch(updateSpot(data));
  }

  return data;
};

export const deleteSpotThunk = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}/delete`, {
    method: "DELETE",
  });

  await response.json();

  if (response.ok) {
    dispatch(deleteSpot(spotId));
  }
};

/*--------------------------------------------------------------------*/
// REDUCER

const initialState = {};

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SPOT:
      let newSpot = { ...state };

      newSpot[action.payload.id] = action.payload;

      return newSpot;

    case LOAD_SPOTS:
      return action.payload;

    case UPDATE_SPOT:
      let updatedNewSpot = { ...state };

      updatedNewSpot[action.payload.id] = action.payload;

      return updatedNewSpot;

    case DELETE_SPOT:
      let oldState = { ...state };

      delete oldState[`${action.payload}`];

      return oldState;
    case ADD_REVIEW_TO_SPOT:
      let oldSpots = { ...state };
      let newReviews = { ...state[action.payload.spot_id].reviews };
      newReviews[action.payload.id] = action.payload;
      oldSpots[action.payload.spot_id].reviews = newReviews;
      return oldSpots;

    case DELETE_REVIEW_FROM_SPOT:
      let oldStateSpot = { ...state };
      delete oldStateSpot[`${action.payload.spot_id}`].reviews[
        action.payload.id
      ];
      return oldStateSpot;
    case EDIT_REVIEW_ON_SPOT:
      let oldSpotsWithReviewToEdit = { ...state };
      oldSpotsWithReviewToEdit[action.payload.spot_id].reviews[
        action.payload.id
      ] = action.payload;
      return oldSpotsWithReviewToEdit;
    default:
      return state;
  }
};

export default spotReducer;
