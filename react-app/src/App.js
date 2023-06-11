import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { authenticate } from "./store/session";
import LandingPage from "./components/LandingPage/LandingPage";
import AddSpot from "./components/AddSpot/AddSpot";
import Spot from "./components/Spot/Spot";
import { loadSpotsFunc } from "./store/spotReducer";
import MyTrips from "./components/MyTrips/MyTrips";
import SpotListings from "./components/SpotListings/SpotListings";
import AccountPage from "./components/AccountPage/AccountPage";
import PersonalInfo from "./components/AccountPage/PersonalInfo";
import ManageListings from "./components/ManageListings/ManageListings";
import PastTrips from "./components/PastTrips/PastTrips";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [spotsLoaded, setSpotsLoaded] = useState(false);
  const dispatch = useDispatch();
  const [reservationsLoaded, setReservationsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadSpotsFunc()).then(() => setSpotsLoaded(true));
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <LandingPage />
        </Route>
        <Route path="/allspots" exact={true}>
          <SpotListings allSpots={true} />
        </Route>
        <Route path="/apartments" exact={true}>
          <SpotListings apartments={true} />
        </Route>
        <Route path="/outdoors" exact={true}>
          <SpotListings outdoors={true} />
        </Route>
        <Route path="/houses" exact={true}>
          <SpotListings houses={true} />
        </Route>
        <Route path="/unique" exact={true}>
          <SpotListings unique={true} />
        </Route>
        <ProtectedRoute path="/spots/new" exact={true}>
          <AddSpot />
        </ProtectedRoute>
        <ProtectedRoute path="/mytrips" exact={true}>
          <MyTrips reservationsLoaded={reservationsLoaded} />
        </ProtectedRoute>
        <Route path="/spots/:spotId" exact={true}>
          <Spot spotsLoaded={spotsLoaded} />
        </Route>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/account" exact={true}>
          <AccountPage />
        </ProtectedRoute>
        <ProtectedRoute path="/account/personal-info" exact={true}>
          <PersonalInfo />
        </ProtectedRoute>
        <ProtectedRoute path="/account/manage-listings" exact={true}>
          <ManageListings />
        </ProtectedRoute>
        <ProtectedRoute path="/account/places-you've-been" exact={true}>
          <PastTrips />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
