import React from 'react';
import './Card.css'

const Card = (props) => {
  const { type, name, species, home, homePop } = props.data;

  const displayCard = () => {
    if (type === 'people') {
      return (
        <div>
          <h4>{name}</h4>
          <p>{species}</p>
          <p>{home}</p>
          <p>{homePop}</p>
        </div>
      )
    }
    if (type === 'planets') {
      return (
        <div>
          'PLANET'
        </div>
      )
    }
    if (type === 'vehicles') {
      return (
        <div>
          'VEHICLE'
        </div>
      )
    }
  }

  return (
    <div className="data-card">
      { displayCard() }
    </div>
  );
}

export default Card;
