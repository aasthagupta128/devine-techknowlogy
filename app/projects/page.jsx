import React from 'react'
import './page.css'
import Footer from '../components/footer/page'
import Socialmedia from '../components/social-media/page'
const page = () => {
  return (
    <div className='main-project'>
        <div className="header-project">            
            <div className="header-proj-para">
            <span className='quotes'>“</span>our website is more than just a digital presence; it’s a testament to our commitment to excellence<span className='quotes'> ”</span>
            </div>
        </div>

            <div className='journey-heading'>OUR JOURNEY SO FAR...</div>
            <div className='projects'>
              <div className='project1-main'>
              <div className='project1'>
                <div className='project-left'>
                  <div className='project-logo'>
                    <img src="/sudeepplasticsurgery.png" alt="" />
                  </div>
                  <div className='tech-stack'>
                    <div className='tech'>Figma</div>
                    <div className='tech'>HTML</div>
                    <div className='tech'>CSS</div>
                    <div className='tech'>NEXT.JS</div>
                  </div>
                </div>
                <div className='project-right'>
                  <div className='project-heading'>Sudeep plastic surgery</div>
                  <div className='project-description'>
                  We focused on creating a simple design for Sudeep Plastic Surgery Hospital, emphasizing the various surgeries offered. Efforts were made to provide clear and concise information, enabling potential patients to easily understand their options.
                  </div>
                </div>
                </div>
                <div className='check-live-project1'><a href='https://sudeepplasticsurgery.com/' target='_blank'>Check live website</a></div>
              </div>
              <div className='project2-main'>
                <div className='project2'>
              <div className='project-left'>
                  <div className='project-logo'>
                    <img src="/sudeepENT.png" alt="" />
                  </div>
                  <div className='tech-stack'>
                    <div className='tech'>Figma</div>
                    <div className='tech'>HTML</div>
                    <div className='tech'>CSS</div>
                    <div className='tech'>NEXT.JS</div>
                  </div>
                </div>
                <div className='project-right'>
                  <div className='project-heading'>Sudeep plastic surgery</div>
                  <div className='project-description'>
                  The website design for Sudeep ENT Hospital focuses on simplicity, presenting a variety of ENT services while offering concise and clear information. It is perfectly tailored as per the clients needs.
                  </div>
                </div>
                </div>
                <div className='check-live-project2'><a href='https://sudeepent.netlify.app' target='_blank'>Check live website</a></div>
              
              </div>
            </div>

            {/* Reviews */}

            <div className='review-heading'>
              <div className='review-title'>What They say...</div><div className='quotes'>  ”</div></div>
              <div className='reviews'>
            <div className='review-box'>
              <div className='project-review-content'>
              "The website design for Sudeep Plastic Surgery Hospital exceeded our expectations. The emphasis on facilities provided and timing was all perfect. Overall, a user-friendly and professional website!"
              </div>
              <div className='name-designation'>
              <div className='project-review-name'>Dr. Prayas Kumar</div>
              <div className='review-designation'>M. Ch. Plastic Surgeon, Sudeep Plastic Surgery Center</div>
              </div>
            </div>
            <div className='review-box'>
              <div className='project-review-content'>
              “I loved your work, the attention to details and the pace of work is what I liked the most. great work keep it up!!”
              </div>
              <div className='name-designation'>
              <div className='project-review-name'>Dr. Prayatna Kumar</div>
              <div className='review-designation'>M.S. E.N.T., Sudeep ENT Hospital</div>
              </div>
            </div>
            </div>

     <Socialmedia/>

      <Footer/>
      </div>
    
  )
}

export default page