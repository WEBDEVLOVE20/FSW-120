import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import './clear-button.css'

const ClearButton = ({ buttonValue }) => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button className="clear-button" type="button" onClick={() => handleClearValue(buttonValue)}>
    clear  {buttonValue}
    </button>
  );
};

export default ClearButton;