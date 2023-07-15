
import './page.css';
import Footer from '../components/footer/page';
const page = () => {
  return (
    <div className="services-main">

    {/* SERVICES LANDING PAGE -----------------------------------------------------------------------------------------*/}

    <div className="headline">
    <img src="/services-landing.svg" alt="" className="header-image" />
    </div>
    
{/* DESIGN SERVICES------------------------------------------------------------------------------------------------ */}

 <div className="design-services">
 <h2>"Where Imagination Takes Shape: Unleashing Design Excellence"</h2>
  <p>WEBSITE DESIGN</p>
<div class="flex-container-services">
  <div class="box-services">  <box-title>1. Efficient landing page</box-title><br/><br/>
    <box-para>Streamlined and persuasive web pages that effectively guide users towards a specific action or goal.</box-para></div>
  <div class="box-services"><box-title>2. Responsive web design</box-title><br/><br/>
    <box-para>Designing websites to seamlessly adapt and provide optimal user experience across different devices and screen sizes.</box-para></div>
  <div class="box-services"><box-title>3. STATIC WEBSITES</box-title><br/><br/>
    <box-para>Websites that consist of fixed content and layout, typically coded in ReactJS or NextJS as per the demand.</box-para></div>
  <div class="box-services"><box-title>4. CUSTOM LAYOUTS</box-title><br/><br/>
    <box-para>Uniquely designed website structures and arrangements tailored to specific brand or project requirements.</box-para></div>
</div>
</div>

{/* CONNECT WITH US ---------------------------------------------------------------------------*/}
   {/* CONNECT WITH US ---------------------------------------------------------------------------*/}
  <div className="connect-with-us yellow">
    <div className="connect-with-us-content">
      <div className="connect-with-us-para">
    <span className="blue">Connect 	</span> with us on the journey of finding all the  <span className="blue">web</span> and  <span className="blue">digital solutions</span> with us.
    </div>
    <div className="ping-us">PING US</div>
    </div>
    </div>

    {/* WEB DEVELOPMENT SERVICES-------------------------------------------------------------------- */}
       
   
    <div className="development-services">
      <dev-heading>"Building Powerful and Engaging Online Experiences, transforming ideas into digital reality"</dev-heading>
      <dev-title>WEB DEVELOPMENT<br/> SERVICES</dev-title>
      <div className="ul-cointainer-web-dev-1">
        <ul className="color-1">RESPONSIVE WE DESIGNS</ul>
        <ul className="color-2">EASY MAINTAIN CODE</ul>
        <ul className="color-3">LATEST TECHNOLOGY</ul>

      </div>
      <div className="ul-cointainer-web-dev-2">
        <ul className="color-4">USER FRIENDLY DESIGNS</ul>
        <ul className="color-5">UNIQUE IDEAS</ul>
        <ul className="color-6">DEVELOPMENT LEVEL SEO</ul>

      </div>
    </div>

{/* SOCIAL MEDIA--------------------------------- */}
<div className="social-media-web">
  <div className="ul-cointainer-social">
<ul>
  <li>SOCIAL MEDIA MARKETING</li>
  <li>EMAIL MARKETING</li>
  <li>SEARCH ENGINE OPTIMIZATION</li>
  <li>WEBSITE MAINTANANCE</li>
  <li>CUSTOM EMAIL TEMPLATES</li>
</ul>
</div>
</div>

{/* WEB HOSTING SEVICES------------------ */}

<div className="web-services">
<div className="web-services-heading">WEB HOSTING SERVICES</div>
</div>

{/* CONNECT WITH US */}

<div className="connect-with-us orange">
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

    {/* SOCIAL MEDIA LINKS --------------------*/}

    
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

       {/* FOOTER--------------------------------------------- */}
       <Footer/>
    </div>
    
  )
}

export default page