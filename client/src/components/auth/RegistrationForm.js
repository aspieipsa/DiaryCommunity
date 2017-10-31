import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './css/RegistrationForm.css';
import * as validate from './formValidation';

class RegistrationForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    uri: '',
    errors: {},
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  validateName = async event => {
    let errors = await validate.validateName(event.target.value);
    let errState = Object.assign({}, this.state.errors);
    if (errors.length) errState.name = errors.join('; ');
    else errState.name = null;
    this.setState({
      errors: errState,
    });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  validateEmail = async event => {
    let errors = await validate.validateEmail(event.target.value);
    let errState = Object.assign({}, this.state.errors);
    if (errors.length) errState.email = errors.join('; ');
    else errState.email = null;
    this.setState({
      errors: errState,
    });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  validatePassword = event => {
    let errors = validate.validatePassword(event.target.value);
    let errState = Object.assign({}, this.state.errors);
    if (errors.length) errState.password = errors.join('; ');
    else errState.password = null;
    this.setState({
      errors: errState,
    });
  };

  handleConfirmPasswordChange = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  validateConfirmPassword = event => {
    let password = document.getElementById('password').value;
    let errors = validate.validateConfirmPassword(password, event.target.value);
    let errState = Object.assign({}, this.state.errors);
    if (errors.length) errState.confirmPassword = errors;
    else errState.confirmPassword = null;
    this.setState({
      errors: errState,
    });
  };

  handleUriChange = event => {
    this.setState({ uri: event.target.value });
  };

  validateUri = async event => {
    let errors = await validate.validateUri(event.target.value);
    let errState = Object.assign({}, this.state.errors);
    if (errors.length) errState.uri = errors;
    else errState.uri = null;
    this.setState({
      errors: errState,
    });
  };

  handleOnSubmit = async event => {
    event.preventDefault();

    let newUser = {
      name: this.state.name,
      email: this.state.email,
      uri: this.state.uri,
      password: this.state.password,
    };
    // run checks
    const errors = await validate.validateAll(newUser);

    console.log('errors', errors);
    if (errors.length) {
      this.setState({ errors });
    } else {
      let props = this.props;

      axios
        .post('/api/register', newUser)
        .then(function(response) {
          console.log('got it!');
          props.history.push('/main');
        })
        .catch(function(error) {
          console.log(error);
          alert('Oops, something went wrong.');
        });
    }
  };

  render() {
    return (
      <section className="registration--section">
        <form className="registration--form" onSubmit={this.handleOnSubmit}>
          <div className="input-field">
            <input
              id="email"
              type="email"
              className={this.state.errors.email ? 'invalid' : ''}
              name="email"
              onChange={this.handleEmailChange}
              onBlur={this.validateEmail}
            />
            <label htmlFor="email" data-error={this.state.errors.email} className="active">
              Электронная почта
            </label>
          </div>

          <div className="input-field">
            <input
              id="password"
              type="password"
              className={this.state.errors.password ? 'invalid' : ''}
              name="password"
              onChange={this.handlePasswordChange}
              onBlur={this.validatePassword}
            />
            <label htmlFor="password" data-error={this.state.errors.password} className="active">
              Пароль
            </label>
          </div>

          <div className="input-field">
            <input
              id="confirm-password"
              type="password"
              className={this.state.errors.confirmPassword ? 'invalid' : ''}
              name="confirm-password"
              onChange={this.handleConfirmPasswordChange}
              onBlur={this.validateConfirmPassword}
            />
            <label htmlFor="confirm-password" data-error={this.state.errors.confirmPassword} className="active">
              Пароль еще раз
            </label>
          </div>
          <div className="input-field">
            <input
              id="name"
              type="text"
              className={this.state.errors.name ? 'invalid' : ''}
              name="name"
              onChange={this.handleNameChange}
              onBlur={this.validateName}
            />
            <label htmlFor="name" data-error={this.state.errors.name} className="active">
              Псевдоним
            </label>
          </div>

          <div className="input-field">
            <input
              id="uri"
              type="text"
              className={this.state.errors.uri ? 'invalid' : ''}
              name="uri"
              onChange={this.handleUriChange}
              onBlur={this.validateUri}
            />
            <label htmlFor="uri" data-error={this.state.errors.uri} className="active">
              Адрес для url (только латиница)
            </label>
          </div>

          <button className="waves-effect waves-light btn" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </section>
    );
  }
}

export default withRouter(RegistrationForm);
