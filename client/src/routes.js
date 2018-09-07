// Equivalent to Index.js or Main.js
// Handles all the Nav Routing.
import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Ping from './Ping/Ping';
import Admin from './Admin/Admin';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

// Instantiate new instance of Auth object. 
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

// /admin route. will probably need to include more "scope" later for more user functionality.

// Only '/admin' cares about userHasScopres()
export const makeMainRoutes = () => {
  return (
    <div>
      
      <Router history={history}>
          <div>
            <Route path="/" render={(props) => <App auth={auth} {...props} />} />

            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />

            <Route path="/profile" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/home"/>
              ) : (
                <Profile auth={auth} {...props} />
              )
            )} />

            <Route path="/ping" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/home"/>
              ) : (
                <Ping auth={auth} {...props} />
              )
            )} />

            <Route path="/admin" render={(props) => (
              !auth.isAuthenticated() || !auth.userHasScopes(['write:messages']) ? (
                <Redirect to="/home"/>
              ) : (
                <Admin auth={auth} {...props} />
              )
            )} />

            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/>        
          </div>
        </Router>
      </div>
  );
}