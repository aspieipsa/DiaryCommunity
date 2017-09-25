import React from 'react';
import SideBar from './components/SideBar';

class UserProfile extends React.Component {
  state = {
    userName: '',
    userInfo: '',
    userEmail: '',
    userURL: ''
  };

  componentDidMount() {
    fetch(this.props.fetchRoute + this.props.userURL)
      .then(res => res.json())
      .then(user =>
        this.setState({
          userName: user.name,
          userInfo: user.info,
          userEmail: user.email,
          userURL: user.customURL
        })
      );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <section className="col-md-10">
            <h1>{this.state.userName}'s profile</h1>
            <p>{this.state.userInfo}</p>
            <p>{this.state.userEmail}</p>
            <p>{this.state.userURL}</p>
          </section>
        </div>
      </div>
    );
  }
}

export default UserProfile;
