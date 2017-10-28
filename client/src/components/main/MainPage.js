import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class MainPage extends React.Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    let user = this.props.user;
    if (!user) return null;

    return (
      <div className="container">
        <h1>Привет, {user.name}!</h1>
        <p>Как дела и всё такое?</p>
        <p>Эта страница (как и всё остальное) в разработке, поэтому тут пока почти ничего нет. </p>
        <p>Но будет. Обещаю.</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.auth };
}

export default connect(mapStateToProps, actions)(MainPage);
