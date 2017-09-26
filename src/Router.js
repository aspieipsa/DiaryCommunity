// @flow

import React from 'react';
//import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import EntryList from './components/EntryList.js';
import EntryPage from './EntryPage.js';
import LogInForm from './components/auth/LogInForm.js';
import RegistrationForm from './components/auth/RegistrationForm.js';
import FeedPage from './FeedPage.js';
import NewEntry from './NewEntry.js';
import UserProfile from './UserProfile.js';
//HTTP requests
import Request from 'react-http-request';
//temp
//import preload from "./data.json";
import api from './components/apiMockup/api';

const FourOhFour = () => <h1>404</h1>;

const Router = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        {/* Main page 
        <Route exact path="/" component={props => <MainPage {...props} />} />
        */}
        <Route path="/login" component={props => <LogInForm {...props} />} />
        <Route
          path="/registration"
          component={props => <RegistrationForm {...props} />}
        />
        <Route
          exact
          path="/newentry"
          component={props => <NewEntry {...props} />}
        />
        <Route
          path="/:userURL/favorites"
          component={(props: { match: Match }) => {
            return (
              <FeedPage
                entries={api.getUserFavoriteFeed(props.match.params.userURL)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/:userURL/profile"
          component={(props: { match: Match }) => {
            return (
              <UserProfile
                fetchRoute={'/dbfetch/users/'}
                userURL={props.match.params.userURL}
                {...props}
              />
            );
          }}
        />

        <Route
          path="/:userURL/diary"
          component={(props: { match: Match }) => {
            return (
              <FeedPage
                fetchRoute={'/dbfetch/entries/'}
                userURL={props.match.params.userURL}
                {...props}
              />
            );
          }}
        />
        {/* this might be more readable than /entry/:id */}
        <Route
          path="/:userURL/:entryID"
          component={(props: { match: Match }) => {
            return (
              <EntryPage
                fetchRoute={'/dbfetch/singleEntry/'}
                userURL={props.match.params.userURL}
                entryID={props.match.params.entryID}
                {...props}
              />
            );
          }}
        />

        {/* Same as /:userURL/diary. LOOK UP IF Redirect component CAN BE USED TO SHORTEN THIS  */}
        <Route
          path="/:userURL"
          component={(props: { match: Match }) => {
            return (
              <FeedPage
                fetchRoute={'/dbfetch/entries/'}
                userURL={props.match.params.userURL}
                {...props}
              />
            );
          }}
        />

        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
