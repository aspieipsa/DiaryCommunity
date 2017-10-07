import React from "react";
import EntryList from "./EntryList";
import Menu from "../Menu";

export default class DiaryApp extends React.Component {
  render() {
    // check what we asked to show

    // check what we have in the store

    // depending on that display different stuff

    return (
      <div>
        <Menu />
        <EntryList />
      </div>
    );
  }
}
