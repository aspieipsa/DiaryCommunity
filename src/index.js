import React from "react";
import ReactDOM from "react-dom";
import "./Courseware/style.css";
import App from "./Courseware/App";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./Courseware/App", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}
