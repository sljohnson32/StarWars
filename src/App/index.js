import React, { Component } from 'react';
import SideBar from '../SideBar';
import Header from '../Header';
import DisplayBox from '../DisplayBox';
import './App.css';

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: '',
      introText: ''
    };
  }

  componentDidMount() {
    const rando = getRandomArbitrary(1, 8);
    console.log(rando);
    fetch(`https://swapi.co/api/films/${rando}/`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data)
      // this.setState({ introText: data.value[0] })
    })
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
