import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import Router from "./components/Router";
import reducers from "./reducers";

// use for performance profiling:
// import Perf from "react-addons-perf";
// window.Perf = Perf;
// Perf.start();

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector("#root")
);

if (module.hot) {
  module.hot.accept("./components/Router", () => {
    ReactDOM.render(
      <Provider store={store}>
        <Router />
      </Provider>,
      document.querySelector("#root")
    );
  });
}
