import React from "react";
import './Headerr.css';

export default function header() {


  return(
    <>
    <header className="header">
      <div className="header-logo">Explore Tunisia</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#culture">Culture</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="cta-button">Book Now</button>
    </header>
    </>
  );

  
}