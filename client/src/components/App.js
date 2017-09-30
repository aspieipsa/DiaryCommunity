import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
const MainPage = () => <h2>Main page</h2>;
const Profile = () => <h2>Profile</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/main" component={MainPage} />
          <Route path="/:user/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
