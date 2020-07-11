import React from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';
import './App.css'

const App  =  ()  => (
  <div className="App">
  <NumberProvider>
    <Calculator />
  </NumberProvider>
  </div>
);

export default App;