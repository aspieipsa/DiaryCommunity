import React from 'react';
import SideBar from './components/SideBar.js';
import EntryForm from './components/EntryForm';

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
