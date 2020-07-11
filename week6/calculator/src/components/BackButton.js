import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const BackButton = ({ buttonValue }) => {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleBackButton(buttonValue)}>
    backspace  {buttonValue}
    </button>
  );
};

export default BackButton;