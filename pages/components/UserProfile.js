import React from 'react';
import SideBar from './SideBar';

const UserProfile = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <section className="col-md-10">
          <h1>{props.user.name}'s profile</h1>
          <p>{props.user.info}</p>
          <p>{props.user.email}</p>
          <p>{props.user.url}</p>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
