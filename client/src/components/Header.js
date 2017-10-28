import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderContent() {
    console.log('Auth:', this.props.auth);
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/login">Войти</a>
            </li>
            <li>
              <a href="/register">Зарегистрироваться</a>
            </li>
            <li>
              <a href="/main">Главная</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href={`/${this.props.auth.uri}/diary`}>Мой Дневник</a>
            </li>
            <li>
              <a href="/api/logout">Выход</a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{ paddingLeft: '20px' }}>
          <a href="/" className="left brand-logo">
            Дыбр!
          </a>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
