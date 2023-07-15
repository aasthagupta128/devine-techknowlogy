import React from 'react'
import "./page.css"

const Footer = () => {
  return (
    <div>
    <div className="rectangle-fo">
      <div className="work">
        <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
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