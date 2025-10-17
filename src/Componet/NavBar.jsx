import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {



  return (
    <div>
      <title>VerteX</title>
      <link rel="stylesheet" href="style.css" />

      <header className='header'>
        <nav className="navbar" >
          <h2 className="logo"><a href="#">VerteX-work</a></h2>
          <div className="toggle-btn"></div>

          <ul className="links">
            <Link to={'/'} ><li><a >Home</a></li></Link>
            <Link to={'/card'}><li><a >Our Courses</a></li></Link>
            <Link to={"/portfolio"}><li><a>Portfolio</a></li></Link>
            <Link to={"/testimonial"}><li><a>Testimonial</a></li></Link>
            <Link to={'/contactus'}><li><a >Contact Us</a></li></Link>
          </ul>

          <div className="buttons">
            <a href="#" className="signin">Sign In</a>
            <a href="#" className="signup">Sign Up</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
