import React from 'react';
// import './FavBtn.css';

const FavBtn = () => {
  // const {  } = props;

  const tester = false;

  const displayFavBtn = () => {
    if (tester === true) {
      return (
        <div className='favBtn'>
          <p>&#9825;</p>
        </div>
      )
    }
    if(tester === false) {
      return (
        <div className='favBtn active'>
          <p>&#x2665;</p>
        </div>
      )
    }
  }

  return (
    <button
      onClick={ () => console.log('FAV BTN') }
    >{displayFavBtn()}</button>
  );
}

export default FavBtn;


// className={  favorites.find(name)?
//   'favBtn active' : 'favBtn'
