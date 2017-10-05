import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./css/RegistrationForm.css";
import * as validate from "./formValidation";

class RegistrationForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    customURL: "",
    errors: {}
  };

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  validateUsername = event => {
    let errors = validate.validateUsername(event.target.value);
    let errState = Object.assign({}, this.state.errors);
    if (errors.length) errState.username = errors.join("; ");
    this.setState({
      errors: errState
    });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  validateEmail = event => {
    let errors = validate.validateEmail(event.target.value);
    let errState = Object.assign({}, this.state.errors);
    if (errors.length) errState.email = errors.join("; ");
    this.setState({
      errors: errState
    });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  validatePassword = event => {
    let errors = validate.validatePassword(event.target.value);
    let errState = Object.assign({}, this.state.errors);
    if (errors.length) errState.password = errors.join("; ");
    this.setState({
      errors: errState
    });
  };

  handleConfirmPasswordChange = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  validateConfirmPassword = event => {
    let password = document.getElementById("password").value;
    let errors = validate.validateConfirmPassword(password, event.target.value);
    let errState = Object.assign({}, this.state.errors);
    if (errors.length) errState.confirmPassword = errors;
    this.setState({
      errors: errState
    });
  };

  handleCustomURLChange = event => {
    this.setState({ customURL: event.target.value });
  };

  validateCustomURL = event => {
    let errors = validate.validateCustomURL(event.target.value);
    let errState = Object.assign({}, this.state.errors);
    if (errors.length) errState.customURL = errors;
    this.setState({
      errors: errState
    });
  };

  handleOnSubmit = async event => {
    event.preventDefault();

    let newUser = {
      username: this.state.username,
      email: this.state.email,
      customURL: this.state.customURL,
      password: this.state.password
    };
    // run checks
    const errors = await validate.validateAll(newUser);

    console.log("errors", errors);
    if (errors.length) {
      this.setState({ errors });
    } else {
      let props = this.props;

      axios
        .post("/api/register", newUser)
        .then(function(response) {
          console.log("got it!");
          props.history.push("/main");
        })
        .catch(function(error) {
          console.log(error);
          alert("Oops, something went wrong.");
        });
    }
  };

  render() {
    return (
      <section className="registration--section">
        <h1>Register</h1>
        <form className="registration--form" onSubmit={this.handleOnSubmit}>
          <div className="row">
            <div className="input-field">
              <input
                id="username"
                type="text"
                className={this.state.errors.username ? "invalid" : ""}
                name="username"
                onChange={this.handleUsernameChange}
                onBlur={this.validateUsername}
              />
              <label
                htmlFor="username"
                data-error={this.state.errors.username}
                className="active"
              >
                Username
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input
                id="email"
                type="email"
                className={this.state.errors.email ? "invalid" : ""}
                name="email"
                onChange={this.handleEmailChange}
                onBlur={this.validateEmail}
              />
              <label
                htmlFor="email"
                data-error={this.state.errors.email}
                className="active"
              >
                Email
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input
                id="password"
                type="password"
                className={this.state.errors.password ? "invalid" : ""}
                name="password"
                onChange={this.handlePasswordChange}
                onBlur={this.validatePassword}
              />
              <label
                htmlFor="password"
                data-error={this.state.errors.password}
                className="active"
              >
                Password
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input
                id="confirm-password"
                type="password"
                className={this.state.errors.confirmPassword ? "invalid" : ""}
                name="confirm-password"
                onChange={this.handleConfirmPasswordChange}
                onBlur={this.validateConfirmPassword}
              />
              <label
                htmlFor="confirm-password"
                data-error={this.state.errors.confirmPassword}
                className="active"
              >
                Confirm password
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input
                id="customURL"
                type="text"
                className={this.state.errors.customURL ? "invalid" : ""}
                name="customURL"
                onChange={this.handleCustomURLChange}
                onBlur={this.validateCustomURL}
              />
              <label
                htmlFor="customURL"
                data-error={this.state.errors.customURL}
                className="active"
              >
                Custom URL
              </label>
            </div>
          </div>
          <button
            id="submit-button"
            className="registration--submit"
            type="submit"
          >
            Register
          </button>
        </form>
      </section>
    );
  }
}

export default withRouter(RegistrationForm);
