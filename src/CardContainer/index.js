import React from 'react';
import Spinner from '../Spinner'
import Card from '../Card'

const CardContainer = (props) => {
  const { loading, displayData } = props;

  return (
    <div className="CardContainer">
      { loading ? <Spinner /> : displayData.map((data, i) => <Card data={ data } key={i} />) }
    </div>
  );
}

export default CardContainer;
