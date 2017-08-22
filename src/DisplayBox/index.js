import React, { Component } from 'react';
import Button from '../Button';
// import './Header.css';

class DisplayBox extends Component {

  render() {
    const { getData, displayType } = this.props;
    return (
      <div className="DisplayBox">
        <Button
          btnText={ 'People' }
          displayType = { displayType }
          func={ getData }
        />
        <Button
          btnText={ 'Planets' }
          displayType = { displayType }
          func={ getData }
        />
        <Button
          btnText={ 'Vehicles' }
          displayType = { displayType }
          func={ getData }
        />
        <h2>This is where stuff will be displayed</h2>
      </div>
    );
  }
}

export default DisplayBox;
