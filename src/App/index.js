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

  // componentDidMount() {
  //   const rando = getRandomArbitrary(1, 8);
  //   fetch(`https://swapi.co/api/films/${rando}/`)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     this.setState({ introText: data.opening_crawl })
  //   })
  // }

  getData(key) {
    this.setState({ loading: true, displayType: key })
    fetch(`https://swapi.co/api/${key}/`)
      .then(response => response.json())
      .then(data => {
        const dataType = {type: key}
        return Object.assign(dataType, {results: data.results})
      })
      // .then(data => console.log(data.results[0]))
      .then(data => this.formatData(data))

  }

  formatData(data) {
    if (data.type === 'people') {
      const promiseArr = data.results.map(person => {
        const { name, homeworld, species } = person;
        const personObj = { type: data.type, name: name };
        const planetPromise = fetch(homeworld).then(resp => resp.json());
        const speciesPromise = fetch(species).then(resp => resp.json());
        return Promise.all([personObj, planetPromise, speciesPromise]);
      })

      Promise.all(promiseArr)
      .then(data => data.map(person => {
        return {
          name: person[0].name,
          type: person[0].type,
          home: person[1].name,
          homePop: person[1].population,
          species: person[2].name
        }
      }))
      .then(data => this.setState({ displayData: data, loading: false }))
    }

    //PLANETS
    if (data.type === 'planets') {
      const promiseArr = data.results.map(planet => {
        const { name, terrain, population, climate, residents } = planet
        const planetObj = { type: data.type, name: name, terrain: terrain, population: population, climate: climate };
        const residentsPromise = residents.map(resident => {
          return fetch(resident).then(resp => resp.json());
        })
        return Promise.all([planetObj, Promise.all(residentsPromise)]);
      })
      console.log(promiseArr)
      Promise.all(promiseArr)
      .then(data => data.map(planet => {
        return {
          name: planet[0].name,
          type: planet[0].type,
          climate: planet[0].climate,
          population: planet[0].population,
          terrain: planet[0].terrain,
          characters: planet[1]
        }
      })).then(data => this.setState({ displayData: data, loading: false }))
    }

    //VEHICLES
    if (data.type === 'vehicles') {
      console.log(data.results[0]);
      const promiseArr = data.results.map(vehicle => {
        const { name, model, vehicle_class, passengers, films } = vehicle;
        const vehicleObj = { type: data.type, name: name, model: model, veh_class: vehicle_class, passengers: passengers };
        const filmsPromise = films.map(film => {
          return fetch(film).then(resp => resp.json());
        })
        return Promise.all([vehicleObj, Promise.all(filmsPromise)]);
      })
      console.log(promiseArr)
      Promise.all(promiseArr)
      .then(data => data.map(vehicle => {
        return {
          name: vehicle[0].name,
          model: vehicle[0].model,
          vehicle_class: vehicle[0].veh_class,
          passengers: vehicle[0].passengers,
          films: vehicle[1]
        }
      })).then(data => this.setState({ displayData: data, loading: false }))
    }
  }

  render() {
    return (
      <div className="App">
        <SideBar introText={ this.state.introText }/>
        <MainSection
          getData={ this.getData }
          displayType={ this.state.displayType }
          displayData={ this.state.displayData }
          loading={ this.state.loading }
        />
      </div>
    );
  }
}

export default App;
