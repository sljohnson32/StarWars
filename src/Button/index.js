import React from 'react';
import './Button.css';

const Button = (props) => {
  const { func, btnText, displayType } = props;
  return (
    <button
      className={ displayType === btnText.toLowerCase() ?
        'button active' : 'button' }
      onClick={ () => func(btnText.toLowerCase()) }
    >{ btnText }</button>
  );
}

export default Button;
