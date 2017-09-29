import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers";

// use for performance profiling:
// import Perf from "react-addons-perf";
// window.Perf = Perf;
// Perf.start();

ReactDOM.render(<App />, document.getElementById("root"));

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector("#root")
    );
  });
}
