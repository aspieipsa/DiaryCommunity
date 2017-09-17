import React from 'react';
import './css/LogIn.css';

class LogIn extends React.Component {
  state = {
    userName: '',
    passWord: ''
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

  render() {
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
          <button className="log-in--login-button" type="submit">
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

export default LogIn;
