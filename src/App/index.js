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
      // .then(data => this.setState({ displayData: data, loading: false }))
  }

  formatData(data) {
    if (data.type === 'people') {
      const promiseArr = data.results.map(person => {
        const personObj = { type: data.type, name: person.name };
        const planet = fetch(person.homeworld).then(resp => resp.json());
        const species = fetch(person.species).then(resp => resp.json());
        return Promise.all([personObj, planet, species]);
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
      })).then(data => this.setState({ displayData: data, loading: false }))
    }
    if (data.type === 'planets') {
      console.log(data.type)
    }
    if (data.type === 'vehicles') {
      console.log(data.type)
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
