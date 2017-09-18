import React from 'react';
import SideBar from './SideBar.js';
import EntryForm from './EntryForm';

const NewEntry = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <EntryForm />
      </div>
    </div>
  );
};

export default NewEntry;
