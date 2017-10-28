import React from 'react';
import axios from 'axios';

class MainPage extends React.Component {
  render() {
    let user = this.props.user || { name: 'Stranger' };

    return (
      <div className="container">
        <h1>Hello {user.name}</h1>
        <p>How are you doing today?</p>
      </div>
    );
  }
}

export default MainPage;
