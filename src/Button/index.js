import React, { Component } from 'react';
import './Button.css';

const Button = (props) => {
  const { name, func, btnText, displayType } = props;
  return (
    <button
      className={ displayType === btnText ?
        'button active' : 'button' }
      onClick={ () => func(btnText.toLowerCase()) }
    >{ btnText }</button>
  );
}

export default Button;
