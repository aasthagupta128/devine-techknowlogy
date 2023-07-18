import React from 'react'
import "./page.css"

const Footer = () => {
  return (
    <div>
    <div className="rectangle-fo">
      <div className="work">
        <p>In the end, it's not just a website; It's a piece of our soul, a manifestation of the love we hold for the art of creation. </p>
        <img src="/DT-footer.png" alt="" />
      </div>
      <div className="connect-links">
        <div className="connect-footer">
        <h3>Connect</h3>
        
          <ul>Twitter</ul>
          <ul>GitHub</ul>
          <ul>Gmail</ul>
       
        </div>
        <div className="quick-links">
<h3> Quick Links</h3>

          
<ul>Twitter</ul>
          <ul>GitHub</ul>
          <ul>Gmail</ul>
        
        </div>
      </div>

    </div>
    <div className="copyright-line">
      <div className="line"></div>
    <p>Copyright © 2023 Devine Techknowlogy. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer