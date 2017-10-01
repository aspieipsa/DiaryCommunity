import React from 'react';
import './css/SideBar.css';

const SideBar = props => {
  return (
    <aside className="sidebar--sidebar col-md-2">
      <div className="sidebar--user">
        <h2>Username</h2>
      </div>
      <div className="sidebar--links">
        <h2>Links</h2>
        <ul className="sidebar--link-list">
          <li className="sidebar--link-list-item">
            <a href="#">Stuff</a>
          </li>
          <li className="sidebar--link-list-item">
            <a href="#">Stuff</a>
          </li>
          <li className="sidebar--link-list-item">
            <a href="#">Stuff</a>
          </li>
          <li className="sidebar--link-list-item">
            <a href="#">Stuff</a>
          </li>
          <li className="sidebar--link-list-item">
            <a href="#">Stuff</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
