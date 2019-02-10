import React from 'react';

const Button = props => {
  return (
    <button
      id="new-quote"
      onClick={props.getQuote}>New Quote</button>
  )
}

export default Button;