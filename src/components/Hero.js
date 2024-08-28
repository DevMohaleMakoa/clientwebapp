import React from 'react';
import './Hero.css'; // Create this file for custom styles

const Hero = () => {
  return (
    <div className="hero-section text-center">
      <h1>Welcome to MyShop</h1>
      <p>Your one-stop shop for all things awesome.</p>
      <a href="/pricing" className="btn btn-primary">Shop Now</a>
    </div>
  );
};

export default Hero;
