import React from 'react';
import './about.css'

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Our Family Business</h1>
      <img className="family-photo" src="https://images.unsplash.com/photo-1542216515-4e6a586c1ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80" alt="family"/>
      <h2 className="family-info"> Welcome to Doctor Drains, your number one source for all things plumbing. We're dedicated to giving you the very best of service, with a focus on dependability, customer service and honesty. Founded in 1920 by George Smith Jr, Doctore Drains has come a long way from its beginnings in 1920. When George Smith Jr first started out, his passion for helping his fellow neighbor and community drove him to start a plumbing busniess, and gave him the impetus to turn hard work and inspiration into to a wonderful, helpful trade. We now serve customers all over central Texas area, and are thrilled to be a part of the this journey that our great great grandfather George Smith Jr started.</h2>
      <h2 h2 className="family-info">We hope you are happy with our services, as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</h2>
      <h2 h2 className="family-info">Sincerely, The Smith Family, Owners of Doctor Drains</h2>
    </div>
  );
}

export default About;