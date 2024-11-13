import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";



 

const Footer = () => {
  return (
    <section>

        {/* &&&&&&&&&&&&&    footer main content  ( upper part ) */}
      <div className="flex max-md:flex-wrap gap-10 lg:gap-20 justify-between  h-max bg-[#012e2e] py-10 px-3 sm:py-16 sm:px-10 lg:py-20 lg:px-16">
        <div className="flex flex-col ">
          <Link to="/"><img className="w-[160px] md:w-[180px] p-2 lg:w-[230px] md:p-4 box-content bg-white rounded-lg" src="https://pillup.com/assets/logo.svg" alt="company logo" /></Link> 
          <p className="text-[20px] md:text-2xl text-white font- my-5">Quality health with convenience</p>
          {/* &&&&&&&&&&&& pillUp socials icon link &&&&&&&&&&&&  */}
          <Socials />

          {/* &&&&&&&&&&&& download  links &&&&&&&&&&&&  */}
          <div className="flex flex-wrap gap-4 mt-5">
            <a href="https://play.google.com/store/apps/details?id=com.pillup">
              <img
              className="w-[160px] md:w-[200px]"
                src="https://pillup.com/assets/Footer/androidDownload.svg"
                alt="android Download"
              />
            </a>
            <a href="https://apps.apple.com/in/app/pillup/id6447748859">
              <img
              className="w-[160px] md:w-[200px]"
                src="https://pillup.com/assets/Footer/iosDownload.svg"
                alt="ios download"
              />
            </a>
          </div>
        </div>


        {/* &&&&&&&&&&&&  Nav links   &&&&&&&&&&&&  */}
        <div className="flex gap-6 justify-between">
          <div className="flex flex-col text-cyan-50">
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-5 md:mb-10">PillUp</h3>
            <FooterLinks text="How it works" url="/HowItWorks" />
            <FooterLinks text="Why Us" url="/WhyUs" />
            <FooterLinks text="FAOs" url="/faq" />
            <FooterLinks text="Blogs" url="/Blogs" />
          </div>
          <div className="flex flex-col text-cyan-50">
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-5 md:mb-10">Legal</h3>
            <FooterLinks text="Terms & Conditions" url="terms-and-condition" />
            <FooterLinks text="Privacy Policy" url="privacy-policy" />
            <FooterLinks
              text="Refund & cancellation"
              url="refund-and-cancellation"
            />
            <FooterLinks text="Shipping Policy" url="shipping-policy" />
          </div>

          <div className="flex flex-col text-cyan-50">
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-5 md:mb-10">Stay Connected</h3>
            <FooterLinks text="Brand Story" url="BrandStory" />
            <FooterLinks
              text="About Us"
              url="https://www.tatvacare.in/about/"
            />
            <FooterLinks text="Contact Us" url="/Contact-us" />
            <FooterLinks text="hello@pillup.com" url="hello@pillup.com" />
            <FooterLinks text="9818360666" url="tel:+91 9818360666" />
          </div>
        </div>
      </div>
      <h3 className="bg-[#005b5b] h-[64px] flex items-center justify-center text-center tracking-tighter text-white text-[16px] sm:text-xl lg:text-2xl ">
        Copyright © 2024 TatvaCare | All Rights Reserved
      </h3>
    </section>
  );
};


const FooterLinks = ({ text, url }) => {
  return <Link to={url} className="text-lg md:text-xl my-2 font-thin">{text} </Link>;
};


const Socials = () => {
    return(
        <div className="flex gap-5 ">
        <a href="https://www.instagram.com/pillupindia/?igshid=YmMyMTA2M2Y%3D">
          <InstagramIcon style={{fontSize:"3rem", color:"white"}} className="hover:scale-110 max-sm:scale-90" />
        </a>
        <a href="https://twitter.com/PillUpIndia">
          <XIcon style={{fontSize:"2.9rem", color:"white"}} className="hover:scale-110 max-sm:scale-90"  />
        </a>
        <a href="https://www.linkedin.com/company/pillupindia/">
          <LinkedInIcon style={{fontSize:"3.2rem", color:"white"}} className="hover:scale-110 max-sm:scale-90"  />
        </a>
      </div>
    )
}


export default Footer;
