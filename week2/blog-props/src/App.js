import React from 'react';
import './App.css';
import BlogList from './components/BlogList'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
    return (
        <div>
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}

export default App