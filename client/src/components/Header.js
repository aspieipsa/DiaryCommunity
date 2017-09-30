import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/main">Explore</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Diary Community
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
