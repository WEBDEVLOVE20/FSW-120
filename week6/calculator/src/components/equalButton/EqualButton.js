import React, { useContext } from 'react';
import { NumberContext } from '../numberProvided/NumberProvider';
import './equal-button.css'

const EqualButton = ({ buttonValue }) => {
  const { doMath } = useContext(NumberContext);
  return (
    <button className="equal-button" type="button" onClick={() => doMath(buttonValue)}>
    =  {buttonValue}
    </button>
  );
};

export default EqualButton;