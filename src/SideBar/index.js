import React, { Component } from 'react';
import './SideBar.css';

const SideBar = (props) => {
  const { introText } = props;
  return (
    <div className="SideBar">
      <p>{ introText }</p>
    </div>
  );
}

export default SideBar;
