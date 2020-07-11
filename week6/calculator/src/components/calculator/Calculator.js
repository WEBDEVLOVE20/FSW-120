import React from 'react';
import NumberButton from '../numberButton/NumberButton';
import FunctionButton from '../functionButton/FunctionButton';
import ClearButton from '../clearButton/ClearButton';
import Display from '../display/Display';
import EqualButton from '../equalButton/EqualButton';
import BackButton from '../backButton/BackButton';
import NegativeButton from '../negativeButton/NegativeButton';
import './calculator.css'


const Calculator = () => (
    <div>
      <div>
        <h1 className="title">REACT CALCULATOR</h1>
      </div>
      <div className="calc-container">
        <div className="calc-wrapper">
          <Display />
          <div className="row">
            <ClearButton />
            <BackButton />
            <NegativeButton />
          </div>
          <div className="row">
            <NumberButton buttonValue={7} />
            <NumberButton buttonValue={8} />
            <NumberButton buttonValue={9} />
            <FunctionButton buttonValue="/" />
          </div>
          <div className="row">
            <NumberButton buttonValue={4} />
            <NumberButton buttonValue={5} />
            <NumberButton buttonValue={6} />
            <FunctionButton buttonValue="*" />
          </div>
          <div className="row">
            <NumberButton buttonValue={1} />
            <NumberButton buttonValue={2} />
            <NumberButton buttonValue={3} />
            <FunctionButton buttonValue="+" />
          </div>
          <div className="row">
            <NumberButton buttonValue="." />
            <NumberButton buttonValue={0} />
            <EqualButton />
            <FunctionButton buttonValue="-" />
          </div>
        </div>
      </div>
    </div>
);

export default Calculator;