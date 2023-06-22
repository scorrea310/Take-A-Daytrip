//constants
const LOAD_MY_REVIEWS = "my_reviews/LOAD_MY_REVIEWS";
const ADD_REVIEW = "my_reviews/ADD_REVIEW";
const EDIT_REVIEW = "my_reviews/EDIT_REVIEW";
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

    dispatch(addReviewAction(newReview.review));
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
    default:
      return state;
  }
};

export default myReviewsReducer;
