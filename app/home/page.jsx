import "./home.css";


import Footer from "../components/footer/page";

const Page = () => {
  return (
   
    <div className="home-main">
    
      {/* HOME LANDING PAGE -----------------------------------------------------------------------------------------*/}
      <div className="headline">
        <img src="/plane.svg" alt="" className="header-image" />
       

        <div className="flexbox">
          <div className="col col-01">
            <h2>Web Designing</h2>
            <p>
              We offer the best web designing services that combine creativity, functionality, and user experience to deliver exceptional online solutions.
            </p>
            <a href="https://example.com"><h3>Know More</h3></a>
          </div>
          <div className="col col-01">
            <h2>Web Development</h2>
            <p>
              We offer the best web development services, leveraging cutting-edge technologies and a team of skilled professionals to deliver high-quality and innovative websites and web applications.
            </p>
            <a href="https://example.com"><h3>Know More</h3></a>
          </div>
          <div className="col col-01">
            <h2>Digital Marketing</h2>
            <p>
              We offer the best digital marketing services, employing strategic tactics and innovative campaigns to help businesses effectively reach and engage their target audience in the online landscape.
            </p>
            <a href="https://example.com"><h3>Know More</h3></a>
          </div>
        </div>
      </div>
  {/* CONNECT WITH US ---------------------------------------------------------------------------*/}
  <div className="connect-with-us">
    <div className="connect-with-us-content">
      <div className="connect-with-us-para">
    <span className="blue">Connect 	</span> with us on the journey of finding all the  <span className="blue">web</span> and  <span className="blue">digital solutions</span> with us.
    </div>
    <div className="ping-us">PING US</div>
    </div>
    </div>
 {/* WHY CHOOSE US---------------------------------------------------------------------------------- */}
      <div className="why-choose-us-main">
      <img src="/why_choose_us_blob.svg" alt="" className="blob"/>
        <div class="grid-container-wcu">
        <img src="/why_choose_us.svg" alt="why-choose-us" className="why-choose-us"/>

          <div class="box-wcu expertise">
          
            <img src="expertise.png" alt="Small Image"/>
            <h2>EXPERTISE</h2>
            
            <h3>A team of highly skilled professionals with extensive expertise in various technologies and domains.</h3>
          </div>
          <div class="box-wcu customization ">
            <img src="customization.png" alt="Small Image"/>
            <h2>CUSTOMIZATION</h2>
            <h3>Our team works closely with you to understand your goals and deliver a personalized solution that aligns with your vision.</h3>
          </div>
          <div class="box-wcu quality">
            <img src="quality.png" alt="Small Image"/>
            <h2>QUALITY</h2>
            <h3>Quality is our utmost priority. We adhere to industry best practices and follow rigorous quality assurance processes to ensure that our deliverables are best.</h3>
          </div>
          <div class="box-wcu timely">
            <img src="timely.png" alt="Small Image"/>
            <h2>TIMELY DELIVERY</h2>
            <h3>We value your time and understand the importance of meeting deadlines. Our company has a proven track record of delivering projects on time.</h3>
          </div>
          <div class="box-wcu satisfaction">
            <img src="satisfaction.png" alt="Small Image"/>
            <h2>CLIENT SATISFACTION</h2>
            <h3>Our ultimate goal is client satisfaction. We prioritize open communication, transparency, and collaboration throughout the project lifecycle.</h3>
          </div>
          </div>
        

      </div>

      {/* TECH STACK -----------------------------------------*/}
      <div className="tech-stack">
        <div className="tech-stack-detail">
          <h2>TECH STACK</h2>
          <p>
          Our projects uses an array of powerful tools and technologies to deliver a top-notch web development solution. With GitHub as our collaboration and version control platform, we build a social media platform featuring a responsive user interface. Leveraging React.js and Next.js, we ensure optimized performance and efficient routing. The design process is streamlined with Figma, while Bootstrap, CSS, HTML, and Tailwind CSS come together for stylish and customizable layouts. JavaScript adds dynamic functionalities, resulting in a visually stunning and robust web application.
          </p>
        </div>
        <img src="tech-stack.svg" alt="" />
      </div>

      {/* INDUSTRIES WE SERVE IN-------------------------------------------------------- */}
     <div className="industries">
      <h2>INDUSTRIES WE SERVE</h2>
      <h3>We serve diverse industries such as finance, healthcare, e-commerce, education, and entertainment. We provide tailored solutions to meet the unique needs and challenges faced by businesses in these sectors.
</h3>
<img src="industries.svg" alt="" />
     </div>

     {/* SATISFIED COSTUMER------------------ */}
    
      <div className="satisfied-customer">
        <img src="/lines-left.svg" alt="" className="lines-left" />
        <h2>SATISFIED COUSTMERS</h2>
        <img src="/lines-right.svg" alt="" className="lines-right"/>
      </div>
      <div className="satisfied-img">
      <img src="/sudeepplasticsurgery.png" alt="" className="sudeepplasticsurgery" />
      <img src="/sudeepENT.png" alt="" className="sudeepENT"/>
      </div>
      {/* CONNECT WITH US----------------------------------------------------------*/}

{/*        
  <div className="connect-with-us green">
      <h2>
      <p><span class="highlight">Connect</span> with us on the<br /> journey of finding all the <span class="highlight">web</span><br /> and  <span class="highlight">digital solutions </span> with us.
      </p></h2>
      <div className="two-btn">
      <div className="ping-us green">
        <p>PING US</p>
      </div>
    
      <div className="ping-us green mo-pro">
        <p>check more projects</p>
      </div>
      </div>
    </div> */}
     <div className="connect-with-us green">
    <div className="connect-with-us-content">
      <div className="connect-with-us-para">
    <span className="blue">Connect 	</span> with us on the journey of finding all the  <span className="blue">web</span> and  <span className="blue">digital solutions</span> with us.
    </div>
    </div>
    <div className="btn">
    <div className="ping-us">PING US</div>
    <div className="connect-button">CHECK MORE PROJECTS</div>
    </div>
   
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
  );
};

export default Page;
