import React from 'react';
import './App.css';
// import blogInfo from './components/blogInfo'
import BlogList from './components/BlogList'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
    //const blogPostComps = vacaSpots.map(spot => <Spot key={spot.id} place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />)
    
    return (
        <div>
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}

export default App