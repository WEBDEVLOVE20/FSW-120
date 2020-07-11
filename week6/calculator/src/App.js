import React from 'react';
import Calculator from './components/calculator/Calculator';
import NumberProvider from './components/numberProvided/NumberProvider';
import './App.css'

const App = ()  => (
  <div>
  <NumberProvider>
    <Calculator />
  </NumberProvider>
  </div>
);

export default App;