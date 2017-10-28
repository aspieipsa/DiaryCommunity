import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class MainPage extends React.Component {
  render() {
    //console.log(this.props);
    let user = this.props.user || { name: 'Stranger' };

    return (
      <div className="container">
        <h1>Hello {user.name}</h1>
        <p>How are you doing today?</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.auth };
}

export default connect(mapStateToProps)(MainPage);
