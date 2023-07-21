import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import AddSpotPage from "./components/Pages/AddSpotPage/AddSpotPage";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import SpotPage from "./components/Pages/SpotPage/SpotPage";
import { loadSpotsFunc } from "./store/spotReducer";
import MyTripsPage from "./components/Pages/MyTripsPage/MyTripsPage";
import SpotListingsPage from "./components/Pages/SpotListingsPage/SpotListingsPage";
import AccountPage from "./components/Pages/AccountPage/AccountPage";
import PersonalInfoPage from "./components/Pages/AccountPage/PersonalInfoPage";
import ManageListingsPage from "./components/Pages/AccountPage/ManageListingsPage/ManageListingsPage";
import PastTripsPage from "./components/Pages/AccountPage/PastTripsPage/PastTripsPage";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [spotsLoaded, setSpotsLoaded] = useState(false);
  const dispatch = useDispatch();

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
          <SpotListingsPage allSpots={true} />
        </Route>
        <Route path="/apartments" exact={true}>
          <SpotListingsPage apartments={true} />
        </Route>
        <Route path="/outdoors" exact={true}>
          <SpotListingsPage outdoors={true} />
        </Route>
        <Route path="/houses" exact={true}>
          <SpotListingsPage houses={true} />
        </Route>
        <Route path="/unique" exact={true}>
          <SpotListingsPage unique={true} />
        </Route>
        <ProtectedRoute path="/spots/new" exact={true}>
          <AddSpotPage />
        </ProtectedRoute>
        <ProtectedRoute path="/mytrips" exact={true}>
          <MyTripsPage />
        </ProtectedRoute>
        <Route path="/spots/:spotId" exact={true}>
          <SpotPage spotsLoaded={spotsLoaded} />
        </Route>
        <ProtectedRoute path="/account" exact={true}>
          <AccountPage />
        </ProtectedRoute>
        <ProtectedRoute path="/account/personal-info" exact={true}>
          <PersonalInfoPage />
        </ProtectedRoute>
        <ProtectedRoute path="/account/manage-listings" exact={true}>
          <ManageListingsPage />
        </ProtectedRoute>
        <ProtectedRoute path="/account/places-you've-been" exact={true}>
          <PastTripsPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
