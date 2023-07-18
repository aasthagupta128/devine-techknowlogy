
import './page.css';
import Footer from '../components/footer/page';
import Socialmedia from '../components/social-media/page';

const page = () => {
  return (
    <div className='main-contact' >
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
                <img src="/contact-svg.svg" alt="" className="right-sec-img"/>
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
              <div className="submit-btn-div">
              <button type="submit">Submit</button></div>
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
        {/* <div className="right-side">
          <g>TRIBE</g>
          <email-t>Jainil Shah | Aastha Gupta</email-t>
          <line>Founders on Fire</line>
        </div> */}
      </div>
      <div className="made-by">
          <g>MADE BY</g>
          <email-t>Devine Techknowlogy</email-t>
          <line-made-by>With each line of code, we wove dreams into reality, finding bliss in the art of crafting digital wonders.</line-made-by>
        </div>

         {/* SOCIAL MEDIA LINKS---------------------------------------------------- */}
<div className="useless-2">
       <Socialmedia/>  

       {/* FOOTER */}
<Footer/>
</div>

    </div>
  )
}

export default page
