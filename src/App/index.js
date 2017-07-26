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

  getPeople() {
    console.log('people');
  }

  getPlanets() {
    console.log('planets');
  }

  getVehicles() {
    console.log('vehicles');
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Header />
        <DisplayBox
          getPeople={ this.getPeople.bind(this) }
          getPlanets={ this.getPlanets.bind(this) }
          getVehicles={ this.getVehicles.bind(this) }
        />
      </div>
    );
  }
}

export default App;
