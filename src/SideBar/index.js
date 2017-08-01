import React, { Component } from 'react';
import './SideBar.css';

const SideBar = (props) => {
  const { introText } = props;
  return (
    <div className="SideBar">
      <h2>{ introText }</h2>
    </div>
  );
}

export default SideBar;
