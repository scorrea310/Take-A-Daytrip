//constants
const LOAD_MY_REVIEWS = "my_reviews/LOAD_MY_REVIEWS";
const ADD_REVIEW = "my_reviews/ADD_REVIEW";

//Action creators
const loadMyReviewsAction = (my_reviews) => ({
  type: LOAD_MY_REVIEWS,
  payload: my_reviews,
});

const addReviewAction = (review) => ({
  type: ADD_REVIEW,
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

//Thunks
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
  }
};

//Reducer
const initialState = {};

const myReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MY_REVIEWS:
      return action.payload;
    case ADD_REVIEW:
      let existingReviews = { ...state };
      existingReviews[action.payload.spot_id] = action.payload;
      return existingReviews;
    default:
      return state;
  }
};

export default myReviewsReducer;
