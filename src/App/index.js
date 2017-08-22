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
      displayData: [],
      favorites: [],
      introText: ''
    };
    this.getData = this.getData.bind(this);
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

  getData(input) {
    fetch(`https://swapi.co/api/${input}/`).then((response) => {
      return response.json();
      //add step to clean/organize data
    }).then((data) => {
      this.setState({ displayData: data.results })
    })
  }

  // getPlanets() {
  //   fetch('https://swapi.co/api/planets/').then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     this.setState({ displayData: data.results })
  //   })
  //   this.setState({ displayType: 'planets' })
  // }
  //
  // getVehicles() {
  //   fetch('https://swapi.co/api/vehicles/').then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     this.setState({ displayData: data.results })
  //   })
  //   this.setState({ displayType: 'vehicles' })
  // }

  render() {
    return (
      <div className="App">
        <SideBar introText={ this.state.introText }/>
        <section className="MainSection">
          <Header />
          <DisplayBox
            getData={ this.getData }
          />
        </section>
      </div>
    );
  }
}

export default App;
