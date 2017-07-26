import React, { Component } from 'react';
import Button from '../Button';
// import './Header.css';

class DisplayBox extends Component {

  render() {
    const { getPeople, getPlanets, getVehicles } = this.props;
    return (
      <div className="DisplayBox">
        <Button
          name={ 'people-button'}
          btnText={ 'people' }
          func={ getPeople }
        />
        <Button
          name={ 'planet-button'}
          btnText={ 'planets' }
          func={ getPlanets }
        />
        <Button
          name={ 'vehicles-button'}
          btnText={ 'vehicles' }
          func={ getVehicles }
        />
        <h2>This is where stuff will be displayed</h2>
      </div>
    );
  }
}

export default DisplayBox;
