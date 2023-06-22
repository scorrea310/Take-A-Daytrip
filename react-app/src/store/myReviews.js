//constants
const LOAD_MY_REVIEWS = "my_reviews/LOAD_MY_REVIEWS";
const ADD_REVIEW = "my_reviews/ADD_REVIEW";
const EDIT_REVIEW = "my_reviews/EDIT_REVIEW";
const DELETE_REVIEW = "my_reviews/DELETE_REVIEW";

//Action creators
const loadMyReviewsAction = (my_reviews) => ({
  type: LOAD_MY_REVIEWS,
  payload: my_reviews,
});

const addReviewAction = (review) => ({
  type: ADD_REVIEW,
  payload: review,
});

const editReviewAction = (review) => ({
  type: EDIT_REVIEW,
  payload: review,
});

const deleteReviewAction = (spotId) => ({
  type: DELETE_REVIEW,
  payload: spotId,
});

//Thunks
export const loadMyReviewsThunk = (userId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/user/${userId}`);

  if (response.ok) {
    let reviews = await response.json();

    dispatch(loadMyReviewsAction(reviews.my_reviews));
  }
};

export const addReviewThunk = (review) => async (dispatch) => {
  const response = await fetch(`/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });

  if (response.ok) {
    let newReview = await response.json();

    dispatch(addReviewAction(newReview));
    return true;
  }

  return false;
};

export const editReviewThunk = (review, reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });

  if (response.ok) {
    let editedReview = await response.json();

    dispatch(editReviewAction(editedReview));
    return true;
  }
  return false;
};

export const deleteReviewThunk = (reviewId, spotId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });

  const deleteReview = await response.json();

  if (response.ok) {
    dispatch(deleteReviewAction(spotId));

    return deleteReview;
  } else {
    console.log("something went wrong!!");
  }
};
const initialState = {};

//Reducer
const myReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MY_REVIEWS:
      return action.payload;
    case ADD_REVIEW:
      let existingReviews = { ...state };
      existingReviews[action.payload.spot_id] = action.payload;
      return existingReviews;
    case EDIT_REVIEW:
      let copiedReviewsState = { ...state };
      copiedReviewsState[action.payload.spot_id] = action.payload;
      return copiedReviewsState;
    case DELETE_REVIEW:
      let oldState = { ...state };
      delete oldState[`${action.payload}`];
      return oldState;
    default:
      return state;
  }
};

export default myReviewsReducer;
