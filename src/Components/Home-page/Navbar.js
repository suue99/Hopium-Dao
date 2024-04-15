import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/suue/Desktop/hopium-project/src/Components/Home-page/home.css'
import Logo from "/Users/suue/Desktop/hopium-project/src/Images/IMG_4099.JPG"

function Navbar (){
    
    return (

      <nav className="navbar">
      <ul>
      <Link to="/" className="logo-link">  
      <img src={Logo} alt="My Website Logo" className="logo"/> 
        </Link>
        
        <li><Link to ="/">Home </Link> </li>
        <li><Link to ="/about">About</Link> </li>
        <li><Link to ="/contact"> Contact Us</Link> </li>
       
       </ul>
    </nav>
    

    );
}

export default Navbar; 