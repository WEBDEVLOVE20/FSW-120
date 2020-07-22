import React from 'react';
import './home.css';
const Home = () => {
  return (
    <div>
      <div className="title-container">
        <img src='https://img.icons8.com/fluent/64/000000/twitter.png' alt="logo"/>
        <h1>Welcome To Twitter</h1>
      </div>
      <div className="home-container">
        <div>
          <img className="home-pics" src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="computer" />
          <h1 className="home-text">Connect With Us</h1>
          <h3 className="home-text">Connect from all over the world!</h3>
        </div>
        <div>
          <img className="home-pics" src="https://images.unsplash.com/photo-1542650742-d3150fb66298?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="map" />
          <h1 className="home-text">Explore With Us</h1>
          <h3 className="home-text">Let go and explore all that is avaliable.</h3>
        </div>
        <div>
          <img className="home-pics" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="meeting" />
          <h1 className="home-text">Careers With Us</h1>
          <h3 className="home-text">Come work with our growing team!</h3>
        </div>
      </div>
  </div>
  );
}

export default Home;