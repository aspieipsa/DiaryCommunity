import React from 'react';
import SideBar from './SideBar.js';
import EntryList from './EntryList.js';
import './css/FeedPage.css';

const FeedPage = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <EntryList entries={props.entries} />
      </div>
    </div>
  );
};

export default FeedPage;
