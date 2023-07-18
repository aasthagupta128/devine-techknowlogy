'use client'
import Style from "./navbar.css"
import Link from 'next/link'
import { usePathname } from "next/navigation";
import {useState} from 'react';

export default function Navbar() 
{
  const pathname = usePathname();
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };
  const closeOverlay = () => {
    setOverlayOpen(false);
  };
  return (
    <div>
    <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src="/DT-footer.png" alt="SUDEEP ENT" />
          </a>
        </div>
        <div className={`links ${isOverlayOpen ? 'open' : ''}`}>
        <Link href="/home" className={`home-link ${pathname === "/home" ? 'active':''}`}>Home</Link>
          <Link href="/services" className={`services-link ${pathname === "/services" ? 'active':''}`}>Services</Link>
          <Link href="/project" className={`projects-link ${pathname === "/project" ? 'active':''}`}>Projects</Link>
          <Link href="/contact" className={`contact-link ${pathname === "/contact" ? 'active':''}`}>Contact</Link>
        </div>
        <div className={`hamburger ${isOverlayOpen ? 'hide' : ''}`} onClick={toggleOverlay}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </nav>
    <div className={`overlay ${isOverlayOpen ? 'open' : ''}`}>
      <div className="overlay-links">
        <Link href="/home" onClick={closeOverlay}>Home</Link>
        <Link href="/services" onClick={closeOverlay}>Services</Link>
        <Link href="/project" onClick={closeOverlay}>Projects</Link>
        <Link href="/contact" onClick={closeOverlay}>Contact</Link>
      </div>
    </div>
  </div>
  )
}
