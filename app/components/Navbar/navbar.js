'use client'
// import Style from "./navbar.css"
import Link from 'next/link'
import { usePathname } from "next/navigation";
import {useState} from 'react';

import './navbar.css'


export default function Navbar() 
{
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };
  
  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  return (
    <div className='nav-overlay'>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src="LOGO1.png" alt="Devine Techknowlogy" />
          </a>
        </div>
        <div className={`hamburger ${isOverlayOpen ? 'hide' : ''}`} onClick={toggleOverlay}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className={`close-icon ${isOverlayOpen ? '' : 'hide'}`} onClick={toggleOverlay}>
          <img src="close-icon.png" alt="Close" />
        </div>
        <div className={`links ${isOverlayOpen ? 'open' : ''}`}>
          <Link exact to="/" activeClassName="active" className="home-link">Home</Link>
          <Link to="services" activeClassName="active" className="services-link">services</Link>
          <Link to="facilities" activeClassName="active" className="facilities-link">Facilities</Link>
          <Link to="contact" activeClassName="active" className="contact-link">Contact</Link>
        </div>
      </nav>
    <div className={`overlay ${isOverlayOpen ? 'open' : ''}`}>
        <div className="overlay-links"> 
          <Link to="/" onClick={closeOverlay} activeClassName="active" className="home-link" >Home</Link>
          <Link to="services" onClick={closeOverlay} activeClassName="active" className="services-link">services</Link>
          <Link to="facilities" onClick={closeOverlay} activeClassName="active" className="facilities-link">Facilities</Link>
          <Link to="contact" onClick={closeOverlay} activeClassName="active"  className="contact-link">Contact</Link>
        </div>
      </div>
    </div>
  );
  
}
