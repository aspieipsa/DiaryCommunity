import React from 'react';
import ReactDOM from 'react-dom';
//import './diary/style.css';
import App from './Router';

// use for performance profiling:
// import Perf from "react-addons-perf";
// window.Perf = Perf;
// Perf.start();

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./Router', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
