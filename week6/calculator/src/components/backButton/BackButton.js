import React, { useContext } from 'react';
import { NumberContext } from '../numberProvided/NumberProvider';
import './back-button.css'

const BackButton = ({ buttonValue }) => {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button className="back-button" type="button" onClick={() => handleBackButton(buttonValue)}>
     &#8592;  {buttonValue}
    </button>
  );
};

export default BackButton;