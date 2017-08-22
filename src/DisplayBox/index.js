import React, { Component } from 'react';
import Button from '../Button';
// import './Header.css';

class DisplayBox extends Component {

  render() {
    const { getData } = this.props;
    return (
      <div className="DisplayBox">
        <Button
          name={ 'people-button'}
          btnText={ 'people' }
          displayType = { 'people' }
          func={ getData }
        />
        <Button
          name={ 'planet-button'}
          btnText={ 'planets' }
          displayType = { 'planet' }
          func={ getData }
        />
        <Button
          name={ 'vehicles-button'}
          btnText={ 'vehicles' }
          displayType = { 'vehicles' }
          func={ getData }
        />
        <h2>This is where stuff will be displayed</h2>
      </div>
    );
  }
}

export default DisplayBox;
