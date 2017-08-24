import React from 'react';
import './Header.css';

const Header = (props) => {

  const { displayFavs, favorites } = props;

  return (
    <div className="header">
      <h2>SWAPI-Box</h2>
      <div className='favBtn-container'>
        <button 
          disabled={ favorites.length === 0 }
          onClick={ () => displayFavs() }>
          <h4>Favorites<div className='favNumber'>{favorites.length}</div></h4>
        </button>
      </div>
    </div>
    );
}

export default Header;
