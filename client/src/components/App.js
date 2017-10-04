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
const EntryPage = () => <h2>Entry</h2>;
const EntryEdit = () => <h2>Entry</h2>;

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
          <Route path="/:customURL/profile" component={Profile} />
          <Route path="/:customURL/diary" component={Diary} />
          {/* This has to be userURL specific, because a user can add an entry to a community, not just their own diary */}
          {/* we can use the same route for new and edit */}
          <Route path="/:customURL/entry/edit" component={EntryEdit} />
          <Route path="/:customURL/entry/:id" component={EntryPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
