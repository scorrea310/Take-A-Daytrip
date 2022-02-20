import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

function App() {
  const [loaded, setLoaded] = useState(false);
  const [spotsLoaded, setSpotsLoaded] = useState(false)
  const dispatch = useDispatch();

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
        <ProtectedRoute path='/spots/new' exact={true} >
          <AddSpot />
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
