import React from 'react';
import axios from 'axios';
//import querystring from "querystring";
import './css/LogForm.css';


class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  // TODO: rewrite to use redux ???
  handleOnSubmit = event => {
    let props = this.props;
    event.preventDefault();
    axios
      .post('/api/login', {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then(function(response) {
        props.history.push('/main');
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <section className="log-in--section">
        <form className="log-in--form" onSubmit={this.handleOnSubmit}>
          <label htmlFor="email">Почта</label>
          <input name="email" className="log-in--input" type="text" onChange={this.handleEmailChange} />
          <label htmlFor="password">Пароль</label>
          <input name="password" className="log-in--input" type="password" onChange={this.handlePasswordChange} />
          <button className="log-in--login-button" type="submit" onClick={this.login}>
            Войти
          </button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
