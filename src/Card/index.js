import React from 'react';

const Card = (props) => {
  const { data } = props;

  const { name, home, homePop, species } = data

  return (
    <div className="CardContainer">
      {data.type === 'people' ?
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
