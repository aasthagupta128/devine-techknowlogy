import React from 'react'
import './page.css';
import Footer from '../components/footer/page';
const page = () => {
  return (
    <div className='main-contact'>
        <img src="contact-bg-1.png" alt="" />
        <contact-text>Contact us for the fun of Crafting!</contact-text>
      <div className="contact-us">
        <div className="box top-section">
          <div className="ellipse">

          <img src="/Ellipse.svg" alt="" />
          <img src="/Ellipse.svg" alt="" />
          <img src="/Ellipse.svg" alt="" />
          </div>
        </div>
        <div className="box lower-section">
            <div className="left-section"></div>
            <div className="right-section">
                <img src="/contact-svg.svg" alt="" />
            <form>
              <div className="form-group">
                <label for="full-name">Full Name:</label>
                <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required/>
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='Enter Your E-mail ID' required/>
              </div>
              <div className="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" placeholder="Enter Your Messages" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="support">
        <div className="left-side">
          <g>SUPPORT</g>
          <email-t>devine.techknowlogy@gmail.com</email-t>
          <line>Reach out and touch our world!</line>
        </div>
        <div className="right-side">
          <g>TRIBE</g>
          <email-t>Jainil Shah | Aastha Gupta</email-t>
          <line>Founders on Fire</line>
        </div>
      </div>
      <div className="made-by">
          <g>MADE BY</g>
          <email-t>Devine Techknowlogy</email-t>
          <line-made-by>With each line of code, we wove dreams into reality, finding bliss in the art of crafting digital wonders.</line-made-by>
        </div>

         {/* SOCIAL MEDIA LINKS---------------------------------------------------- */}

       <img src="red-sparkle.svg" alt="" className="red-sparkle"/>
       <div className="connect">
        <h2>CONNECT WITH US</h2>
        <div className="icons">
          <img src="twitter.svg" alt="" />
          <img src="gmail.svg" alt="" />
          <img src="github.svg" alt="" />
        </div>
       </div>
       <img src="purple-sparkle.svg" alt="" className="purple-sparkle"/>

       {/* FOOTER */}
<Footer/>

    </div>
  )
}

export default page
