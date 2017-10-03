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

  handleUserNameChange = event => {
    this.setState({ username: event.target.value });
  };
  validateUsername = event => {
    let errors = validate.validateUsername(event.target.value);
    if (errors.length) {
      let errState = Object.assign({}, this.state.errors);
      errState.username = errors.join("; ");
      this.setState({
        errors: errState
      });
    }
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  validateEmail = event => {
    let errors = validate.validateEmail(event.target.value);
    if (errors.length) {
      let errState = Object.assign({}, this.state.errors);
      errState.email = errors.join("; ");
      this.setState({
        errors: errState
      });
    }
  };

  handlePassWordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleConfirmPassWordChange = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleCustomURLChange = event => {
    this.setState({ customURL: event.target.value });
  };

  handleOnSubmit = async event => {
    event.preventDefault();

    let newUser = {
      username: this.state.username,
      email: this.state.username,
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
          <div>
            <label className="registration--label" htmlFor="username">
              Username:
            </label>
            <input
              name="username"
              className="registration--input"
              type="text"
              onChange={this.handleUsernameChange}
              onBlur={this.validateUsername}
            />
          </div>

          {/* Example of using materializecss inputs with error messages */}
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

          <div>
            <label className="registration--label" htmlFor="email">
              Email:
            </label>
            <input
              name="email"
              className="registration--input"
              type="text"
              onChange={this.handleEmailChange}
            />
          </div>
          <div>
            <label className="registration--label" htmlFor="password">
              Password:
            </label>
            <input
              name="password"
              className="registration--input"
              type="password"
              onChange={this.handlePasswordChange}
            />
          </div>
          <div>
            <label className="registration--label" htmlFor="confirm-password">
              Confirm password:
            </label>
            <input
              name="confirm-password"
              className="registration--input"
              type="password"
              onChange={this.handleConfirmPasswordChange}
            />
          </div>
          <div>
            <label className="registration--label" htmlFor="custom-url">
              Custom URL:
            </label>
            <input
              name="custom-url"
              className="registration--input"
              type="text"
              onChange={this.handleCustomURLChange}
            />
          </div>
          <button className="registration--submit" type="submit">
            Register
          </button>
        </form>
      </section>
    );
  }
}

export default withRouter(RegistrationForm);
