import React, { Component } from 'react';
import Button from '../Button';
import Header from '../Header';
import CardContainer from '../CardContainer';

// import './Header.css';

class MainSection extends Component {

  render() {
    const { getData, displayType, loading, displayData } = this.props;
    return (
      <div className='MainSection'>
        <Header />
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
          <CardContainer loading={ loading }
                         displayData={ displayData }
          />
        </div>
      </div>
    );
  }
}

export default MainSection;
