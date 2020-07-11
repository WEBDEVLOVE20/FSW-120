import React, { useContext } from 'react';
import { NumberContext } from '../numberProvided/NumberProvider';
import './negative-button.css';

const NegativeButton = ({ buttonValue }) => {
  const { handleToggleNegative } = useContext(NumberContext);
  return (
    <button className="neg-button" type="button" onClick={() => handleToggleNegative(buttonValue)}>
    Negative  {buttonValue}
    </button>
  );
};

export default NegativeButton;