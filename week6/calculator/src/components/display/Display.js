import React, { useContext } from 'react';
import { NumberContext } from '../numberProvided/NumberProvider';
import './display.css'

const Display = () => {
  const { number, storedNumber} = useContext(NumberContext);
  return (
    <div className="display-screen">
      <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
    </div>
  );
};

export default Display;