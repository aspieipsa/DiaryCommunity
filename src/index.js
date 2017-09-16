import React from 'react';
import ReactDOM from 'react-dom';
import './Courseware/style.css';
import App from './Courseware/App';

// use for performance profiling:
// import Perf from "react-addons-perf";
// window.Perf = Perf;
// Perf.start();

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./Courseware/App', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
