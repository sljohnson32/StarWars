import React, { Component } from 'react';
import SideBar from '../SideBar';
import Header from '../Header';
import DisplayBox from '../DisplayBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: '',
    };
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Header />
        <DisplayBox />
      </div>
    );
  }
}

export default App;
