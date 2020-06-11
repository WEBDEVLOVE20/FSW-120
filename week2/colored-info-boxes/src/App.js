import React from 'react';
import './App.css';
import ColoredBoxes from "./ColoredBoxes"

function App() {
  return (
    <div>
      <ColoredBoxes
      boxes={{title: "Box #1", subtitle: "I am the color Blue", info: "Blue is the color of blueberries", styles: "red"}}
      />
      <ColoredBoxes
      boxes={{title: "Box #2", subtitle: "I am the color Red.", info: "Red is the color of a strawberry."}}
      />
      <ColoredBoxes
      boxes={{title: "Box #3", subtitle: "I am the color Green.", info: "Green is the color of grass."}}
      />
      <ColoredBoxes
      boxes={{title: "Box #4", subtitle: "I am the color Purple.", info: "Purple is the color of a plum."}}
      />
      <ColoredBoxes
      boxes={{title: "Box #5", subtitle: "I am the color Pink.", info: "Pink is the color of watermelon."}}
      />
      <ColoredBoxes
      boxes={{title: "Box #6", subtitle: "I am the color Yellow.", info: "Yellow is the color of bananas."}}
      />
      <ColoredBoxes
      boxes={{title: "Box #7", subtitle: "I am the color Grey.", info: "Grey is the color of a cloudy sky."}}
      />
      <ColoredBoxes
      boxes={{title: "Box #8", subtitle: "I am the color Orange.", info: "Orange is the color of a road work sign."}}
      />
      <ColoredBoxes
      boxes={{title: "Box #9", subtitle: "I am the color Brown.", info: "Brown is the color of dirt."}}
      />
      <ColoredBoxes
      boxes={{title: "Box #10", subtitle: "I am the color Burgundy.", info: "Burgundy is the color of wine."}}
      />
    
    </div>
  );
}

export default App;
