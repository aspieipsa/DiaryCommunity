import React from 'react';
import './css/LogInForm.css';
//login test
import fakeAuth from '../apiMockup/fakeAuth.js';
import { Redirect } from 'react-router-dom';

class LogInForm extends React.Component {
  state = {
    userName: '',
    passWord: '',
    //login test
    redirectToReferrer: false
  };

  handleUserNameChange = event => {
    this.setState({ userName: event.target.value });
  };

  handlePassWordChange = event => {
    this.setState({ passWord: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    alert('Logged in! Or not.');
  };

  //login test
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <section className="log-in--section">
        <h1>Log in</h1>
        <form className="log-in--form" onSubmit={this.handleOnSubmit}>
          <label for="username">Username:</label>
          <input
            name="username"
            className="log-in--input"
            type="text"
            onChange={this.handleUserNameChange}
          />
          <label for="password">Password:</label>
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
            Don't have an account? <a href="">Register</a>
          </p>
        </form>
      </section>
    );
  }
}

export default LogInForm;
