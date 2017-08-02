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
      favorites: [],
      introText: '',
      displayType: '',
      displayData: []
    };
  }

  componentDidMount() {
    const rando = getRandomArbitrary(1, 8);
    console.log(rando);
    fetch(`https://swapi.co/api/films/${rando}/`).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ introText: data.opening_crawl })
    })
  }

  getPeople() {
    fetch('https://swapi.co/api/people/').then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ displayData: data.results })
    })
    this.setState({ displayType: 'people' })
  }

  getPlanets() {
    fetch('https://swapi.co/api/planets/').then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ displayData: data.results })
    })
    this.setState({ displayType: 'planets' })
  }

  getVehicles() {
    fetch('https://swapi.co/api/vehicles/').then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ displayData: data.results })
    })
    this.setState({ displayType: 'vehicles' })
  }

  render() {
    return (
      <div className="App">
        <SideBar introText={ this.state.introText }/>
        <section className="MainSection">
          <Header />
          <DisplayBox
            getPeople={ this.getPeople.bind(this) }
            getPlanets={ this.getPlanets.bind(this) }
            getVehicles={ this.getVehicles.bind(this) }
            displayType = { this.state.displayType }
          />
        </section>
      </div>
    );
  }
}

export default App;
