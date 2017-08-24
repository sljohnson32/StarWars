import React from 'react';
import Spinner from '../Spinner'
import Card from '../Card'
import './CardContainer.css'

const CardContainer = (props) => {
  const { loading, displayData, handleFav, favorites } = props;

  return (
    <div className="CardContainer">
      { loading ? <Spinner /> : displayData.map((data, i) => <Card data={ data } handleFav={ handleFav } key={i} />) }
    </div>
  );
}

export default CardContainer;
