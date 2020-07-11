import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NegativeButton = ({ buttonValue }) => {
  const { handleToggleNegative } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleToggleNegative(buttonValue)}>
    negative  {buttonValue}
    </button>
  );
};

export default NegativeButton;