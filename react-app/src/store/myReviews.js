//constants
const LOAD_MY_REVIEWS = "my_reviews/LOAD_MY_REVIEWS";

//Action creators

const loadMyReviewsAction = (my_reviews) => ({
  type: LOAD_MY_REVIEWS,
  payload: my_reviews,
});

//Thunks

export const loadMyReviewsThunk = (userId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/user/${userId}`);

  if (response.ok) {
    let reviews = await response.json();

    dispatch(loadMyReviewsAction(reviews.my_reviews));
  }
};

//Reducer
const initialState = {};

const myReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MY_REVIEWS:
      return action.payload;
    default:
      return state;
  }
};

export default myReviewsReducer;
