import React, { useContext } from 'react';
import { NumberContext } from '../numberProvided/NumberProvider';
import './clear-button.css'

const ClearButton = ({ buttonValue }) => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button className="clear-button" type="button" onClick={() => handleClearValue(buttonValue)}>
    Clear  {buttonValue}
    </button>
  );
};

export default ClearButton;