import React from 'react';
import './Header.css';

const Header = (props) => {

  const { displayFavs, favorites } = props;

  return (
    <div className="header">
      <h2>SWAPI-Box</h2>
      <div className='favBtn-container'>
        <button onClick={ () => displayFavs() }>Favorites<div className='favNumber'>{favorites.length}</div></button>
      </div>
    </div>
    );
}

export default Header;
