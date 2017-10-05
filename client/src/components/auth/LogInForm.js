import React from "react";
import axios from "axios";
//import querystring from "querystring";
import "./css/LogInForm.css";

class LoginForm extends React.Component {
  state = {
    userName: "",
    passWord: ""
  };

  handleUserNameChange = event => {
    this.setState({ userName: event.target.value });
  };

  handlePassWordChange = event => {
    this.setState({ passWord: event.target.value });
  };

  handleOnSubmit = event => {
    let props = this.props;
    event.preventDefault();
    axios
      .post("/api/login", {
        username: event.target.username.value,
        password: event.target.password.value
      })
      .then(function(response) {
        props.history.push("/main");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <section className="log-in--section">
        <h1>Log in</h1>
        <form className="log-in--form" onSubmit={this.handleOnSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            className="log-in--input"
            type="text"
            onChange={this.handleUserNameChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            className="log-in--input"
            type="password"
            onChange={this.handlePassWordChange}
          />
          <a className="log-in--forgot-password" href="">
            I forgot my password
          </a>
          <button
            className="log-in--login-button"
            type="submit"
            onClick={this.login}
          >
            Log in
          </button>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </section>
    );
  }
}

export default LoginForm;
