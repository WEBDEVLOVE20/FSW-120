import React from 'react';
import './App.css';
import ColoredBoxes from "./ColoredBoxes"

function App() {
  return (
    <div>
      <ColoredBoxes boxColor="blue"
      boxes={{title: "Box #1", subtitle: "I am the color Blue", info: "Blue is the color of blueberries."}}
      />
      <ColoredBoxes boxColor="red"
      boxes={{title: "Box #2", subtitle: "I am the color Red.", info: "Red is the color of a strawberries."}}
      />
      <ColoredBoxes boxColor="green"
      boxes={{title: "Box #3", subtitle: "I am the color Green.", info: "Green is the color of grass."}}
      />
      <ColoredBoxes boxColor="purple"
      boxes={{title: "Box #4", subtitle: "I am the color Purple.", info: "Purple is the color of a plums."}}
      />
      <ColoredBoxes boxColor="pink"
      boxes={{title: "Box #5", subtitle: "I am the color Pink.", info: "Pink is the color of watermelon."}}
      />
      <ColoredBoxes boxColor="yellow"
      boxes={{title: "Box #6", subtitle: "I am the color Yellow.", info: "Yellow is the color of bananas."}}
      />
      <ColoredBoxes boxColor="grey"
      boxes={{title: "Box #7", subtitle: "I am the color Grey.", info: "Grey is the color of a cloudy sky."}}
      />
      <ColoredBoxes boxColor="orange"
      boxes={{title: "Box #8", subtitle: "I am the color Orange.", info: "Orange is the color of tangerines."}}
      />
      <ColoredBoxes boxColor="teal"
      boxes={{title: "Box #9", subtitle: "I am the color Teal.", info: "Teal is the color of the ocean."}}
      />
      <ColoredBoxes boxColor="maroon"
      boxes={{title: "Box #10", subtitle: "I am the color Maroon.", info: "Maroon is the color of wine."}}
      />
    </div>
  );
}

export default App;