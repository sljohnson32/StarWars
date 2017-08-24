import React, { Component } from 'react';
import Button from '../Button';
import Header from '../Header';
import CardContainer from '../CardContainer';

// import './Header.css';

class MainSection extends Component {

  render() {
    const { getData, displayType, loading, displayData, handleFav, favorites } = this.props;
    return (
      <div className='mainSection'>
        <Header />
        <div className="btnBox">
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
        </div>
        <CardContainer loading={ loading }
                       displayData={ displayData }
                       handleFav={ handleFav }
        />
      </div>
    );
  }
}

export default MainSection;
