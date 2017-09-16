// @flow

import React from 'react';
//import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import type { Match } from "react-router-dom";
import MyDiary from './MyDiary';
import preload from './data.json';

const FourOhFour = () => <h1>404</h1>;

const DiaryApp = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          component={props => <MyDiary posts={preload.posts} {...props} />}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default DiaryApp;
