import React from 'react'
import './page.css'
import Footer from '../components/footer/page'
import Socialmedia from '../components/social-media/page'
const page = () => {
  return (
    <div className='main-project'>
        <div className="header-project">
            <img src="/header-quote-up.svg" alt="" className='header-quote-up'/>
            <div className="header-proj-para">our website is more than just a digital presence; it’s a testament to our commitment to excellence</div>
           
            <img src="/header-quote-down.svg" alt="" className='header-quote-down'/>
        </div>

        <div className="projects">
            <div className="project-1">
                <img src="/sudeepplasticsurgery.png" alt="" className='sudeepplasticsurgery' />
                <img src="/mood-1.png" alt="" className='mood-1' />
                <div className='check-now'>Check the Live Website now!!</div>
                <h2>SUDEEP PLASTIC SURGERY</h2>
                <div className='description'>We focused on creating a simple design for Sudeep Plastic Surgery Hospital, emphasizing the various surgeries offered. Efforts were made to provide clear and concise information, enabling potential patients to easily understand their options.</div>
            </div>
            
        </div>
        <div className="tech-stack-1">
          <ul>FIGMA</ul>
          <ul>CSS</ul>
          <ul>HTML</ul>
          <ul>REACT.JS</ul>
      </div>
        <div className="review-1">
          <img src="blue-review.svg" alt="" />
          <div className="review-des">“The website design for Sudeep Plastic Surgery Hospital exceeded our expectations. The emphasis on facilities provided and timing was all perfect. Overall, a user-friendly and professional website!“</div>
          <h2>Dr. Prayas Kumar</h2>
          <p>M. Ch. Plastic Surgeon, Sudeep Plastic Surgery Center</p>
           <div className="quote-yellow">
            <img src="quote-yellow.svg" alt="" />
           </div>
        </div>
         {/* CONNECT WITH US ---------------------------------------------------------------------------*/}
         <div className="connect-with-us green">
    <div className="connect-with-us-content">
      <div className="connect-with-us-para">
    <span className="blue">Connect 	</span> with us on the journey of finding all the  <span className="blue">web</span> and  <span className="blue">digital solutions</span> with us.
    </div>
    <div className="ping-us">PING US</div>
    </div>
    </div>
      {/* PROJECT 2 */}


      <div className="project-2">
        <img src="/sudeepENT.png" alt="" className='ENT-img'/>
        <div className="ENT-descp">
        The website design for Sudeep ENT Hospital focuses on simplicity, presenting a variety of ENT services while offering concise and clear information. It is perfectly tailored as per the clients needs.
        </div>
        <div className="ENT-live">
          <p>Check the Live Website now!!</p>
          <h2>SUDEEP ENT HOSPITAL</h2>
          </div>
      
        <img src="mood-2.png" alt="" className="mood-2"/>
      
      </div>

      <div className="tech-stack-2">
        <ul>FIGMA</ul>
        <ul>CSS</ul>
        <ul>HTML</ul>
        <ul>REACT.JS</ul>
      </div>

      {/* REVIEW */}
     <div className="review-2">
      <div className="para-ENT">“I loved your work, the attention to details and the pace of work is what I liked the most. great work keep it up!!”</div>
      <img src="/red-thumbs-up.svg" alt="" className='red-thumbs-up'/>
      <img src="/sudeepent-quote.svg" alt="" className='sudeepent-quote'/>
      <div className="dr-prayatna">
        <div className="name">Dr. Prayatna Kumar</div>
        <div className="designation">M.S. E.N.T., Sudeep ENT Hospital</div>
     </div>
      </div>


     <Socialmedia/>

      <Footer/>
      </div>
    
  )
}

export default page