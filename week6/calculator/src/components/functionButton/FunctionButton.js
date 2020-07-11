import React, { useContext } from 'react';
import { NumberContext } from '../numberProvided/NumberProvider';
import './function-button.css'

const FunctionButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
      <div>
    <button className="function-button" type="button" onClick={() => handleSetCalcFunction(buttonValue)}>
      {buttonValue}
    </button>
    </div>
  );
};

export default FunctionButton;