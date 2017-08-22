import React from 'react';
import Spinner from '../Spinner'

const CardContainer = (props) => {
  const { loading } = props;
  return (
    <div className="CardContainer">
      { loading ? <Spinner /> : "We have data!"}
    </div>
  );
}

export default CardContainer;
