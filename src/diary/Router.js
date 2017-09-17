// @flow

import React from 'react';
//import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import EntryList from './EntryList.js';
import EntryPage from './EntryPage.js';
import LogInForm from './auth/LogIn.js';
//temp
//import preload from "./data.json";
import api from './apiMockup/api';

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
          path="/entry/:id"
          component={(props: { match: Match }) => {
            return (
              <EntryPage
                entry={api.getEntryData(props.match.params.id)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/:userURL/favorites"
          component={(props: { match: Match }) => {
            return (
              <EntryList
                entries={api.getUserFavoriteFeed(props.match.params.userURL)}
                {...props}
              />
            );
          }}
        />

        {/* Enable this when you have the components
        <Route
          path="/:userURL/profile"
          component={(props: { match: Match }) => {
            return <UserPage entries={api.getUserProfileData(props.match.params.userURL)} {...props} />;
          }}
        />*/}

        <Route
          path="/:userURL/diary"
          component={(props: { match: Match }) => {
            return (
              <EntryList
                entries={api.getUserEntries(props.match.params.userURL)}
                {...props}
              />
            );
          }}
        />
        {/* this might be more readable than /entry/:id */}
        <Route
          path="/:userURL/:id"
          component={(props: { match: Match }) => {
            return (
              <EntryPage
                entry={api.getEntryData(props.match.params.id)}
                {...props}
              />
            );
          }}
        />

        {/* Same as /:userURL/diary  */}
        <Route
          path="/:userURL"
          component={(props: { match: Match }) => {
            return (
              <EntryList
                entries={api.getUserEntries(props.match.params.userURL)}
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
