import React from 'react';
import './App.css';
import vacaSpots from './locations/vacaSpots'
import Spot from './locations/Spot'
import Header from './locations/Header'

function App() {
  
    const vacationComps = vacaSpots.map(spot => <Spot key={spot.id} place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />)
    
    return (
        <div>
        <Header /> 
        {vacationComps}
        </div>
    )
}

export default App