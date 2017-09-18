import React from 'react';
import './css/RegistrationForm.css';

class RegistrationForm extends React.Component {
  state = {
    userName: '',
    email: '',
    passWord: '',
    confirmPassWord: '',
    customURL: ''
  };

  handleUserNameChange = event => {
    this.setState({ userName: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePassWordChange = event => {
    this.setState({ passWord: event.target.value });
  };

  handleConfirmPassWordChange = event => {
    this.setState({ confirmPassWord: event.target.value });
  };

  handleCustomURLChange = event => {
    this.setState({ customURL: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    alert('Registered! Or not.');
  };

  render() {
    return (
      <section className="registration--section">
        <h1>Register</h1>
        <form className="registration--form" onSubmit={this.handleOnSubmit}>
          <div>
            <label className="registration--label" for="username">
              Username:
            </label>
            <input
              name="username"
              className="registration--input"
              type="text"
              onChange={this.handleUserNameChange}
            />
          </div>
          <div>
            <label className="registration--label" for="email">
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
            <label className="registration--label" for="password">
              Password:
            </label>
            <input
              name="password"
              className="registration--input"
              type="password"
              onChange={this.handlePassWordChange}
            />
          </div>
          <div>
            <label className="registration--label" for="confirm-password">
              Confirm password:
            </label>
            <input
              name="confirm-password"
              className="registration--input"
              type="password"
              onChange={this.handleConfirmPassWordChange}
            />
          </div>
          <div>
            <label className="registration--label" for="custom-url">
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

export default RegistrationForm;
