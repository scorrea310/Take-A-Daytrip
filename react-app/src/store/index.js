import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import spotReducer from "./spotReducer";
import reservationsReducer from "./reservationsReducer";
import loginAndSignUpModalReducer from "./LoginAndRegisterModals";
import myListingsReducer from "./myListings";
import myReviewsReducer from "./myReviews";

const rootReducer = combineReducers({
  session,
  spotReducer,
  reservationsReducer,
  modals: loginAndSignUpModalReducer,
  myListings: myListingsReducer,
  myReviews: myReviewsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
