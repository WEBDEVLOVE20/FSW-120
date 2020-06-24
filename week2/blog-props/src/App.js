import React from 'react';
import './App.css';
import BlogList from './components/bloglist/BlogList'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

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