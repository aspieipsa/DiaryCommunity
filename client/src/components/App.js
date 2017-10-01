import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import LoginForm from "./auth/LoginForm";
import RegistrationForm from "./auth/RegistrationForm";
import Diary from "./diary";
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
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegistrationForm} />

          {/*TODO: if we have routes like this, we need to make sure it is impossible to register with user urls like "main", "login", etc.*/}
          <Route path="/:user/profile" component={Profile} />
          <Route path="/:user/diary" component={Diary} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
