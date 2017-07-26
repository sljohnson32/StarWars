import React, { Component } from 'react';
// import './Header.css';

const Button = (props) => {
  const { name, func, btnText, disableTrigger } = props;
  return (
    <button
      className={ name }
      disabled={disableTrigger}
      onClick={ () => func() }
    >{ btnText }</button>
  );
}

export default Button;
