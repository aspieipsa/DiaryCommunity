import React from "react";
//import './css/SideBar.css';

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
      <style jsx>{`
        .sidebar--sidebar {
          border: 1px solid black;
        }

        .sidebar--user {
          border-bottom: 1px solid black;
        }

        .sidebar--link-list {
          list-style: none;
        }
      `}</style>
    </aside>
  );
};

export default SideBar;
