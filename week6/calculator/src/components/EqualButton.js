import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NumberButton = ({ buttonValue }) => {
  const { doMath } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => doMath(buttonValue)}>
    =  {buttonValue}
    </button>
  );
};

export default NumberButton;