import React from 'react';
import './App.css'

function App() {
    
  return (

    <div className="list">

        <h1 className="title">To-Do List</h1>

        <h2>Laundry</h2>
        <p>- Wash, Dry, Iron, Fold</p>
        <input type="checkbox" />
        <input type="button" value="Delete" />

        <h2>Yard Work</h2>
        <p>- Mow, Pull weeds, Plant Flowers</p>
        <input type="checkbox" />
        <input type="button" value="Delete" />
     
        <h2>Grocery Store</h2>
        <p>- Apples, Lettuce, Dressing, Chicken</p>
        <input type="checkbox" />
        <input type="button" value="Delete" />

        <h2>Amazon</h2>
        <p>- Steam mop, Dog Life jackets, Boat seats</p>
        <input type="checkbox" />
        <input type="button" value="Delete" />
    </div>
  );
}

export default App;