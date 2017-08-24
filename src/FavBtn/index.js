import React from 'react';
// import './FavBtn.css';

const FavBtn = (props) => {
  const { data, handleFav } = props;

  return (
    <button
      onClick={ () => handleFav(data.name) }>
      { data.fav ?
        <div className='favBtn'><p>&#x2665;</p></div> :
        <div className='favBtn'><p>&#9825;</p></div>
      }
    </button>
  );
}

export default FavBtn;
