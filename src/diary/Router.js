// @flow

import React from 'react';
//import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import EntryList from './EntryList.js';
import EntryPage from './EntryPage.js';
import LogIn from './auth/LogIn.js';
//temp
import preload from './data.json';

const FourOhFour = () => <h1>404</h1>;

const Router = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={props => <EntryList {...props} />} />
        <Route path="/login" component={props => <LogIn {...props} />} />
        <Route
          path="/entry/:id"
          component={(props: { match: Match }) => {
            const entry = preload.entries.find(
              entry => props.match.params.id === entry.entryID
            );
            return <EntryPage entry={entry} {...props} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
