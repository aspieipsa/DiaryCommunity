import React from 'react';
import SideBar from './components/SideBar.js';
import EntryList from './components/EntryList.js';
import './css/FeedPage.css';

const FeedPage = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <EntryList {...props} />
      </div>
    </div>
  );
};

export default FeedPage;
