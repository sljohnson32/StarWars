import React, { Component } from 'react';
import SideBar from '../SideBar';
import MainSection from '../MainSection';
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
      introText: '',
      displayType: '',
      loading: false
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const rando = getRandomArbitrary(1, 8);
    fetch(`https://swapi.co/api/films/${rando}/`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({ introText: data.opening_crawl })
    })
  }

  getData(key) {
    this.setState({ loading: true, displayType: key })
    fetch(`https://swapi.co/api/${key}/`)
      .then(response => response.json())
      .then(data => {
        const dataType = {type: key}
        return Object.assign(dataType, {results: data.results})
      })
      .then(data => this.formatData(data))
      .then(data => this.setState({ displayData: data, loading: false }))
  }

  formatData(data) {
    if (data.type === 'people') {
      return data.results.map(person => {
        const newObj = {
          type: data.type,
          name: person.name
        }

        const planet = fetch(person.homeworld).then(resp => resp.json())
        const species = fetch(person.species).then(resp => resp.json())

        Promise.all([planet, species]).then(data => {
          newObj.home = data[0].name
          newObj.homePop = data[0].population
          newObj.species = data[1].name
        })
        return newObj;
      })
    }
  }

  render() {
    return (
      <div className="App">
        <SideBar introText={ this.state.introText }/>
        <MainSection
          getData={ this.getData }
          displayType={ this.state.displayType }
          loading={ this.state.loading }
        />
      </div>
    );
  }
}

export default App;

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
