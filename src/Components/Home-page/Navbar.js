import React from 'react';
import { Link } from 'react-router-dom';
import '../Home-page/navbar.css'

function Navbar (){
    
    return (

  <div className="page">
    <header tabindex="0"></header>

    <div id="nav-container">
        <div className="bg"></div>
            <div className="button" tabindex="0">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </div>

            <div id="nav-content" tabindex="0">
              <ul>
                <li><Link to ="/">Home </Link> </li>
                <li><Link to ="/About">About</Link> </li>
                <li><Link to ="/Team"> Meet the team </Link> </li>
                <li><Link to ="/Contact"> Contact Us</Link> </li>
              </ul>

            </div>
      </div>
  </div>

    

    );
}

export default Navbar; 