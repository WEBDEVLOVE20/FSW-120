import React, { useContext } from 'react';
import { NumberContext } from '../numberProvided/NumberProvider';
import './number-button.css'

const NumberButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button className="num-button" type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default NumberButton;