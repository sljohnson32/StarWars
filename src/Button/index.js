import React, { Component } from 'react';
import './Button.css';

const Button = (props) => {
  const { name, func, btnText, displayType } = props;
  return (
    <button
      className={ name }
      active={ displayType == btnText ? true : false }
      onClick={ () => func() }
    >{ btnText }</button>
  );
}

export default Button;
