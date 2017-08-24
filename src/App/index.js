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
    this.handleFav = this.handleFav.bind(this);
    this.displayFavs = this.displayFavs.bind(this);
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
  }

  handleFav(name) {
    let newArr = this.state.displayData.map(data => {
      if (name === data.name) {
        data.fav = !data.fav
        data.fav ? this.addFav(data) :
                   this.removeFav(data)
      }
      return data
    })
    this.setState({ displayData: newArr })
  }

  addFav(data) {
    this.state.favorites.push(data)
    this.setState({ favorites: this.state.favorites })
  }

  removeFav(data) {
    const favIndex = this.state.favorites.indexOf(data)
    this.state.favorites.splice(favIndex, 1)
    this.setState({ favorites: this.state.favorites })
  }

  isFav(name) {
    if (this.state.favorites.find(data => data.name === name) != undefined) {
      return true;
    } else return false;
  }

  displayFavs() {
    this.setState({ displayData: this.state.favorites })
  }

  formatData(data) {
    if (data.type === 'people') {
      const promiseArr = data.results.map(person => {
        const { name, homeworld, species, films } = person;
        const personObj = { type: data.type, name: name };
        const planetPromise = fetch(homeworld).then(resp => resp.json());
        const speciesPromise = fetch(species).then(resp => resp.json());
        const filmsPromise = films.map(film => {
          return fetch(film).then(resp => resp.json());
        })
        return Promise.all([personObj, planetPromise, speciesPromise, filmsPromise]);
      })

      Promise.all(promiseArr)
      .then(data => data.map(person => {
        return {
          name: person[0].name,
          type: person[0].type,
          home: person[1].name,
          homePop: person[1].population,
          species: person[2].name,
          films: person[3],
          fav: this.isFav(person[0].name)
        }
      }))
      .then(data => this.setState({ displayData: data, loading: false }))
    }

    if (data.type === 'planets') {
      const promiseArr = data.results.map(planet => {
        const { name, terrain, population, climate, residents } = planet
        const planetObj = { type: data.type, name: name, terrain: terrain, population: population, climate: climate };
        const residentsPromise = residents.map(resident => {
          return fetch(resident).then(resp => resp.json());
        })
        return Promise.all([planetObj, Promise.all(residentsPromise)]);
      })

      Promise.all(promiseArr)
      .then(data => data.map(planet => {
        return {
          name: planet[0].name,
          type: planet[0].type,
          climate: planet[0].climate,
          population: planet[0].population,
          terrain: planet[0].terrain,
          characters: planet[1],
          fav: this.isFav(planet[0].name)
        }
      })).then(data => this.setState({ displayData: data, loading: false }))
    }

    if (data.type === 'vehicles') {
      const promiseArr = data.results.map(vehicle => {
        const { name, model, vehicle_class, passengers, films } = vehicle;
        const vehicleObj = { type: data.type, name: name, model: model, veh_class: vehicle_class, passengers: passengers };
        const filmsPromise = films.map(film => {
          return fetch(film).then(resp => resp.json());
        })
        return Promise.all([vehicleObj, Promise.all(filmsPromise)]);
      })

      Promise.all(promiseArr)
      .then(data => data.map(vehicle => {
        return {
          name: vehicle[0].name,
          type: vehicle[0].type,
          model: vehicle[0].model,
          vehicle_class: vehicle[0].veh_class,
          passengers: vehicle[0].passengers,
          films: vehicle[1],
          fav: this.isFav(vehicle[0].name)
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
          handleFav={ this.handleFav }
          displayFavs={ this.displayFavs }
          favorites={ this.state.favorites } />
      </div>
    );
  }
}

export default App;
