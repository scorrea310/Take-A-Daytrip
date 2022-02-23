import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import LandingPage from './components/LandingPage/LandingPage';
import AddSpot from './components/AddSpot/AddSpot';
import Spot from './components/Spot/Spot';
import { loadSpotsFunc } from './store/spotReducer';
import MyTrips from './components/MyTrips/MyTrips';
import { loadreservationsthunk } from './store/reservationsReducer';
import SpotListings from './components/SpotListings/SpotListings';

function App() {

  const sessionUser = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);
  const [spotsLoaded, setSpotsLoaded] = useState(false)
  const dispatch = useDispatch();
  const [reservationsLoaded, setReservationsLoaded] = useState(false)

  // useEffect(() => {

  //   dispatch(loadreservationsthunk(sessionUser?.id)).then(() => setReservationsLoaded(true))

  // }, [dispatch])

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {

    dispatch(loadSpotsFunc()).then(() => setSpotsLoaded(true))

  }, [dispatch])




  if (!loaded) {
    return null;
  }
  //outdoors, apartments, house, unique
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
          <LandingPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/allspots' exact={true}>
          <SpotListings allSpots={true} />
        </Route>
        <Route path='/apartments' exact={true}>
          <SpotListings apartments={true} />
        </Route>
        <Route path='/outdoors' exact={true}>
          <SpotListings outdoors={true} />
        </Route>
        <ProtectedRoute path='/spots/new' exact={true} >
          <AddSpot />
        </ProtectedRoute>
        <ProtectedRoute path='/mytrips' exact={true} >
          <MyTrips reservationsLoaded={reservationsLoaded} />
        </ProtectedRoute>
        <Route path='/spots/:spotId' exact={true}>
          <Spot spotsLoaded={spotsLoaded} />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
