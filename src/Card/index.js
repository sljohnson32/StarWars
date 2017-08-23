import React from 'react';

const Card = (props) => {
  const { type, name, species, home, homePop } = props.data;

  return (
    <div className="CardContainer">
      {type === 'people' ?
        <div className={'card'}>
          {name}
          {species}
          {home}
          {homePop}
        </div> : 'something else'
      }
    </div>
  );
}

export default Card;
